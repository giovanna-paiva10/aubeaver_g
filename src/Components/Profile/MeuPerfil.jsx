import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase'; // Certifique-se de que esses estão corretos
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc, collection } from 'firebase/firestore';
import Input from '../Forms/Input';

const MeuPerfil = () => {
    const [previewURL, setPreviewURL] = useState('');
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
                    await auth.signOut();
                    window.location.href = "/login";
                }
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleImageChange = (event) => {
        const file = event.target.files[0]; //
        if (file) {
          setFotoPerfil(file);
          setPreviewURL(URL.createObjectURL(file));
        }
      };


    const handleSaveChanges = async () => {
        if (fotoPerfil) {
          try {
            setUpload(true);
            const storage = getStorage(); 
            const storageRef = ref(storage, `fotosdeperfil/${fotoPerfil.name}`);
            await uploadBytes(storageRef, fotoPerfil);
            const downloadURL = await getDownloadURL(storageRef);
            setImageURL(downloadURL);
            console.log('Imagem enviada com sucesso:', downloadURL);
          } catch (error) {
            console.error("Erro ao fazer upload:", error);
          } finally {
            setUpload(false);
          }
        } else {
          console.log('Nenhuma imagem selecionada.');
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

    const handleEditProfile = () => {

        window.location.href = '/profile/editarperfil'
    
    }

    return (
        <form>
            {userDetails ? (
                <>
                    <p>Olá, {userDetails.nome}</p>
                    <p>Sua historia: {userDetails.minhaHistoria}</p>
                    <button type="button" onClick={handleEditProfile}>Editar informações</button>

                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <p>Carregando</p>
            )}
        </form>
    );
};

export default MeuPerfil;
