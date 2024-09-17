import React from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input';
import styles from './LoginReset.module.css';
import foto from '../../assets/rosto.svg';
import { sendPasswordResetEmail } from 'firebase/auth';
import { firestore } from '../../firebase';
import firebase from 'firebase/compat/app';


const LoginResetPassword = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');


    const handleSubmit = async(e) =>{
        e.preventDefault();

    }

    
    

    return (
        <section> 
        
        <div className={styles.content1}>

        <div className={styles.content}>
            <form onSubmit={handleSubmit}>
            <p>{key}</p>
            <p>{login}</p>
            <a><Input label="Nova senha" type="password" id="password" name="password"/></a>
            <p></p>
               <center><button type='submit'>Enviar</button></center>
            </form>
        </div>            
        </div>

        <div className={styles.containerImg}> <img src={foto} alt="RostoMascote" /> </div>

    
        </section>
    )
};

export default LoginResetPassword;