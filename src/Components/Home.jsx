import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import garf from '../assets/garfield.png';
import fotoo from '../assets/fotoo.png';
import conect from '../assets/conect.png';
import cc from '../assets/conectandoc.png';
import row1 from '../assets/row1.png';
import row2 from '../assets/row2.png'; // Caso queira adicionar mais imagens

// Importando Slider do react-slick
import Slider from 'react-slick';
// Importando os estilos do slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const data = [row1, conect,]; // Adicione mais imagens se desejar

    // Configurações do slider
    const settings = {
       // dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        draggable: true, 
        autoplay: false,
        autoplaySpeed: 3000, 
        arrows: false,
        
    };   

    return (
        <div id={styles.borda}>
        
            <div className={styles.contslider}>
                <Slider {...settings}>
                    {data.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt="Slider" className={styles.sditem} />
                        </div>
                    ))}
                </Slider>
            </div>

            <p className={styles.espaco}></p>
             <div id="dc">
            <h3 className={styles.estiloh3}>O QUE DOAR</h3>
            </div>
            <h4 className={styles.estiloh4}>Escolha o item com qual você deseja ajudar ou receber ajuda</h4>

            <div className={styles.container}>
                <div className={styles.content}>
                    {['Doação de alimentos', 'Doação de mão de obra', 'Doação de dinheiro', 'Itens de higiene'].map((title, index) => (
                        <div key={index} className={styles.content1}>
                            <Link to='/search'>
                                <img className={styles.imgg} src={garf} alt="garfield" />
                                <div>
                                    <h3 className={styles.contenttitle}>{title}</h3>
                                    <h4 className={styles.contenttext}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, tristique vel interdum sit amet, porta vel nibh.
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <p className={styles.espaco}></p>

            <div id="qs">
            <h3 className={styles.estiloh3}>QUEM SOMOS</h3>
           <img className={styles.banner} src={cc} alt="cc" />
           </div>
            <p className={styles.espaco}></p>

            <div className={styles.container2}>
                <div className={styles.content2}>
                    <div className={styles.contentt}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel malesuada tellus. Mauris ornare maximus libero, ut tempor odio tempus eu...
                    </div>
                    <div className={styles.contentImg}>
                        <img className={styles.imggg} src={fotoo} alt="foto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
