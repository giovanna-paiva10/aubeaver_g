import React, { useState, useEffect } from 'react';
import styles from './EditProfile.module.css';
import { auth, firestore } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Input from '../Forms/Input';
import iconpe from '../../assets/iconeeditar.png';
import bted from '../../assets/borda.png';
import btdentro from '../../assets/bteditar.png';

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
            const resizedImage = await resizeImage(file, 150, 150);
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

                        <center><button type="button" onClick={uploadProfileImage} disabled={upload}>
                            {upload ? "Enviando..." : "Salvar Foto de Perfil"}
                        </button></center><br />

                        <Input label="Nome" type="text" id="nome" value={nome} setValue={setNome} />
                        <Input label="Telefone" type="text" id="telefone" value={telefone} setValue={setTelefone} />
                        <Input label="E-mail" type="email" id="email" value={email} setValue={setEmail} />
                        <label>Sua história</label>
                        <p> </p>
                        <textarea
                            id="minhaHistoria"
                            value={minhaHistoria}
                            onChange={(e) => setminhaHistoria(e.target.value)}
                            maxLength={750}
                            rows={10}
                            cols={70}
                        />
                        <p> </p>

                        <div>
                            <label>Foto de Situação 1</label>
                            <input type="file" accept='image/*' onChange={(e) => uploadSituacaoImage(e.target.files[0], 'fotoSituacao1')} />
                            {fotoSituacao1 && <img src={fotoSituacao1} alt="Foto de Situação 1" />}
                        </div>
                        <p> </p>

                        <div>
                            <label>Foto de Situação 2</label>
                            <input type="file" accept='image/*' onChange={(e) => uploadSituacaoImage(e.target.files[0], 'fotoSituacao2')} />
                            {fotoSituacao2 && <img src={fotoSituacao2} alt="Foto de Situação 2" />}
                        </div>
                        <p> </p>

                        <div>
                            <label>Foto de Situação 3</label>
                            <input type="file" accept='image/*' onChange={(e) => uploadSituacaoImage(e.target.files[0], 'fotoSituacao3')} />
                            {fotoSituacao3 && <img src={fotoSituacao3} alt="Foto de Situação 3" />}
                        </div>
                        <p> </p>

                        <button type="button" onClick={handleSaveChanges}>Salvar Alterações</button>

                        <h3>Redefinir Senha</h3>
                        <button type="button" onClick={handlePasswordReset}>
                            Enviar E-mail de Redefinição
                        </button>

                        <button type="button" onClick={handleShowProfile}>
                            Retornar ao perfil
                        </button>
                    
                </>
            ) : (
                <p>Carregando dados do usuário...</p>
            )}
        </form>
    );
};

export default EditProfile;