import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.navfot}>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="termos">Termos</a>
                    </li>
                </ul>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="contato">Contato</a>
                    </li>
                </ul>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="feedbacks">Feedbacks</a>
                    </li>
                </ul>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="sociais">Sociais</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
