import React, { useState } from 'react';
import { BrowserRouter, Link, Form } from 'react-router-dom';
import Input from '../Forms/Input'; 
import styles from './LoginForm.module.css';
import foto from '../../assets/rosto.svg';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import ReCAPTCHA from 'react-google-recaptcha';


const LoginLostPassword = () => {
    const [email, setEmail] = React.useState('');

    const[capVal,setcapVal] = useState(null)

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const emailVeri = e.target.email.value;
        await sendPasswordResetEmail(auth, emailVeri).then(data =>{
            alert("Confira sua caixa de entrada do email")
            window.location.href = './profile/'
        }).catch(error =>{
            console.log(error)
        })

    }

    return (

<body id={styles.borda}>
    
        <section className={styles.container}> 

    
    <div className={styles.content}>

        <div className={styles.contentLost}>
        <div className={styles.content2}>
        <div className={styles.return}><Link to='/login'>Retornar</Link></div>

        <p></p>
        
        

        <h2>Recuperar senha</h2>
        <br />
            <form className={styles.forms} onSubmit={(e)=>handleSubmit(e)}>

            <Input label="Email" type="email" id="email" value={email} setValue={setEmail}/>
            <br />
           <div className={styles.caixa}> 
            <ReCAPTCHA
            sitekey="6LcfIUcqAAAAAK6Uu-si4WIHLwCHUfnN658yGnNS"
            onChange={(val) => setcapVal(val)}
            />
        </div>
            
               <center><button className={styles.btn} type='submit'>Enviar</button></center>
            </form>
        </div>            
        </div>

        <img className={styles.imgg} src={foto} alt="RostoMascote" />

        </div>  
        </section>

</body>
    )
};

export default LoginLostPassword;