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
import lixeira from '../../assets/lixeira.png';
import fotosituacao from '../../assets/fotosituacao.svg';

const EditProfileOng = () => {
    const [previewURL, setPreviewURL] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [fotoSituacao1, setFotoSituacao1] = useState(null);
    const [fotoSituacao2, setFotoSituacao2] = useState(null);
    const [fotoSituacao3, setFotoSituacao3] = useState(null);
    const [upload, setUpload] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [organizacao, setOrganizacao] = useState('');
    const [ongDetails, setOngDetails] = useState(null);
    const [facebook, setFacebook] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [website, setWebsite] = useState('');
    const [instagram, setInstagram] = useState('');
    const [bio, setBio] = useState('');
    const [limitePessoas, setLimitePessoas] = useState(null);
    const [tags, setTags] = useState('');

    const fetchOngData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(firestore, "Ongs", user.uid); // Mudou para a coleção Ongs
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const ongData = docSnap.data();
                    setOngDetails(ongData);
                    setNome(ongData.nome || '');
                    setEmail(ongData.email || '');
                    setTelefone(ongData.telefone || '');
                    setFacebook(ongData.facebook || '');
                    setWebsite(ongData.website || '');
                    setInstagram(ongData.instagram || '');
                    setLocalizacao(ongData.localizacao || '');
                    setOrganizacao(ongData.organizacao || '');
                    setBio(ongData.bio || '');
                    setLimitePessoas(ongData.limitePessoas?.toString() || ''); 
                    setPreviewURL(ongData.fotoPerfil || '');
                    setFotoSituacao1(ongData.fotoSituacao1 || null);
                    setFotoSituacao2(ongData.fotoSituacao2 || null);
                    setFotoSituacao3(ongData.fotoSituacao3 || null);
                    setTags(ongData.tags || '');
                } else {
                    console.log("ONG não encontrada");
                }
            }
        });
    };

    useEffect(() => {
        fetchOngData();
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
            const ongRef = doc(firestore, "Ongs", user.uid);

            const limitePessoasNumber = limitePessoas ? parseInt(limitePessoas, 10) : null;

            await setDoc(ongRef, {
                nome,
                email,
                facebook,
                website,
                instagram,
                localizacao,
                telefone,
                organizacao,
                bio,
                limitePessoas: limitePessoasNumber,
                tags,
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
            const ongRef = doc(firestore, "Ongs", user.uid); 
            await setDoc(ongRef, { fotoPerfil: downloadURL }, { merge: true });
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
            const ongRef = doc(firestore, "Ongs", user.uid);
            await setDoc(ongRef, { [situacao]: downloadURL }, { merge: true });
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
    
            const ongDocRef = doc(firestore, "Ongs", user.uid);
            await deleteDoc(ongDocRef);
    
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
    };

    return (
        <body id={styles.borda}>
        <div className={styles.mainContainer}>
        <form>
            {ongDetails ? (
                <>
                    <div className={styles.espaco}></div>
<div className={styles.topo}>
                    <div className={styles.seup}>
                        <section className={styles.texto}>
                            <img src={iconpe} alt="Icon ONG" className={styles.iconpe} />
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
                    </div>
                    <center><button type="button" onClick={uploadProfileImage} disabled={upload} className={styles.butsalv}>
                        {upload ? "Enviando..." : "Salvar Foto de Perfil"}
                    </button></center><br />
                    <div className={styles.todos}>
                    <div className={styles.comp1}>
                 
                    <label className={styles.titp2}>Nome</label> <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                    <div className={styles.espaco2}></div>
                    <label className={styles.titp2}>Telefone</label><input type="text" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} ></input>
                    <div className={styles.espaco2}></div>
                    <label className={styles.titp2}>Limites de pessoas para ajudar</label><input type="number" id="limitePessoas" value={limitePessoas} onChange={(e) => setLimitePessoas(e.target.value)}></input>
                    <div className={styles.espaco2}></div>
                    <label className={styles.titp2}>E-mail</label><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <div className={styles.espaco2}></div>
                    <label className={styles.titp2}>Facebook</label><input type="text" id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className={styles.comp2}>
                    <label className={styles.titp2}>Instagram</label><input type="text" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)}></input>
                    <div className={styles.espaco2}></div>
                  
                    <label className={styles.titp2}>Website</label><input type="text" id="website" value={website} onChange={(e) => setWebsite(e.target.value)}></input>
                    <div className={styles.espaco2}></div>
                    <label className={styles.titp2}>Localização</label><input type="text" id="localizacao" value={localizacao} onChange={(e) => setLocalizacao(e.target.value)}></input>
                    <div className={styles.espaco2}></div>
                    <div>
                    <label className={styles.titp2}>Classifique a sua ONG</label>
                    </div>
                    <div>
                    <select className={styles.slct}label="Selecione uma tag" id="tag" value={tags} onChange={(e) => setTags(e.target.value)}>
                        <option value="" disabled selected>Classifique a sua ONG</option>
                        <option value="Alimentos">Alimentos</option>
                        <option value="Higiene">Higiene</option>
                        <option value="Trabalho Voluntário">Trabalho Voluntário</option>
                    </select>
                    </div>
                    </div>
                    </div>
                    <p> </p>
                    
                  
                    <p> </p>
                    <div className={styles.comps2}>
                    <div className={styles.continfos}>
                    <label className={styles.th2}>Sobre a organização</label>
                    <p> </p> 
                    <textarea
                        id="organizacao"
                        value={organizacao}
                        onChange={(e) => setOrganizacao(e.target.value)}
                        maxLength={750}
                        rows={10}
                        cols={70}
                    />
                    <p> </p>
                    <label className={styles.th2}>Bio</label>
                    <p> </p> 
                    <textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        maxLength={200}
                        rows={10}
                        cols={70}
                    />
                  </div>
                    <p> </p>
                   
                    <div className={styles.asfotos}>
                        <div className={styles.tfts}>
                        <section>
                            <label className={styles.th2}>Suas fotos</label>
                            </section>
                            </div>
                            <div className={styles.espaco}></div>
                                <div className={styles.stf}>
                                    <label htmlFor="situacao1Upload">
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
                                    <img src={lixeira} alt="Apagar foto 1" className={styles.lixeira1} onClick={() => setFotoSituacao1(null)} style={{ cursor: 'pointer'}}/>

                                    <label htmlFor="situacao2Upload">
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
                                    <img src={lixeira} alt="Apagar foto 2" className={styles.lixeira1} onClick={() => setFotoSituacao2(null)} style={{ cursor: 'pointer'}}/>

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
                                    <img src={lixeira} alt="Apagar foto 3" className={styles.lixeira1} onClick={() => setFotoSituacao3(null)} style={{ cursor: 'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    <p> </p>

                            <div className={styles.botoestrans}>
                 <button type="button" onClick={handleSaveChanges} className={styles.btroxo}>Salvar Alterações</button>
                       

                        <button type="button" onClick={handlePasswordReset} className={styles.btbranco} >
                            Enviar E-mail de Redefinição
                        </button>

                        <button type="button" onClick={handleDeleteAccount} className={styles.botaoperigo}>
                            Excluir Conta
                        </button>

                        <button type="button" onClick={handleShowProfile} className={styles.btroxo}>
                            Retornar ao perfil
                        </button>
                        </div>
                </>
            ) : (
                <div>Carregando dados...</div>
            )}
            
        </form>
        </div>
        </body>
    );
};

export default EditProfileOng;
