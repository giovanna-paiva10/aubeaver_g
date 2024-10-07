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

    const handleChange = async (event) => {
        const file = event.target.files[0]; // Pega o arquivo selecionado
        if (file) {
            try {
                setUpload(true);
                const storage = getStorage(); // Certifique-se de que o storage foi inicializado corretamente
                const storageRef = ref(storage, `images/${file.name}`); // Referência ao local no Firebase Storage
                await uploadBytes(storageRef, file); // Faz o upload do arquivo para o Firebase Storage
                const downloadURL = await getDownloadURL(storageRef); // Obtém a URL de download do arquivo
                setImageURL(downloadURL);
                console.log(downloadURL);
            } catch (error) {
                console.error("Erro ao fazer upload:", error);
            } finally {
                setUpload(false);
            }
        }
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
                    <label>add foto</label>
                    <input type="file" value={fotoPerfil} onChange={handleChange} />
                    <button disabled={upload}>{upload ? "Enviando" : "Envio completo!"}</button>
                    {imageURL && <img src={imageURL} style={{ maxWidth: 150 }} alt="Perfil" />}

                    <Input label="nome" type="nome" id="nome" value={nome} setValue={setNome} />
                    <Input label="telefone" type="text" id="telefone" value={telefone} setValue={setTelefone} />
                    <Input label="email" type="email" id="email" value={email} setValue={setEmail} />
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
