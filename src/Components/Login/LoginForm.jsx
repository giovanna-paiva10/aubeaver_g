import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Input from '../Forms/Input';
import styles from './LoginForm.module.css';
import foto from '../../assets/rosto.svg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [capVal, setCapVal] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                
                navigate('/profile/meuperfil');
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login feito com sucesso!');
            navigate('/profile/meuperfil');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <body id={styles.borda}>
            <section className={styles.conteiner}>
                <div className={styles.content}>
                    <div className={styles.content1}>
                        <div className={styles.content2}>
                            <h2>Entrar</h2>
                            <form onSubmit={handleSubmit}>
                                <Input label="Email" type="email" id="email" value={email} setValue={setEmail} />
                                <p></p>
                                <Input label="Senha" type="password" id="password" value={password} setValue={setPassword} />
                                <p></p>
                                <h5 className={styles.estiloh5}>
                                    <Link to='/login/perdeu'>Esqueci a senha</Link>
                                </h5>
                                <p></p>
                                <ReCAPTCHA
                                    sitekey="6LcfIUcqAAAAAK6Uu-si4WIHLwCHUfnN658yGnNS"
                                    onChange={(val) => setCapVal(val)}
                                />
                                <p></p>
                                <center><button type="submit" disabled={!capVal}>Entrar</button></center>
                            </form>
                            <h4 className={styles.estiloh4}>
                                <Link to='/login/criar'>Cadastre-se</Link>
                            </h4>
                        </div>
                    </div>
                    <img className={styles.imgg} src={foto} alt="RostoMascote" />
                </div>
            </section>
        </body>
    );
};

export default LoginForm;