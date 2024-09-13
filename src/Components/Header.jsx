import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';



const Header = () => {


    return ( 
    <>
    <header >
      <nav >
          <div className={styles.imgContainer}><Link to='/'><img src={logo} alt='logo'/></Link></div>

        <ul className={styles.navlinks}>
          <li> <Link to='quemSomos'> Quem somos </Link> </li>
          <li> <Link to='doacao'> Doação </Link> </li>
          <li> <Link to='login'> Criar / Entrar </Link> </li>
          <li> <div className={styles.hamburguer}>
            <div className={styles.btn_line}></div>
            <div className={styles.btn_line}></div>
            <div className={styles.btn_line}></div>
        </div></li>
        </ul>
        
      </nav>
    </header>
    </>
    )
};

export default Header;