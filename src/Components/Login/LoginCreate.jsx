import React from 'react';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import { Link } from 'react-router-dom';
import styles from './LoginCreate.module.css';
import foto from '../../assets/rosto.svg';
import { firestore } from '../../firebase';
import { addDoc, collection } from '@firebase/firestore'


const LoginCreate = () => {
    const [tipoPessoa, setTipoPessoa] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [cadUnico, setCadUnico] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [termos, setTermos] = React.useState('');

    const ref = collection(firestore,"Usuários")

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome, email, username, password );

      }

      let data = {
        nome: nome,
        email: email,
        username: username,
        senha: password,
        Tipo_de_cadastro: tipoPessoa,
      }

      try {

        addDoc(ref, data);

      } catch(e) {
        
        console.log(e);

      }

    return (
        <>
        <body>
            
<section>

<div className={styles.content1}>


<div className={styles.content}>

        <h2>Cadastre-se</h2>
 <p></p>
 <p></p>
<form action="" onSubmit={handleSubmit}>


    <Select label="Entrar como" options={['Pessoa física', 'Pessoa jurídica']} value={tipoPessoa} setValue={setTipoPessoa}/>
        <p></p>
    <Input label="Nome" type="nome" id="nome" value={nome} setValue={setNome}/>
        <p></p>
    <Input label="Email" type="email" id="email" value={email} setValue={setEmail}/>
        <p></p>
    <Input label="Username" type="username" id="usename" value={username} setValue={setUsername}/>
        <p></p>
    <Input label="Senha" type="password" id="password" value={password} setValue={setPassword}/>
        <p></p>
    <label className={styles.checkbox}> <input className={styles.inputCheckbox} type="checkbox" value={termos} checked={termos} onChange={ 
        function handleChange({ target }) {setTermos(target.checked)}} /> Li e aceito os termos. </label>
<p></p>
        <center><button>Cadastre-se</button></center>
</form>


</div>
</div>

<div className={styles.containerImg}><img  src={foto} alt="RostoMascote" /></div>

</section>

</body>
        </>
    )
};

export default LoginCreate;