import React from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input';
import styles from './LoginLost.module.css';
import foto from '../../assets/rosto.svg';


const LoginLostPassword = () => {
    const [email, setEmail] = React.useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log();
      }

    return (
        <section> 
        
        <div className={styles.content1}>

        <div className={styles.content}>
            <form onSubmit={handleSubmit}>

            <a><Input label="Email" type="email" id="email" value={email} setValue={setEmail}/></a>
            <p></p>
               <center><button>Enviar</button></center>
            </form>
        </div>            
        </div>

        <div className={styles.containerImg}> <img src={foto} alt="RostoMascote" /> </div>

    
        </section>
    )
};

export default LoginLostPassword;