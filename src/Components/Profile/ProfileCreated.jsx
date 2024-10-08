import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase'; // Certifique-se de que esses estão corretos
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc } from 'firebase/firestore';
import Input from '../Forms/Input';

const ProfileCreated = () => {
    const [fotoPerfil, setFotoPerfil] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [upload, setUpload] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = doc(firestore, "Usuários", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("Usuário não logado");
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleChange = async (fotoPerfil) => {
        const file = fotoPerfil.target.files[0]; 
        if (file) {
            try {
                setUpload(true);
                const storage = getStorage(); 
                const storageRef = ref(storage, `fotosdeperfil/${file.name}`); 
                await uploadBytes(storageRef, file); 
                const downloadURL = await getDownloadURL(storageRef); 
                setImageURL(downloadURL);
                console.log(downloadURL);
            } catch (error) {
                console.error("Erro ao fazer upload:", error);
            } finally {
                setUpload(false);
            }
        }
    };

    const handleClick = async () => {
        const valueRef = collection(collection)
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            window.location.href = "/login";
        } catch (error) {
            console.error("Erro ao fazer logout", error.message);
        }
    };


    return (
        <form>
            {userDetails ? (
                <>
                    <label>Foto de Perfil</label>
                    <input type="file" value={fotoPerfil} onChange={handleChange} /><br/>
                    <center>{imageURL && <img src={imageURL} style={{ maxWidth: 150 }} alt="Perfil" />}<br/></center>
                    <button disabled={upload} onClick={handleClick}>{upload ? "Enviando" : "Enviar"}</button><br/>
                    

                    <Input label="nome" type="nome" id="nome" value={userDetails.nome} />
                    <Input label="telefone" type="text" id="telefone" value={userDetails.telefone} setValue={setTelefone} />
                    <Input label="email" type="email" id="email" value={userDetails.email} setValue={setEmail} />
                    <Input label="senha" type="password" id="password" value={password} setValue={setPassword} />

                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                    <button>Salvar alteração</button>
                </>
            ) : (
                <p>Carregando</p>
            )}
        </form>
    );
};

export default ProfileCreated;
