import React, { useState, useEffect } from 'react';
import Input from '../Forms/Input';
import Select from '../Forms/Select';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import foto from '../../assets/rosto.svg';
import { firestore, auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import termosecondicoes from '../../assets/TermoseCondições.pdf'
import ReCAPTCHA from 'react-google-recaptcha';

const LoginCreate = () => {
    const [identificador, setIdentificador] = useState('');
    const [cadunico, setCadunico] = useState('');
    const [username, setUsername] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [termos, setTermos] = useState(false);
    const [capVal, setCapVal] = useState(null);
    const [desabilitado, setDesabilitado] = useState(true);
    const [tipoPessoa, setTipoPessoa] = useState('');

    useEffect(() => {
        if (capVal && termos && !passwordError && password) {
            setDesabilitado(false);
        } else {
            setDesabilitado(true);
        }
    }, [capVal, termos, passwordError, password]);

    const validatePassword = (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (!regex.test(value)) {
            setPasswordError(
                'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial.'
            );
        } else {
            setPasswordError('');
        }
    };

    const handleChange = (event) => {
        setTipoPessoa(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordError) {
            alert('A senha não é válida. Por favor, corrija os erros antes de continuar.');
            return;
        }

        try {
            const CredenciaisUsuario = await createUserWithEmailAndPassword(auth, email, password);
            const user = CredenciaisUsuario.user;
            
            if (user && user.uid) {
                const userData = {
                    nome,
                    email: user.email,
                    username,
                    senha: password,
                    Tipo_de_identificador: tipoPessoa,
                    Identificador: identificador,
                    cadunico: cadunico,
                };

                const collection = tipoPessoa === 'ONG' ? "Ongs" : "Usuários";
                await setDoc(doc(firestore, collection, user.uid), userData);

                window.location.href = '/login/';
                console.log("Cadastro realizado com sucesso!", userData);
            } else {
                console.error("UID do usuário não disponível.");
                alert("Erro inesperado. Tente novamente.");
            }
        } catch (e) {
            console.error("Erro durante o cadastro:", e);
            alert("Erro ao criar conta: " + e.message);
        }
    };

    return (
        <body id={styles.borda}> 
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content1}>
                        <div className={styles.content2}>

                           <div className={styles.return}><Link to='/login'>Retornar</Link></div> 
                            <br />
                            <h2>Cadastre-se</h2>
                            <br />
                            <form className={styles.forms} onSubmit={handleSubmit}>  
                                <select className={styles.select} label="Entrar como" onChange={handleChange}>
                                    <option value="" disabled selected>Entrar como</option>
                                    <option value="Doador">Doador</option>
                                    <option value="Solicitante">Solicitante</option>
                                    <option value="ONG">ONG</option>
                                </select>
                            
                                <div id="results">
                                    {tipoPessoa === 'Doador' && (
                                        <Input label="CPF" type="CPF" id="identunic" value={identificador} setValue={setIdentificador}/>
                                    )}
                                    {tipoPessoa === 'Solicitante' && (
                                        <>
                                            <Input className={styles.input} label="CPF" type="CPF" id="identunic" value={identificador} setValue={setIdentificador}/>
                                            <p> </p>
                                            <Input label="Cadunico" type="cadunico" id="cadunico" value={cadunico} setValue={setCadunico}/>
                                        </>
                                    )}
                                    {tipoPessoa === 'ONG' && (
                                        <Input label="CNPJ" type="CNPJ" id="identunic" value={identificador} setValue={setIdentificador}/>
                                    )}
                                </div> 
                                
                                <Input label="Nome" type="nome" id="nome" value={nome} setValue={setNome}/>
                                
                                <Input label="Email" type="email" id="email" value={email} setValue={setEmail}/>
                                
                                <Input label="Username" type="username" id="usename" value={username} setValue={setUsername}/>
                                
                                <Input label="Senha" type="password" id="password" value={password} setValue={(value) => {
                                    setPassword(value);
                                    validatePassword(value);
                                }}/>
                                {passwordError && <p className={styles.esp3} style={{ color: 'red' }}>{passwordError}</p>} <p></p>
                                
                                <label className={styles.checkbox}>
                                    <input className={styles.inputCheckbox} type="checkbox" value={termos} checked={termos} onChange={({ target }) => setTermos(target.checked)} />
                                    Li e aceito os <a href={termosecondicoes} download="TermosecondicoesAubeaver.docx" style={{color: "blue"}}> termos e condições</a>.
                                </label>
                           <div className={styles.caixa}>
                                <ReCAPTCHA
                                    sitekey="6LcfIUcqAAAAAK6Uu-si4WIHLwCHUfnN658yGnNS"
                                    onChange={(val) => setCapVal(val)}
                                />
                            </div>     
                               
                                <center><button className={styles.btn} type="submit" disabled={desabilitado}>Cadastre-se</button></center>
                            </form>
                        </div>
                    </div>
                    <img className={styles.imgg} src={foto} alt="RostoMascote" />
                </div>
            </section>
        </body>
    );
};

export default LoginCreate;
