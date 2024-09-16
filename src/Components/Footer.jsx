import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {

    return (
     <> 

        <footer>
            <nav>
       <ul className={styles.navLinks}>
        <li>Termos</li>
       </ul>
       <ul className={styles.navLinks}>
        <li>Contato</li>
       </ul>
       <ul className={styles.navLinks}>
        <li>Feedbacks</li>
       </ul>
       <ul className={styles.navLinks}>
        <li>Sociais</li>
       </ul>
    </nav>
        </footer>
     </>





    )
};

export default Footer;