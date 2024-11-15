import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore, auth } from '../../firebase'; 
import foto from '../../assets/rosto.svg';
import garf from '../../assets/garfield.png'; 
import fotoo from '../../assets/fotoo.png'; 
import styles from './ProfileDetails.module.css';
import localizacao from '../../assets/locationicon.svg';
import website from '../../assets/webicon.svg';
import facebook from '../../assets/facebookicon.svg';
import instagram from '../../assets/instaicon.svg';
import { doc, getDoc } from 'firebase/firestore';

const ProfileDetails = () => {
    const { id } = useParams(); 
    const [profileData, setProfileData] = useState(null);
    const [userType, setUserType] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [tipoAjuda, setTipoAjuda] = useState('');

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

        const fetchUserType = async () => {
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    try {
                        const userDocRef = doc(firestore, "Usuários", user.uid);
                        const userDocSnap = await getDoc(userDocRef);

                        if (userDocSnap.exists()) {
                            setUserType(userDocSnap.data().Tipo_de_identificador);
                            return;
                        }

                        const ongDocRef = doc(firestore, "Ongs", user.uid);
                        const ongDocSnap = await getDoc(ongDocRef);

                        if (ongDocSnap.exists()) {
                            setUserType(ongDocSnap.data().Tipo_de_identificador);
                            return;
                        }
                    } catch (error) {
                        console.error("Erro ao buscar tipo de usuário:", error);
                    }
                }
            });
        };

        fetchUserType();
        fetchProfileData();
    }, [id]); 

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <body id={styles.borda}>
        <div>
            {profileData ? (
                <>

            <div className={styles.container}> 

                <div className={styles.content}> 

                    <div className={styles.content1}>
                        <div className={styles.contentImg}>
                            <img className={styles.img} src={profileData.fotoPerfil || garf} alt="ong" />
                        </div>

                        <div className={styles.contentText}>
                            <h1 className={styles.estiloh2}>{profileData.nome}</h1><br />
                            <h4>{profileData.bio}</h4><br />
                            {userType === 'Doador' && (
                                <button className={styles.botao1}>Quero ajudar</button>
                            )}
                            {userType === 'Solicitante' && (
                                <button className={styles.botao1} onClick={openModal}>Preciso de ajuda</button>
                            )}
                        </div>

                    </div>
                    
                </div>

            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <span className={styles.close} onClick={closeModal}>×</span>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.modalLeft}>
                                <div className={styles.modalImage}>
                                    <img src={foto} alt="Mascote" />
                                </div>
                                <div className={styles.modalInputs}>
                                    <label>E-mail</label>
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label>Nome completo</label>
                                    <input
                                        type="text"
                                        placeholder="Nome completo"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                    <label>Telefone</label>
                                    <input
                                        type="tel"
                                        placeholder="Telefone"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    />
                                    <label>Endereço</label>
                                    <input
                                        type="text"
                                        placeholder="Endereço"
                                        value={endereco}
                                        onChange={(e) => setEndereco(e.target.value)}
                                    />
                                    <label>Tipo de ajuda necessária</label>
                                    <select
                                        value={tipoAjuda}
                                        onChange={(e) => setTipoAjuda(e.target.value)}
                                    >
                                        <option value="">Selecione o tipo de ajuda</option>
                                        <option value="Alimentos">Alimentos</option>
                                        <option value="Higiene">Higiene</option>
                                        <option value="Ajuda voluntária">Ajuda voluntária</option>
                                    </select>
                                    <button className={styles.botao2} onClick={console.log('clicou')}>Avançar</button>
                                </div>
                            </div>
                            <div className={styles.modalRight}>
                                <p>
                                    Estamos aqui para apoiar você a alcançar um futuro melhor. 
                                    Preencha o formulário ao lado para que possamos ajudar!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.container1}>
        
                                <div className={styles.content2}>
                                    <div className={styles.contentText2}>
                                        <h2 className={styles.estiloh2}> Sobre a organização</h2><br />
                                        <h4>{profileData.organizacao}</h4>
                                            <br className={styles.espaco}/>
                                        <br />
                                        <h2 className={styles.estiloh2}> Palavras de apoio</h2>
                                        <br />
                                        <h3 className={styles.estilouser }>user.name</h3>
                                        <br />
                                        <h4 className={styles.estiloh4}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu eleifend nisl. Phasellus libero justo, ultricies nec mauris a, congue iaculis eros. Aenean egestas nisl in quam vehicula,  </h4>
                                    </div> 
                                </div>

                                <div className={styles.caixa}>
                                    {(profileData.localizacao || profileData.website || profileData.facebook || profileData.instagram) ? (
                                        <div className={styles.contentText3}>
                                            <h2 className={styles.estiloh2}>Contato</h2>
                                            <br />
                                            <h5 className={styles.estiloh5}>
                                                <ul>
                                                    {profileData.localizacao && (
                                                        <li className={styles.espacolista}>
                                                            <div className={styles.icon}> 
                                                                <img src={localizacao} alt='local'/> 
                                                            </div>
                                                            <div className={styles.lista}> 
                                                                <h4 className={styles.titulo}>LOCALIZAÇÃO</h4>
                                                                {profileData.localizacao}
                                                            </div>
                                                        </li>
                                                    )}
                                                    
                                                    {profileData.website && (
                                                        <li className={styles.espacolista}> 
                                                            <div className={styles.icon}>
                                                                <img src={website} alt='web'/>
                                                            </div>
                                                            <div className={styles.listaa}>
                                                                <h4 className={styles.titulo}>WEBSITE</h4>
                                                                {profileData.website}
                                                            </div>
                                                        </li>
                                                    )}
                                                    
                                                    {profileData.facebook && (
                                                        <li className={styles.espacolista}> 
                                                            <div className={styles.icon}>
                                                                <img src={facebook} alt='face'/>
                                                            </div>
                                                            <div className={styles.listaa}>
                                                                <h4 className={styles.titulo}>FACEBOOK</h4>
                                                                {profileData.facebook}
                                                            </div>
                                                        </li>
                                                    )}
                                                    
                                                    {profileData.instagram && (
                                                        <li className={styles.espacolista}> 
                                                            <div className={styles.icon}>
                                                                <img src={instagram} alt='insta'/>
                                                            </div>
                                                            <div className={styles.listaa}>
                                                                <h4 className={styles.titulo}>INSTAGRAM</h4>
                                                                {profileData.instagram}
                                                            </div>
                                                        </li>
                                                    )}
                                                </ul>
                                            </h5>
                                        </div>
                                    ) : (
                                        <div className={styles.contentText3}>
                                            <h2 className={styles.estiloh2}>Contato</h2>
                                            <br />
                                            Infelizmente a ONG ainda não adicionou nenhum meio de contato.
                                        </div>
                                    )}

                                    <p className={styles.espaco}/>

                                    <div className={styles.contentText4}>
                                        <img src={fotoo} alt="fotoplaceholderpraad"  className={styles.imgg}/>
                                    </div>

                                </div>
                            </div>


                            <div className={styles.container3}>
                                <div className={styles.content3}>
                                    {profileData.fotoSituacao1 && (<div>
                                        <img className={styles.imggg} src={profileData.fotoSituacao1 || fotoo} alt="foto" /></div>
                                    )}
                                    {profileData.fotoSituacao2 && (<div>
                                        <img className={styles.imggg} src={profileData.fotoSituacao2 || fotoo} alt="foto" /></div>
                                    )}{profileData.fotoSituacao3 && (<div>
                                        <img className={styles.imggg} src={profileData.fotoSituacao3 || fotoo} alt="foto" /></div>
                                    )}
                                </div>
                            </div>
                        </>
                ) : (
                    <p>Carregando...</p>
                )}
        </div>

            
            
    

        </body>
    );
};

export default ProfileDetails;
