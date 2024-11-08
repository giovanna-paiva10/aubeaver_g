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
                    setUserDetails(docSnap.data());
                    setNome(docSnap.data().nome || '');
                    setEmail(docSnap.data().email || '');
                    setTelefone(docSnap.data().telefone || '');
                    setminhaHistoria(docSnap.data().minhaHistoria || '');
                    setPreviewURL(docSnap.data().fotoPerfil || '');
                } else {
                    console.log("Usuário não logado");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFotoPerfil(file);
            setPreviewURL(URL.createObjectURL(file));
        }
    };

    const handleSituationImageChange = (event, setImage) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
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

            console.log('Informações salvas com sucesso!');
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
            console.log('Imagem enviada com sucesso:', downloadURL);

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

    const uploadSituationImages = async () => {
        const storage = getStorage();
        const user = auth.currentUser;
        const userRef = doc(firestore, "Usuários", user.uid);
        const uploadedImages = {};

        const uploadImage = async (file, name) => {
            const storageRef = ref(storage, `imagensperfil/${file.name}`);
            await uploadBytes(storageRef, file);
            return await getDownloadURL(storageRef);
        };

        try {
            setUpload(true);

            if (fotoSituacao1) {
                uploadedImages.fotoSituacao1 = await uploadImage(fotoSituacao1, 'fotoSituacao1');
            }
            if (fotoSituacao2) {
                uploadedImages.fotoSituacao2 = await uploadImage(fotoSituacao2, 'fotoSituacao2');
            }
            if (fotoSituacao3) {
                uploadedImages.fotoSituacao3 = await uploadImage(fotoSituacao3, 'fotoSituacao3');
            }

            await setDoc(userRef, uploadedImages, { merge: true });
            console.log('Imagens de situação enviadas com sucesso!');
        } catch (error) {
            console.error("Erro ao fazer upload das imagens de situação:", error);
        } finally {
            setUpload(false);
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const authInstance = getAuth();
        try {
            await sendPasswordResetEmail(authInstance, email);
            console.log('E-mail de redefinição de senha enviado para:', email);
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
                    <div className={styles.btcont}>
                    <img src={bted} alt="BORDA DE ADICIONAR" className={styles.bte} />
                    </div>
                    <div className={styles.dencont}>
                    <img src={btdentro} alt="PARDE DE DENTRO" className={styles.bte} />
                    </div>

                    <p> </p>
                    <label><h3 className={styles.tit1}>Foto de perfil</h3></label>
                    <input type="file" accept='image/*' onChange={handleImageChange} /><br />
                    {previewURL && <img src={previewURL} alt="Preview da foto" style={{ maxWidth: 150 }} />}<br />

                    <button type="button" onClick={uploadProfileImage} disabled={upload}>
                        {upload ? "Enviando..." : "Salvar Foto de Perfil"}
                    </button><br />

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
                    
                    <label>Fotos de Situação</label>
                    <input type="file" accept='image/*' onChange={(e) => handleSituationImageChange(e, setFotoSituacao1)} /><br />
                    <input type="file" accept='image/*' onChange={(e) => handleSituationImageChange(e, setFotoSituacao2)} /><br />
                    <input type="file" accept='image/*' onChange={(e) => handleSituationImageChange(e, setFotoSituacao3)} /><br />

                    <button type="button" onClick={uploadSituationImages} disabled={upload}>
                        {upload ? "Enviando..." : "Salvar Fotos de Situação"}
                    </button><br />
                    
                    <button type="button" onClick={handleSaveChanges}>
                        Salvar Alterações
                    </button>

                    <h3>Redefinir Senha</h3>
                    <button type="button" onClick={handlePasswordReset}>
                        Enviar E-mail de Redefinição
                    </button>

                    <button type="button" onClick={handleShowProfile}>
                        Retornar ao perfil
                    </button>
                </>
            ) : (
                <p>Carregando</p>
            )}
        </form>
    );
};

export default EditProfile;
