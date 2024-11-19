import React, { useState, useEffect } from 'react';
import styles from './EditProfile.module.css';
import { auth, firestore } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail, reauthenticateWithCredential, deleteUser, reauthenticateWithPopup, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';
import Input from '../Forms/Input';
import iconpe from '../../assets/iconeeditar.png';
import bted from '../../assets/borda.png';
import btdentro from '../../assets/bteditar.png';
import fotosituacao from '../../assets/fotosituacao.svg';

const EditProfile = () => {
    const [previewURL, setPreviewURL] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [fotoSituacao1, setFotoSituacao1] = useState(null);
    const [fotoSituacao2, setFotoSituacao2] = useState(null);
    const [fotoSituacao3, setFotoSituacao3] = useState(null);
    const [upload, setUpload] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [minhaHistoria, setminhaHistoria] = useState('');
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(firestore, "Usuários", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    setUserDetails(userData);
                    setNome(userData.nome || '');
                    setEmail(userData.email || '');
                    setTelefone(userData.telefone || '');
                    setminhaHistoria(userData.minhaHistoria || '');
                    setPreviewURL(userData.fotoPerfil || '');
                    setFotoSituacao1(userData.fotoSituacao1 || null);
                    setFotoSituacao2(userData.fotoSituacao2 || null);
                    setFotoSituacao3(userData.fotoSituacao3 || null);
                } else {
                    console.log("Usuário não encontrado");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const resizedImage = await resizeImage(file, 400, 400);
            setFotoPerfil(resizedImage);
            setPreviewURL(URL.createObjectURL(resizedImage));
        }
    };

    const resizeImage = (file, width, height) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    resolve(new File([blob], file.name, { type: file.type }));
                }, file.type);
            };
        });
    };

    const handleSaveChanges = async () => {
        try {
            const user = auth.currentUser;
            const userRef = doc(firestore, "Usuários", user.uid);
            await setDoc(userRef, {
                nome,
                email,
                telefone,
                minhaHistoria,
            }, { merge: true });
            window.location.href = '/profile';
        } catch (error) {
            console.error("Erro ao salvar alterações:", error);
        }
    };

    const uploadProfileImage = async () => {
        if (!fotoPerfil) {
            console.log('Nenhuma imagem selecionada.');
            return;
        }

        try {
            setUpload(true);
            const storage = getStorage();
            const storageRef = ref(storage, `fotosdeperfil/${fotoPerfil.name}`);
            await uploadBytes(storageRef, fotoPerfil);
            const downloadURL = await getDownloadURL(storageRef);

            const user = auth.currentUser;
            const userRef = doc(firestore, "Usuários", user.uid);
            await setDoc(userRef, { fotoPerfil: downloadURL }, { merge: true });
            setPreviewURL(downloadURL);
        } catch (error) {
            console.error("Erro ao fazer upload:", error);
        } finally {
            setUpload(false);
        }
    };

    const uploadSituacaoImage = async (file, situacao) => {
        if (!file) return;

        try {
            setUpload(true);
            const storage = getStorage();
            const storageRef = ref(storage, `fotosdesituacao/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);

            const user = auth.currentUser;
            const userRef = doc(firestore, "Usuários", user.uid);
            await setDoc(userRef, { [situacao]: downloadURL }, { merge: true });
            if (situacao === 'fotoSituacao1') setFotoSituacao1(downloadURL);
            if (situacao === 'fotoSituacao2') setFotoSituacao2(downloadURL);
            if (situacao === 'fotoSituacao3') setFotoSituacao3(downloadURL);
        } catch (error) {
            console.error("Erro ao fazer upload:", error);
        } finally {
            setUpload(false);
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const authInstance = getAuth();
        try {
            await sendPasswordResetEmail(authInstance, email);
            alert('Um e-mail foi enviado para redefinir sua senha.');
        } catch (error) {
            console.error("Erro ao enviar e-mail de redefinição de senha:", error);
            alert('Erro ao enviar e-mail de redefinição de senha.');
        }
    };

    const handleDeleteAccount = async () => {
        const user = auth.currentUser;
        if (!user) {
            alert('Nenhum usuário autenticado.');
            return;
        }
    
        const confirmation = window.confirm(
            'Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.'
        );
    
        if (!confirmation) return;
    
        try {
            const providerId = user.providerData[0]?.providerId;
    
            if (providerId === 'google.com') {
                const provider = new GoogleAuthProvider();
                await reauthenticateWithPopup(user, provider);
            } else if (providerId === 'password') {
                const password = prompt('Digite sua senha para confirmar:');
                if (!password) {
                    alert('Senha é necessária para reautenticação.');
                    return;
                }
                const credential = EmailAuthProvider.credential(user.email, password);
                await reauthenticateWithCredential(user, credential);
            } else {
                throw new Error('Método de autenticação não suportado para exclusão.');
            }
    
            await deleteUser(user);
    
            const userDocRef = doc(firestore, "Usuários", user.uid);
            await deleteDoc(userDocRef);
    
            alert('Sua conta foi excluída com sucesso.');
            window.location.href = '/';
        } catch (error) {
            console.error("Erro ao excluir conta:", error);
            if (error.code === 'auth/requires-recent-login') {
                alert(
                    'Você precisa fazer login novamente para excluir sua conta. Por favor, saia e entre novamente.'
                );
            } else {
                alert(`Erro ao excluir conta: ${error.message}`);
            }
        }
    };

    const handleShowProfile = () => {
        window.location.href = '/profile/meuperfil';
    }

    return (
        <form>
            {userDetails ? (
                <>
                    <div className={styles.espaco}></div>

                    <div className={styles.seup}>
                        <section className={styles.texto}>
                            <img src={iconpe} alt="Icon Usuario" className={styles.iconpe} />
                            <label className={styles.titp}>Meu Perfil</label>
                        </section>
                    </div>

                        <div className={styles.espaco}></div>
                        <center><div className={styles.imageContainer}>
                            <label htmlFor="imageUpload" className={styles.imageOverlay}>
                                {previewURL ? (
                                    <img src={previewURL} alt="Preview da foto" className={styles.profileImage} />
                                ) : (
                                    <img src={btdentro} alt="Clique para adicionar imagem" className={styles.profileImage} />
                                )}
                                <img src={bted} alt="Borda de perfil" className={styles.profileBorder} />
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                id="imageUpload"
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                            />
                        </div></center>

                        <center><button className={styles.but2} type="button" onClick={uploadProfileImage} disabled={upload}>
                            {upload ? "Enviando..." : "Salvar Foto de Perfil"}
                        </button></center><br />

<div className={styles.comps}>

                        <label className={styles.titp2}>Nome</label> <Input  type="text" id="nome" value={nome} setValue={setNome} />
                        <div className={styles.espaco}></div>
                        <label className={styles.titp2}>Telefone</label><Input  type="text" id="telefone" value={telefone} setValue={setTelefone} />
                        <div className={styles.espaco}></div>
                        <label className={styles.titp2}>E-mail</label><Input type="email" id="email" value={email} setValue={setEmail} />
                        <div className={styles.espaco}></div>
                        </div>
                        <div className={styles.espaco}></div>
                        
                        <div className={styles.comps2}>
                     <section className={styles.suahist}>
                        <label className={styles.th}>Sua história</label>
                        <p> </p>
                        
                        <textarea
                            id="minhaHistoria"
                            className={styles.input}
                            value={minhaHistoria}
                            onChange={(e) => setminhaHistoria(e.target.value)}
                            maxLength={750}
                            rows={19}
                            cols={70}
                            placeholder="Digite aqui..."
                        />
                        </section>
                        <p> </p>
                        
                        <div className={styles.asfotos}>
                            <div className={styles.tfts}>
                                <section className={styles.secth2}>
                                    <label className={styles.th2}>Suas fotos</label>
                                </section>
                            </div>
                          
                            
                            <div className={styles.stf}>

                                <label htmlFor="situacao1Upload" >
                                    {fotoSituacao1 ? (
                                        <img src={fotoSituacao1} alt="Foto de Situação 1" className={styles.iconst} />
                                    ) : (
                                        <img src={fotosituacao} alt="Clique para adicionar Foto de Situação 1" className={styles.iconst} />
                                    )}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="situacao1Upload"
                                    onChange={(e) => uploadSituacaoImage(e.target.files[0], 'fotoSituacao1')}
                                    style={{ display: 'none' }}
                                />

                                <label htmlFor="situacao2Upload" >
                                    {fotoSituacao2 ? (
                                        <img src={fotoSituacao2} alt="Foto de Situação 2" className={styles.iconst} />
                                    ) : (
                                        <img src={fotosituacao} alt="Clique para adicionar Foto de Situação 2" className={styles.iconst} />
                                    )}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="situacao2Upload"
                                    onChange={(e) => uploadSituacaoImage(e.target.files[0], 'fotoSituacao2')}
                                    style={{ display: 'none' }}
                                />

                                <label htmlFor="situacao3Upload">
                                    {fotoSituacao3 ? (
                                        <img src={fotoSituacao3} alt="Foto de Situação 3" className={styles.iconst} />
                                    ) : (
                                        <img src={fotosituacao} alt="Clique para adicionar Foto de Situação 3" className={styles.iconst} />
                                    )}
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="situacao3Upload"
                                    onChange={(e) => uploadSituacaoImage(e.target.files[0], 'fotoSituacao3')}
                                    style={{ display: 'none' }}
                                />
                                </div>
                            </div>
                        </div>
                      
                        <p> </p>

                        <center><button type="button" onClick={handleSaveChanges} className={styles.btroxo}>Salvar Alterações</button></center>
                        
                        <div className={styles.comps}>
                            <label className={styles.titp2}>Redefinir Senha</label>
                            
                            <button type="button" onClick={handlePasswordReset} className={styles.btbranco}>
                                Enviar para o e-mail
                            </button>

                            <p> </p> 

                            <button type="button" onClick={handleShowProfile}>
                                Retornar ao perfil
                            </button>

                            <button type="button" onClick={handleDeleteAccount} className={styles.botaoperigo}>
                                Excluir Conta
                            </button>
                            
                        </div>
                    
                </>
            ) : (
                <p>Carregando dados do usuário...</p>
            )}
        </form>
    );
};

export default EditProfile;
