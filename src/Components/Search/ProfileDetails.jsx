import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase'; 
import garf from '../../assets/garfield.png'; //
import styles from './ProfileDetails.module.css';

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
                <div className={styles.content}>
                    <div className={styles.contentText2}>
                    <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu eleifend nisl. Phasellus libero justo, ultricies nec mauris a, congue iaculis eros. Aenean egestas nisl in quam vehicula, vitae finibus purus vulputate. Aliquam erat volutpat. Proin ultricies, neque ut vehicula lacinia, mi erat vestibulum dolor, non consequat nibh augue eget libero.
                    </h4>
                    </div>
                    <div className={styles.contentText3}>
                </div>
            </div>

            </div>

        </body>
    );
};

export default ProfileDetails;
