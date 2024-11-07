import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase'; 
import garf from '../../assets/garfield.png'; //
import fotoo from '../../assets/fotoo.png'; //
import styles from './ProfileDetails.module.css';
import localizacao from '../../assets/locationicon.svg';
import website from '../../assets/webicon.svg';
import facebook from '../../assets/facebookicon.svg';
import instagram from '../../assets/instaicon.svg';
import { doc, getDoc } from 'firebase/firestore';

const ProfileDetails = () => {
    const { id } = useParams(); 
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!id) return;

            try {
                const docRef = doc(firestore, 'Ongs', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProfileData(docSnap.data());
                } else {
                    console.log('Perfil não encontrado!');
                }
            } catch (error) {
                console.error('Erro ao buscar dados do perfil:', error);
            }
        };

        fetchProfileData();
    }, [id]); 
    return (
        <body id={styles.borda}>
        <div>
            {profileData ? (
                

            <div className={styles.container}> 

            <div className={styles.content}> 

                <div className={styles.content1}>
                    <div className={styles.contentImg}>
                    <img className={styles.img} src={garf} alt="ong" />
                    </div>
                <div className={styles.contentText}>
                <h1 className={styles.estiloh2}>{profileData.nome}</h1>
                <br />
                    <h4> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus ut elit quis commodo. Proin ultrices scelerisque mi. </h4>
                    <br />
                    <button className={styles.botao1}>Preciso de ajuda</button>
                    <button className={styles.botao1}>Quero ajudar</button>
                </div>
                <div>
                <button className={styles.botao}> Editar perfil</button>

                <button className={styles.botao2}> Sair</button>
                </div>
                </div>
                
            </div>

                </div>

                
            ) : (
                <p>Carregando...</p>
            )}
            </div>

            <div className={styles.container}>

            <div className={styles.caixa1}>
                    <div className={styles.content2}>
                    <div className={styles.contentText2}>
                    <h2 className={styles.estiloh2}> Sobre a organização</h2>
                    <br />
                    <h4 >  A Cáritas São Paulo é uma organização humanitária que atua há mais de 60 anos, buscando promover a dignidade humana e garantir os direitos de pessoas em situação de rua, migrantes, refugiados e outras populações vulneráveis. Nossos programas oferecem alimentos, roupas, kits de higiene, apoio psicossocial e ações de reintegração social. Trabalhamos para garantir que as pessoas tenham acesso a serviços essenciais como saúde, educação e documentação. Sua contribuição financeira é fundamental para manter nossas atividades e expandir nosso alcance. Com sua doação, conseguimos fornecer suporte a mais pessoas, oferecendo a elas as condições mínimas para uma vida digna. Junte-se a nós e ajude a transformar a realidade de quem mais precisa, promovendo a inclusão social e o fortalecimento de nossa rede de apoio.
                    </h4>
                        <br className={styles.espaco}/>
                        <br />
                    <h2 className={styles.estiloh2}> Palavras de apoio</h2>
                    <br />
                    <h3 className={styles.estilouser }>user.name</h3>
                    <br />
                    <h4 className={styles.estiloh4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu eleifend nisl. Phasellus libero justo, ultricies nec mauris a, congue iaculis eros. Aenean egestas nisl in quam vehicula,  </h4>
                </div> 
            </div>
            </div>

            

            <div className={styles.caixa}>

            <div className={styles.contentText3}>
                        <h2 className={styles.estiloh2}>Contato</h2>
                        <br />
                        <h5 className={styles.estiloh5}>
                            <ul>
                                <li className={styles.espacolista}>
                                    <div className={styles.icon}> <img src={localizacao} alt='local'/> </div>
                                    <div className={styles.lista}> 
                                    <h4 className={styles.titulo} >LOCALIZAÇÃO</h4>
                                    Lorem ipsum dolor sit amet, consectetur
                                    </div>
                                </li>

                                <li className={styles.espacolista}> 
                                <div className={styles.listaa}>
                                <img src={website} alt='web'/>WEBSITE 
                                <br /> Lorem ipsum dolor sit amet, consectetur
                                </div>
                                </li>

                                <li className={styles.espacolista}> 
                                <div>
                                <img src={facebook} alt='face'/> FACEBOOK
                                <br /> Lorem ipsum dolor sit</div>
                                </li>

                                <li className={styles.espacolista}> 
                                <div>
                                <img src={instagram} alt='insta'/> INSTAGRAM
                                Lorem ipsum dolor sit
                                </div>
                                </li>

                            </ul>
                        </h5>
                    </div>
                        <p className={styles.espaco}/>
                    <div className={styles.contentText4}>
                        <img src={fotoo} alt="foto"  className={styles.imgg}/>
                    </div>

                    </div>

            </div>
            
    

        </body>
    );
};

export default ProfileDetails;
