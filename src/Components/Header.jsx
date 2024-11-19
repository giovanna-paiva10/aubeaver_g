import React, { useEffect, useState, useRef } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logoo from '../assets/logoo.svg';
import { auth } from '../firebase'; // Certifique-se de que o caminho está correto

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
        await auth.signOut();
        window.location.href = "/";
    } catch (error) {
        console.error("Erro ao fazer logout", error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    window.addEventListener('resize', handleResize);
    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className={styles.navh}>
        <div className={styles.imgContainer}>
          <Link to='/'><img className={styles.img} src={logoo} alt='logo' /></Link>
        </div>
        
        <ul className={styles.navlinksLarge}>
          <li><a href="./#qs">Quem somos</a></li>
          <a href="./#dc">Doação</a>
        </ul>

        <div className={`${styles.hamburguer} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.btn_line}></div>
          <div className={styles.btn_line}></div>
          <div className={styles.btn_line}></div>
        </div>

        <ul className={`${styles.navlinksMobile} ${isMenuOpen ? styles.show : ''}`}>
          {user ? (
            <>
            <li><Link to='/profile'>Meu Perfil</Link></li>
            <li><Link to='/notificacoes'>Notificações</Link></li>
            <li onClick={handleLogout}>Sair do perfil</li>
            </>
            
          ) : (
            <li><Link to='login'>Criar / Entrar</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;