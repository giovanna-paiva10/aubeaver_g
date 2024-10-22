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
        {ongs.map(ong => (
                <div key={ong.id} className={styles.content}>
                    <div className={styles.content1}>
                        <div className={styles.contentImg}>
                            {/* Substitua a imagem padrão conforme necessário */}
                            <img className={styles.img} src={garf} alt="ong" />
                        </div>
                        <div className={styles.contentText}>
                            <h3>{ong.nome}</h3>
                            <h4>{ong.email}</h4>
                            <p>{ong.descricao}</p>
                            <Link to={`/search/${ong.id}`}>Ver mais</Link>
                        </div>
                    </div>
                </div>
            ))}
      </body>
    </>
  );
};

export default ProfileSearch;
