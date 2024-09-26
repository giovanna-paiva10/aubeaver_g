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
    const [tipoPessoa, setTipoPessoa] = React.useState('');
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

    function opcaoTipoPessoa() {

        var valref = 0;

        if(tipoPessoa == 0){
            valref = 1;
        } else if(tipoPessoa == 1) {
            valref = 2;
        }else {
            valref = 0; //pra nn aparecer o campo
        }
        var cnpjoto = valref.value //get the value
        var results = document.querySelector('#results') //append results
        results.innerHTML = '' //clear the results on each update
        for (var i = 1; i <= cnpjoto; i++) {
          var input = document.createElement('input') 
          input.label.innerText = 'CNPJ'
          input.type = "text";
          input.placeholder = "teste"; //add a placeholder
          results.appendChild(label); //append label
          results.appendChild(document.createElement("br"));
          results.appendChild(input); //append input
          results.appendChild(document.createElement("br"));
        }//<Input label="Nome" type="nome" id="nome" value={nome} setValue={setNome}/>
      }
     


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(nome, email, username, password );
      
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


    <Select label="Entrar como" options={['Pessoa física', 'Pessoa jurídica']} value={tipoPessoa} setValue={setTipoPessoa} onChange={opcaoTipoPessoa()}/>
        <p></p>
    <Input label="Nome" type="nome" id="nome" value={nome} setValue={setNome}/>
        <p></p>
    <Input label="Email" type="email" id="email" value={email} setValue={setEmail}/>
        <p></p>
    <Input label="Username" type="username" id="usename" value={username} setValue={setUsername}/>
        <p></p>
    <Input label="Senha" type="password" id="password" value={password} setValue={setPassword}/>
        <p></p>
    <select id="membership-members" onchange="updateItems(this)">
        <option value="0" disabled selected>Select</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
    </select>
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