import React from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import styles from './LoginForm.module.css';
import foto from '../../assets/rosto.svg';


const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [tipoPessoa, setTipoPessoa] = React.useState('');
    const [termos, setTermos] = React.useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log();
      }
    

    return (
        <section> 
        <div className={styles.fundo}>
        
        <div>

        <div className={styles.container}>
            <form action='' onSubmit={handleSubmit}>

            <a><Input label="Email" type="email" id="email" value={email} setValue={setEmail}/></a>
            <p></p>
            <a><Input label="Senha" type="password" id="password" value={password} setValue={setPassword}/></a>
            <p></p>
            <a><Select label="Entrar como" options={['Pessoa física', 'Pessoa jurídica']} value={tipoPessoa} setValue={setTipoPessoa}/></a>
            <p></p>
            <a><label className={styles.checkbox}> <input className={styles.inputCheckbox} type="checkbox" value={termos} checked={termos} onChange={ 
                function handleChange({ target }) {
                setTermos(target.checked)}} /> Li e aceito os termos. </label> </a>
            </form>

            <center><button><Link to='/login/criar'>Enviar</Link></button></center>  
        </div>

            <div className={styles.imagem}> <img src={foto} alt="RostoMascote" /> </div>
            
        </div>

        </div>
        </section>
    )
};

export default LoginForm;