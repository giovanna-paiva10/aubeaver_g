import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';  // Certifique-se de que o Firestore está configurado corretamente
import { collection, getDocs } from 'firebase/firestore';
import styles from './ProfileSearch.module.css';
import garf from '../../assets/garfield.png'; // Imagem padrão

const ProfileSearch = () => {
  const [ongs, setOngs] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  // Busca perfis de ONGs e Usuários
  useEffect(() => {
      const fetchOngs = async () => {
          const querySnapshot = await getDocs(collection(firestore, 'Ongs'));
          setOngs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      };

      fetchOngs();
  }, []);

  return (
    <>
      <body id={styles.borda}>
        <h3 className={styles.estiloh3}>ONGs</h3>
        <h4 className={styles.estiloh4}>Encontre a ONG que você deseja</h4>

              <p></p>

        {ongs.map(ong => (
                <div key={ong.id} className={styles.content}>

                    <Link to={`/search/${ong.id}`}>
                    <div className={styles.content1}>
                    
                        <div className={styles.contentImg}>
                            {/* Substitua a imagem padrão conforme necessário */}
                            <img className={styles.img} src={ong.fotoPerfil || garf} alt="ong" />
                        </div>
                        <div className={styles.contentText}>
                            <h3 className={styles.eh3}>{ong.nome}</h3>
                            <br />
                            <h4 className={styles.eh5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus ut elit quis commodo. Proin ultrices scelerisque mi laoreet ornare, massa tortor pharetra erat, eget ultricies urna lectus id neque. Cras imperdiet sed nibh nec pretium. Mauris efficitur quam sit amet purus consequat, eu placerat ipsum condimentum.</h4>
                            <p>{ong.descricao}</p>    
                        </div>
                        
                    </div>
                    </Link>
                </div>
            ))}
      </body>
    </>
  );
};

export default ProfileSearch;
