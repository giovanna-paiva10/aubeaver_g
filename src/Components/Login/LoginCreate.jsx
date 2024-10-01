import React, { useState, useEffect, createElement } from 'react';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import foto from '../../assets/rosto.svg';
import { firestore } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';
import ReCAPTCHA from 'react-google-recaptcha';


const LoginCreate = () => {
    const [identificador, setIdentificador] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [nome, setNome] = React.useState('');
    const [cadUnico, setCadUnico] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [termos, setTermos] = React.useState('');

    const[capVal,setcapVal] = useState(null)

    const [ desabilitado, setDesabilitado] = useState(true)

    useEffect(()=>{
        (capVal && termos) ? setDesabilitado(false) : setDesabilitado(true)
    }, [capVal, termos])

    const [tipoPessoa, setTipoPessoa] = useState('');

    const [itemCount, setItemCount] = useState(0);
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        setTipoPessoa(event.target.value);
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(nome, email, identificador, username, password );
      
      try {

        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        window.location.href = '/login/'
        console.log(user)
        
        if(user){
            await setDoc(doc(firestore, "Usuários" , user.uid), {
                nome: nome,
                email: user.email,
                username: username,
                senha: password,
                Tipo_de_cadastro: tipoPessoa,
            })
        }
            

      } catch(e) {
        
        console.log(e);

      }

    }
    

    return (
        <>
<body id={styles.borda}> 

<section className={styles.container}>


<div className={styles.content}>

<div className={styles.content1}>
    <div className={styles.content2}>

        <h2>Cadastre-se</h2>
 <p></p>
 <p></p>
<form onSubmit={handleSubmit}>


    <select label="Entrar como" onChange={handleChange}>
        <option value="" disabled selected>Selecione o tipo de pessoa</option>
        <option value="fisica">Pessoa Física</option>
        <option value="juridica">Pessoa Jurídica</option>
    </select>
        <p></p>
    <div id="results">
                {/* Renderiza um campo de acordo com o tipo de pessoa selecionado */}
                {tipoPessoa === 'fisica' && (
                    <div>
                        <Input label="CPF" type="CPF" id="identunic" value={identificador} setValue={setNome}/>
                    </div>
                )}
                {tipoPessoa === 'juridica' && (
                    <div>
                        <Input label="CNPJ" type="CNPJ" id="identunic" value={identificador} setValue={setNome}/>
                    </div>
                )}
    </div> 
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
        <ReCAPTCHA
            sitekey="6LcfIUcqAAAAAK6Uu-si4WIHLwCHUfnN658yGnNS"
            onChange={(val) => setcapVal(val)}
        />      
        <p></p>  
        <center><button type="submit" disabled={desabilitado}>Cadastre-se</button></center>
</form>

</div>
</div>

    <img className={styles.imgg} src={foto} alt="RostoMascote" />

</div>


</section>

</body>
        </>
    )
    };
export default LoginCreate;