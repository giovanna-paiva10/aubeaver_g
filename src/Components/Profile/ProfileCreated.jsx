import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase';
import { getDoc, doc } from 'firebase/firestore'

const ProfileCreated = () => {
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

                        <p>Olá, {userDetails.username}</p>

                        <h4>Cadastrareee</h4>

                        <button className='btn btn-primary' onClick={handleLogout}>
                            Logout
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