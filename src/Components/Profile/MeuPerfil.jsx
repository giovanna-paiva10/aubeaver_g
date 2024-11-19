import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase'; 
import { getDoc, doc } from 'firebase/firestore';
import garf from '../../assets/garfield.png'; 
import fotoo from '../../assets/fotoo.png'; 
import localizacao from '../../assets/locationicon.svg';
import website from '../../assets/webicon.svg';
import facebook from '../../assets/facebookicon.svg';
import instagram from '../../assets/instaicon.svg';
import styles from '../Search/ProfileDetails.module.css';


const MeuPerfil = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [userType, setUserType] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const userDocRef = doc(firestore, "Usuários", user.uid);
                    const userDocSnap = await getDoc(userDocRef);

                    if (userDocSnap.exists()) {
                        setUserDetails(userDocSnap.data());
                        setUserType("Usuário");
                        return;
                    }

                    const ongDocRef = doc(firestore, "Ongs", user.uid);
                    const ongDocSnap = await getDoc(ongDocRef);

                    if (ongDocSnap.exists()) {
                        setUserDetails(ongDocSnap.data());
                        setUserType("Ong");
                        return;
                    }

                    console.log("Usuário não encontrado em 'Usuários' ou 'Ongs'");
                    await auth.signOut();
                    window.location.href = "/login";
                } catch (error) {
                    console.error("Erro ao buscar dados do usuário:", error);
                }
            } else {
                console.log("Usuário não autenticado");
                await auth.signOut();
                window.location.href = "/login";
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            window.location.href = "/login";
        } catch (error) {
            console.error("Erro ao fazer logout", error.message);
        }
    };

    const handleEditProfile = () => {
        window.location.href = '/profile/editarperfil';
    };

    const handleEditProfileOng = () => {
        window.location.href = '/profile/editarperfilong';
    };

    return (
        <form>
            {userDetails ? (
                <>
                    <p></p>
                    {userType === "Usuário" ? (
                        <>
                        <img src={userDetails.fotoPerfil} alt="Foto de Perfil" />
                        <p> </p>
                            <p>Olá, {userDetails.nome}</p>
                            <p>Sua história: {userDetails.minhaHistoria}</p>

                            <button type="button" onClick={handleEditProfile}>Editar informações</button>
                            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                        </>
                    ) : userType === "Ong" ? (
                        <>
                            <div className={styles.container}> 

                                <div className={styles.content}> 

                                    <div className={styles.content1}>
                                        <div className={styles.contentImg}>
                                            <img className={styles.img} src={userDetails.fotoPerfil || garf} alt="ong" />
                                        </div>

                                        <div className={styles.contentText}>
                                            <h1 className={styles.estiloh2}>{userDetails.nome}</h1>
                                            <br />
                                            <h4> {userDetails.bio}</h4>
                                            <br />
                                        </div>

                                        <div>
                                            <button type="button" onClick={handleEditProfileOng} className={styles.botao}> Editar perfil</button>

                                            <button type="button" onClick={handleLogout} className={styles.botao2}> Sair</button>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                            <div className={styles.container1}>
        
                                <div className={styles.content2}>
                                    <div className={styles.contentText2}>
                                        <h2 className={styles.estiloh2}> Sobre a organização</h2><br />
                                        <h4>{userDetails.organizacao}</h4>
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
                                    {(userDetails.localizacao || userDetails.website || userDetails.facebook || userDetails.instagram) ? (
                                        <div className={styles.contentText3}>
                                            <h2 className={styles.estiloh2}>Contato</h2>
                                            <br />
                                            <h5 className={styles.estiloh5}>
                                                <ul>
                                                    {userDetails.localizacao && (
                                                        <li className={styles.espacolista}>
                                                            <div className={styles.icon}> 
                                                                <img src={localizacao} alt='local'/> 
                                                            </div>
                                                            <div className={styles.lista}> 
                                                                <h4 className={styles.titulo}>LOCALIZAÇÃO</h4>
                                                                {userDetails.localizacao}
                                                            </div>
                                                        </li>
                                                    )}
                                                    
                                                    {userDetails.website && (
                                                        <li className={styles.espacolista}> 
                                                            <div className={styles.icon}>
                                                                <img src={website} alt='web'/>
                                                            </div>
                                                            <div className={styles.listaa}>
                                                                <h4 className={styles.titulo}>WEBSITE</h4>
                                                                {userDetails.website}
                                                            </div>
                                                        </li>
                                                    )}
                                                    
                                                    {userDetails.facebook && (
                                                        <li className={styles.espacolista}> 
                                                            <div className={styles.icon}>
                                                                <img src={facebook} alt='face'/>
                                                            </div>
                                                            <div className={styles.listaa}>
                                                                <h4 className={styles.titulo}>FACEBOOK</h4>
                                                                {userDetails.facebook}
                                                            </div>
                                                        </li>
                                                    )}
                                                    
                                                    {userDetails.instagram && (
                                                        <li className={styles.espacolista}> 
                                                            <div className={styles.icon}>
                                                                <img src={instagram} alt='insta'/>
                                                            </div>
                                                            <div className={styles.listaa}>
                                                                <h4 className={styles.titulo}>INSTAGRAM</h4>
                                                                {userDetails.instagram}
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
                                    {userDetails.fotoSituacao1 && (<div>
                                        <img className={styles.imggg} src={userDetails.fotoSituacao1 || fotoo} alt="foto" /></div>
                                    )}
                                    {userDetails.fotoSituacao2 && (<div>
                                        <img className={styles.imggg} src={userDetails.fotoSituacao2 || fotoo} alt="foto" /></div>
                                    )}{userDetails.fotoSituacao3 && (<div>
                                        <img className={styles.imggg} src={userDetails.fotoSituacao3 || fotoo} alt="foto" /></div>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : null}
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </form>
    );
};

export default MeuPerfil;
