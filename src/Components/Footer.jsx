import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {

    return (
     <> 
<div>
        <footer>
            <nav className={styles.navfot}>
       <ul className={styles.navLinks}>
        <li>
            <a href="/Termos">Termos</a>
       </li>
       </ul>
       <ul className={styles.navLinks}>
        <li>
        <a href="/Contato">Contato</a>
        </li>
       </ul>
       <ul className={styles.navLinks}>
        <li>
        <a href="/Feedbacks">Feedbacks</a>
       </li>
       </ul>
       <ul className={styles.navLinks}>
        <li>
        <a href="/Sociais">Sociais</a>
        </li>
       </ul>
    </nav>
        </footer>

</div>

     </>
    )
};

export default Footer;