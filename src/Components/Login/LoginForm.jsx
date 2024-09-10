import React from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input';
import Select from '../Forms/Select';




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
        <h1>Login</h1>
        
            <form action='' onSubmit={handleSubmit}>

            <Input label="Email" type="email" id="email" value={email} setValue={setEmail}/>
            <p></p>
            <Input label="Senha" type="password" id="password" value={password} setValue={setPassword}/>
            <p></p>
            <Select label="Entrar como" options={['Pessoa física', 'Pessoa jurídica']} value={tipoPessoa} setValue={setTipoPessoa}/>
            <p></p>
            <label> <input type="checkbox" value={termos} checked={termos} onChange={ 
                function handleChange({ target }) {
                setTermos(target.checked)}} /> Li e aceito os termos. </label>
            </form>

        <button><Link to='/login/criar'>Cadastro</Link></button>
            
        </section>
    )
};

export default LoginForm;