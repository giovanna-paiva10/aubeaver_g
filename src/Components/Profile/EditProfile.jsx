import React, { useState, useEffect } from 'react';
import styles from './EditProfile.module.css';
import { auth, firestore } from '../../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Input from '../Forms/Input';

const EditProfile = () => {
    const [previewURL, setPreviewURL] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
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
                    <label>ADICIONAAIMAGEMDOPERFILCOMACANETA Meu Perfil</label>
                    <p> </p>
                    <label><h3 className={styles.tit1}>Foto de perfil</h3></label>
                    <input type="file" accept='image/*' onChange={handleImageChange} /><br />
                    <center>{previewURL && <img src={previewURL} alt="Preview da foto" style={{ maxWidth: 150 }} />}<br /></center>

                    <button type="button" onClick={uploadProfileImage} disabled={upload}>
                        {upload ? "Enviando..." : "Salvar Foto de Perfil"}
                    </button><br />

                    <Input label="Nome" type="text" id="nome" value={nome} setValue={setNome} />
                    <Input label="Telefone" type="text" id="telefone" value={telefone} setValue={setTelefone} />
                    <Input label="E-mail" type="email" id="email" value={email} setValue={setEmail} />
                    <label>Sua história 
                        <p> </p>
                        <textarea 
                            id="minhaHistoria" 
                            value={minhaHistoria} 
                            onChange={(e) => setminhaHistoria(e.target.value)} // Atualize o valor usando onChange
                            name="minhahistoria"
                            maxLength={750}
                            rows={10}
                            cols={70}
                        />
                    </label>
                    <p> </p>
                    
                    <p> </p>


                    <button type="button" onClick={handleSaveChanges}>
                        Salvar Alterações
                    </button>
                    
                    <h3>Redefinir Senha</h3>
                    <p>Um e-mail será enviado para redefinir sua senha em: {email}</p>
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
