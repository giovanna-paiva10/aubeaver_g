import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase';
import { getDoc, doc } from 'firebase/firestore'
import Input from '../Forms/Input';

const ProfileCreated = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [password, setPassword] = React.useState('');



    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async() => {
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef = doc(firestore, "Usuários", user.uid)
            const docSnap = await getDoc(docRef)

            if(docSnap.exists()){
                setUserDetails(docSnap.data())
                console.log(docSnap.data())
            } else {
                console.log("Usuário não logado")
            }
        })
    } 
    useEffect(()=>{
        fetchUserData()
    }, [])

    async function handleLogout(){

        try{

            await auth.signOut()
            window.location.href = "/login"
            console.log("Logout feito com sucesso!")

        } catch(error) {

            console.error("Erro ao fazer logout", error.message)

        }
    }

    return (
        

            <form>
                {userDetails ? (

                    <>
                    <label>add foto</label>
                    <Input type="file" />

                    <Input label="nome" type="nome" id="nome" value={nome} setValue={setNome}/>

                    <Input label="telefone" type="text" id="telefone" value={telefone} setValue={setTelefone}/>

                    <Input label="email" type="email" id="email" value={email} setValue={setEmail} />

                    <Input label="senha" type="password" id="password" value={password} setValue={setPassword}/>

                    <label>Minha história</label> <p></p>
                    <textarea />
                    <p></p>
                    <Input type="file" />

                        <button className='btn btn-primary' onClick={handleLogout}>
                            Logout
                        </button>

                        <button>
                            Salvar alteração
                        </button>

                    </>
                    ) : (
                        <p>Carregando</p>
                    )
                }
            </form>
            
            
    )
};

export default ProfileCreated;