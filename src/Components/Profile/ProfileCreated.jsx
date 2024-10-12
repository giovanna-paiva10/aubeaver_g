import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase'; // Certifique-se de que esses estão corretos
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { sendPasswordResetEmail } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import Input from '../Forms/Input';

const ProfileCreated = () => {
    const [previewURL, setPreviewURL] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const [upload, setUpload] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
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

      const handleTrocarSenha = async () => {
        const emailVeri = e.target.email.value;
        await sendPasswordResetEmail(auth, emailVeri).then(data =>{
            alert("Confira sua caixa de entrada do email")
            window.location.href = './profile/'
        }).catch(error =>{
            console.log(error)
        })
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
                    <label>Foto de perfil</label>
                    <input type="file" accept='image/*' onChange={handleImageChange} /><br/>
        
                    <center>{previewURL && <img src={previewURL} alt="Preview da foto" style={{ maxWidth: 150 }} />}<br/></center>
                    

                    <Input label="nome" type="nome" id="nome" value={userDetails.nome} />
                    <Input label="telefone" type="text" id="telefone" value={userDetails.telefone} setValue={setTelefone} />
                    <Input label="email" type="email" id="email" value={userDetails.email} setValue={setEmail} />
                    <button type="button" onClick={handleTrocarSenha}>Trocar Senha</button>

                    <button className="btn btn-primary" onClick={handleLogout}>
                        Logout
                    </button>
                    <button type="button" onClick={handleSaveChanges} disabled={upload}>
                        {upload ? "Enviando..." : "Salvar Alteração"}
                    </button>
                </>
            ) : (
                <p>Carregando</p>
            )}
        </form>
    );
};

export default ProfileCreated;
