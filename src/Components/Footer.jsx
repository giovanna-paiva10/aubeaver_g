import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/rosto.svg'; // Assuming rosto.svg is the logo image

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.navSections}>
                    <div className={styles.section}>
                        <h4>AUBEAVER</h4>
                        <ul>
                            <li><a href="#">Sobre a Ong</a></li>
                            <li><a href="#">Importância da doação</a></li>
                            <li><a href="#">Termos de uso</a></li>
                            <li><a href="#">Conscientização</a></li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h4>CAUSAS</h4>
                        <ul>
                            <li><a href="#">Combate à fome</a></li>
                            <li><a href="#">Auxílio de itens de higiene</a></li>
                            <li><a href="#">Auxílio financeiro</a></li>
                            <li><a href="#">Auxílio de mão de obra</a></li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Beaver logo" className={styles.logo} />
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; Copyright 2023 | Aubeaver | Todos os direitos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
