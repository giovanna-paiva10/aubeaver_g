import React from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input';
import styles from './LoginReset.module.css';
import foto from '../../assets/rosto.svg';


const LoginResetPassword = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log();
      }
    

    return (
        <section> 
        
        <div className={styles.content1}>

        <div className={styles.content}>
            <form>
            <p>{key}</p>
            <p>{login}</p>
            <a><Input label="Nova senha" type="password" id="password" name="password"/></a>
            <p></p>
               <center><button>Enviar</button></center>
            </form>
        </div>            
        </div>

        <div className={styles.containerImg}> <img src={foto} alt="RostoMascote" /> </div>

    
        </section>
    )
};

export default LoginResetPassword;