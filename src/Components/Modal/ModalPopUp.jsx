import React, { useState, useEffect } from 'react';
import styles from './ModalPopUp.module.css';
import logo from '../../assets/logo.svg';
import Input from '../Forms/Input';


const ModalPopUp = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [quantidade, setQuantidade] = useState('');


    const handleChange = (event) => {
        setTipoPessoa(event.target.value);
    };
    
    return (
    <div id={styles.borda}> 

        <div className={styles.container}>
                    <div className={styles.content}>

                        <div className={styles.forms}>

                        <label className={styles.label}>Nome Sobrenome</label>
                        <input className={styles.input} type="text" value={nome} setValue={setNome} />

                        <label className={styles.label}>E-mail</label>
                        <input className={styles.input} type="email" value={email} setValue={setEmail}/>

                        <label className={styles.label}>Telefone</label>
                        <input className={styles.input} type="text" value={telefone} setValue={setTelefone}/>

                        <label className={styles.label}>Forma de ajuda:</label>
                        <select className={styles.select} name="" id="" onChange={handleChange}>
                        <option value="" disabled selected>Itens:</option>
                            <option value="Comida">Comida</option>
                            <option value="Itens de higiene">Itens de higiene</option>
                            <option value="Roupas">Roupas</option>
                        </select>

                        <label className={styles.label}>Quantidade de doação:</label>
                        <select className={styles.select} name="" id="" onChange={handleChange}>
                            <option value="" disabled selected>Itens:</option>
                            <option value="Pequena">Pequena</option>
                            <option value="Média">Média</option>
                            <option value="Grande">Grande</option>
                        </select>

                        <label className={styles.label}>Quantidade</label>
                        <input className={styles.input} type="text" value={quantidade} setValue={setQuantidade}/>

                        <center><button className={styles.btn}>Enviar</button></center>

                        </div>
                        <div className={styles.contentText}>
                            <h2 className={styles.estiloh2}>Vamos construir um futuro melhor juntos</h2>

                            <p className={styles.espaco}></p>

                            <h3 className={styles.estiloh3}>
                            Nosso compromisso é caminhar ao seu lado, oferecendo apoio e novas oportunidades para que você possa alcançar um futuro mais seguro e cheio de possibilidades.
                            <p></p>
                            Estamos aqui para apoiar você e ajudar a construir um futuro mais seguro e promissor.
                            </h3>
                        </div>
                    </div>
        </div>

    </div>
    )
}

export default ModalPopUp;