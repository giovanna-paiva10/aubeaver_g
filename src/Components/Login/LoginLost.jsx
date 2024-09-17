import React from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input';
import styles from './LoginLost.module.css';
import foto from '../../assets/rosto.svg';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';


const LoginLostPassword = () => {
    const [email, setEmail] = React.useState('');


    const handleSubmit = async(e) =>{
        e.preventDefault();

        const emailVeri = e.target.email.value;
        await sendPasswordResetEmail(auth, emailVeri).then(data =>{
            alert("Confira sua caixa de entrada do email")
            window.location.href = '/login/'
        }).catch(error =>{
            console.log(error)
        })

    }

    return (
        <section> 
        
        <div className={styles.content1}>

        <div className={styles.content}>
            <form onSubmit={(e)=>handleSubmit(e)}>

            <a><Input label="Email" type="email" id="email" value={email} setValue={setEmail}/></a>
            <p></p>
               <center><button type='submit'>Enviar</button></center>
            </form>
        </div>            
        </div>

        <div className={styles.containerImg}> <img src={foto} alt="RostoMascote" /> </div>

    
        </section>
    )
};

export default LoginLostPassword;