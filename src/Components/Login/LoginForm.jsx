import React from 'react';
import { BrowserRouter, Link, Form, redirect } from 'react-router-dom';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import styles from './LoginForm.module.css';
import foto from '../../assets/rosto.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import App from '../../App';


const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [tipoPessoa, setTipoPessoa] = React.useState('');
    const [termos, setTermos] = React.useState([]);

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login feito com sucesso!');
            // window.location.href = 'profile'

        } catch (err) {

            console.log(err)

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
            <h5><Link to='/login/perdeu'>Esqueci a senha</Link></h5>

               <center><button type="submit" >Entrar</button></center>
            </form>

            <h4><Link to='/login/criar'>Cadastre-se</Link></h4>

        </div>            
        </div>

        <div className={styles.containerImg}> <img src={foto} alt="RostoMascote" /> </div>

    
        </section>
    )
};

export default LoginForm;