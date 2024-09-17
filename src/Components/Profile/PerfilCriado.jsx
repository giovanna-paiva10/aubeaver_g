import React, {useEffect, useState} from 'react';
import { BrowserRouter, Link, Form, redirect } from 'react-router-dom';
import styles from '../Login/LoginForm.module.css';
import foto from '../../assets/rosto.svg';
import { auth, firestore } from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';


function PerfilCriado() {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async() => {
        auth.onAuthStateChanged(async(user)=>{
            console.log(user)
            const docRef = doc(firestore, "Usuários", user.uid)
            const docSnap = getDoc(docRef)

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
        <section> 
        
        <div className={styles.content1}>

        <div className={styles.content}>
            
            <form onSubmit={handleSubmit}>

            <a><Input label="Email" type="email" id="email" value={email} setValue={setEmail}/></a>
            <p></p>
            <a><Input label="Senha" type="password" id="password" value={password} setValue={setPassword}/></a>
            <p></p>

            <center><button type="submit" >Entraaaaaaaar</button></center>
            </form>


            {/* <form>
                {userDetails ? (

                    <>

                        <p>Olá, {userDetails.username}</p>

                        <h4><Link to='/login/criar'>Cadastre-se</Link></h4>

                        <button className='btn btn-primary' onClick={handleLogout}>
                            Logout
                        </button>

                    </>
                    ) : (
                        <p>Carregando</p>
                    )}


            </form> */}

        </div>            
        </div>

        <div className={styles.containerImg}> <img src={foto} alt="RostoMascote" /> </div>

    
        </section>
    )
};

export default PerfilCriado;