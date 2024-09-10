import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';


const Header = () => {


    return ( 
    <>
    <header >
      <nav className={styles.navlinks}>
           <Link to='/'><img src={logo} alt='logo'/></Link>
        <ul>
        <li> <Link to='quemSomos'> Quem somos </Link> </li>
        <li> <Link to='doacao'> Doação </Link> </li>
        <li> <Link to='login'> Criar / Entrar </Link> </li>
        </ul>
      </nav>
    </header>
    </>
    )
};

export default Header;