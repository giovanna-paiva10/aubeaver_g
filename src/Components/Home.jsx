import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import garf from '../assets/garfield.png';
import fotoo from '../assets/fotoo.png';
import bradesco from '../assets/bradesco.png';
import cea from '../assets/cea.png';
import drogasil from '../assets/drogasil.png';
import natura from '../assets/natura.png';
import nestle from '../assets/nestle.png';
import conect from '../assets/conect.png';
import cc from '../assets/conectandoco.svg';
import row1 from '../assets/row1.webp';
import row2 from '../assets/row2.webp';
import row3 from '../assets/row3.webp';
import row4 from '../assets/row4.webp';
import comida from '../assets/alimentos.png';
import maodeobra from '../assets/maodeobra.png';
import higiene from '../assets/higiene.png';
import imgab from '../assets/imgab.png';
import small1 from '../assets/small1.png';
import small2 from '../assets/small2.png';
import small11 from '../assets/small11.png';
import small22 from '../assets/small22.png';
import small33 from '../assets/small33.png';
import small44 from '../assets/small44.png';


// Importando Slider do react-slick
import Slider from 'react-slick';
// Importando os estilos do slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';

const Home = () => {
    const [data, setData] = useState([row1, row2, row3, row4]); // Adicione mais imagens se desejar
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (!nome || !email) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Dados enviados, futuramente retornaremos em sua caixa de e-mails');
    };

    // Função para atualizar imagens com base no tamanho da tela
    const updateImages = () => {
        if (window.innerWidth <= 768) {
            setData([small11, small22, small33, small44]);
        } else {
            setData([row1, row2, row3, row4]);
        }
    };

    useEffect(() => {
        // Configura imagens iniciais
        updateImages();

        // Adiciona um listener para atualizações no resize
        window.addEventListener('resize', updateImages);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener('resize', updateImages);
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div id={styles.borda}>
        
            <div className={styles.contslider}>
                <Slider {...settings}>
                    {data.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slider ${index + 1}`} className={styles.sditem} />
                        </div>
                    ))}
                </Slider>
            </div>


            <div className={styles.titulo}>
             <div id="dc">
            <h3 className={styles.estiloh3}>O QUE DOAR</h3>
            </div>
            <h4 className={styles.estiloh4}>Escolha o item com qual você deseja ajudar ou receber ajuda</h4>
            </div>

            <div className={styles.container}>
                
                    <div className={styles.content}>
                        <Link to={`/search?tag=Alimentos`}>
                        <div className={styles.caixa}><img className={styles.imgg} src={comida} alt="garfield" /></div>
                        <div className={styles.caixa2}>
                        <div className={styles.textos}>
                            <h3 className={styles.contenttitle}>Doação de alimentos</h3>
                            <h4 className={styles.contenttext}>
                            A doação de alimentos é crucial para combater a insegurança alimentar, possibilitando o acesso a uma alimentação digna para aqueles em situação de vulnerabilidade.
                            </h4>
                        </div>
                        </div>
                        </Link>
                    </div>
                   <div className={styles.content}>
                        <Link to={`/search?tag=Higiene`}>
                        <div className={styles.caixa}><img className={styles.imgg} src={higiene} alt="itens de higiene" /></div>
                        <div className={styles.caixa2}>
                        <div className={styles.textos}>
                            <h3 className={styles.contenttitle}>Doação de produtos de higiene</h3>
                            <h4 className={styles.contenttext}>
                            A doação de itens de higiene é essencial para garantir a saúde e dignidade de indivíduos em vulnerabilidade, prevenindo doenças e promovendo bem-estar.
                            </h4>
                        </div>
                        </div>
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <Link to={`/search?tag=Trabalho%20Voluntário`}>
                        <div className={styles.caixa}><img className={styles.imgg} src={maodeobra} alt="trabalho voluntario" /></div>
                        <div className={styles.caixa2}>
                        <div className={styles.textos}>
                            <h3 className={styles.contenttitle}>ONGs de Trabalho voluntário</h3>
                            <h4 className={styles.contenttext}>
                            A doação de mão de obra fortalece comunidades, resolve necessidades imediatas, capacita indivíduos e promove uma sociedade mais solidária e colaborativa
                            </h4>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                
            </div>
            <div id="qs"></div>
               
            <div className={styles.titulo}> 
            
            <h3 className={styles.estiloh3}>QUEM SOMOS</h3>
           <img className={styles.banner} src={cc} alt="cc" />
           
           </div>
           

            <div className={styles.container2}>
                <div className={styles.content2}>
                    <div className={styles.contentt}>
                    A Aubeaver é uma plataforma digital lançada em 2024, criada para conectar doadores a ONGs e pessoas em situação de vulnerabilidade social. Com foco nas regiões de São Paulo e Itaquaquecetuba, o objetivo do Aubeaver é ajudar as ONGs a captar recursos e facilitar para os doadores encontrarem causas confiáveis, com transparência e segurança nas transações.
                            <br />
                            <br />
                    O site foi desenvolvido pela GAK, uma empresa que utiliza a tecnologia para promover o bem-estar social e buscar um impacto positivo nas comunidades. Nossa plataforma foi projetada para tornar o processo de doação mais simples, seguro e eficaz, garantindo que cada contribuição chegue de forma direta às causas que realmente precisam de apoio. Com nossa interface intuitiva, o Aubeaver visa aumentar a confiança nas doações e fortalecer a solidariedade social.
                    </div>
                    <div className={styles.contentImg}>
                        <img className={styles.imggg} src={imgab} alt="foto" />
                    </div>
                </div>
            </div>

        
            <div id="ps"></div>
            <div className={styles.titulo}> 
            <h3 className={styles.estiloh3}>SEJA UM PARCEIRO</h3>
            <h4 className={styles.estiloh4}>Conheça nossos parceiros e saiba mais sobre quem apoia nossa causa</h4>
            </div>

            <div className={styles.container3}>
                <div className={styles.content3}>
                        <div className={styles.imgparc}><img className={styles.img4} src={natura} alt="garfield" /></div>

                        <div className={styles.imgparc} ><img className={styles.img4} src={drogasil} alt="garfield" /></div>

                        <div className={styles.imgparc}><img className={styles.img4} src={cea} alt="garfield" /></div>

                        <div className={styles.imgparc}><img className={styles.img4} src={bradesco} alt="garfield" /></div>

                        <div className={styles.imgparc} ><img className={styles.img4} src={nestle} alt="garfield" /></div>
                </div>
                <p></p>
                <div className={styles.content4}>
                    <div className={styles.forms}>
                        <form className={styles.formulario}>
                            <input 
                                className={styles.inputt} 
                                placeholder="Digite seu nome" 
                                type="text" 
                                value={nome} 
                                onChange={(e) => setNome(e.target.value)} 
                            />
                            
                            <input 
                                className={styles.inputt} 
                                placeholder="Digite seu E-mail" 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            
                            <p></p>
                            
                            <button 
                                type="button" 
                                className={styles.btst} 
                                onClick={handleSubmit}
                            >
                            Enviar
                            </button>
                        </form>
                    </div>

                    <div className={styles.contentText}>
                        <h3>Torne-se um parceiro e ajude a transformar vidas! Sua empresa pode fazer a diferença ao se unir a nós em ações que impactam positivamente a comunidade.
                        Juntos, podemos criar um futuro melhor e mais solidário, construindo pontes e conectando corações.</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
