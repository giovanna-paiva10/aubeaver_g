import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/rosto.svg'; // Assuming rosto.svg is the logo image
import iconTik from '../assets/iconTik.svg';
import iconInsta from '../assets/iconInsta.svg';
import iconFace2 from '../assets/iconFace2.svg';
import iconeeditar from '../assets/iconeeditar.png';
import termosecondicoes from '../assets/TermoseCondições.pdf'

const Footer = () => {
    return (
      
        <footer className={styles.footer}>
            <div className={styles.container}>
                <nav className={styles.navSections}>
                    <div className={styles.section}>
                    <div className={styles.os2}>
                            <div className={styles.o1}>
                        <h4 className={styles.fttitulo}>AUBEAVER</h4>
                        <ul className={styles.ulft}>
                            <li><a href="../#qs">Sobre a nós</a></li>
                            <div className={styles.espaco2}></div>

                            <div className={styles.espaco2}></div>
                            <li><a href="../#ps">Parceiros</a></li>
                            <div className={styles.espaco2}></div>
                            <li><a href={termosecondicoes} download="TermosecondicoesAubeaver.docx">Termos de uso</a></li>
                        </ul>
                        </div>
                    
                <div className={styles.al}>
                    <div className={styles.btn_line}></div>
                    </div>
                 <div></div>
                      
                            <div className={styles.o2}>
                            
                    <h4 className={styles.fttitulo}>CAUSAS</h4>
                        <ul className={styles.ulft}>
                            <li><a href="/search?tag=Alimentos">Combate à fome</a></li>
                            <div className={styles.espaco2}></div>
                            <li><a href="/search?tag=Higiene">Auxílio de itens de higiene</a></li>
                            <div className={styles.espaco2}></div>
                         
                            <li><a href="/search?tag=Trabalho%20Voluntário">Serviços Voluntários</a></li>
                            <div className={styles.espaco2}></div>
                        </ul>
   </div>
                    </div>
                    </div>
                </nav>

                
               
             
                <div className={styles.logoContainer}>
                    <ul>
                    <img src={logo} alt="Beaver logo" className={styles.logo} />
                    <li className={styles.textoredes}>Fique por dentro nas nossas redes sociais</li>
                    </ul>
          
                <section className={styles.secredes}>   
                   <div> <a href='https://www.tiktok.com/@aubeaverog?_t=8rjNHa8FOEi&_r=1'><img src={iconTik} alt="Icon Tiktok" className={styles.redes} /> </a></div> 
                   <div> <a href='https://www.facebook.com/groups/aubeaver'> <img src={iconFace2} alt="Icon Facebook" className={styles.redes} /></a> </div> 
                   <div> <a href='https://www.instagram.com/aubeaver?igsh=cnEyNDVwNm90Y3J4'><img src={iconInsta} alt="Icon Instagram" className={styles.redes} /></a> </div> 
                  
                </section>
            </div>
            </div>
            <div className={styles.footerBottom}>
                <ul>
            <li className={styles.copyz}><p>&copy; Copyright 2024 | Aubeaver | Todos os direitos reservados</p></li>  
            <li className={styles.copys}><p>&copy; Copyright 2024</p></li>
                </ul>
            </div>
        </footer>
        
    );
};

export default Footer;
