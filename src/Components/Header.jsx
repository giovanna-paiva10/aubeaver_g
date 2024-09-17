import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para verificar o tamanho da tela e fechar o menu se necessário
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false); // Fecha o menu se a tela for maior que 768px
    }
  };

  // Adiciona o listener de redimensionamento ao montar o componente
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <nav className={styles.navh}>
        <div className={styles.imgContainer}>
          <Link to='/'><img src={logo} alt='logo' /></Link>
        </div>
        
        {/* Links de navegação para "Quem somos" e "Doação" sempre visíveis em telas grandes */}
        <ul className={styles.navlinksLarge}>
          <li><Link to='quemSomos'>Quem somos</Link></li>
          <li><Link to='doacao'>Doação</Link></li>
        </ul>

        {/* Menu hambúrguer sempre visível aaa */}
        <div className={`${styles.hamburguer} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.btn_line}></div>
          <div className={styles.btn_line}></div>
          <div className={styles.btn_line}></div>
        </div>

        {/* Links de navegação dentro do menu hambúrguer */}
        <ul className={`${styles.navlinksMobile} ${isMenuOpen ? styles.show : ''}`}>
          <li><Link to='quemSomos'>Quem somos</Link></li>
          <li><Link to='doacao'>Doação</Link></li>
          <li><Link to='login'>Criar / Entrar</Link></li> {/* Sempre dentro do menu */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;