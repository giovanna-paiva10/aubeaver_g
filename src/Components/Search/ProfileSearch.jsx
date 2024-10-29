import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import styles from './ProfileSearch.module.css';
import garf from '../../assets/garfield.png';

const ProfileSearch = () => {
  const [ongs, setOngs] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchOngs = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'Usuários'));
      setOngs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchOngs();

    // Atualiza o tamanho da tela ao redimensionar
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const truncateText = (text) => {
    if (!text) return ""; // Verifica se o texto existe
    const maxChars = windowWidth > 1024 ? 200 : windowWidth > 768 ? 150 : 100;
    return text.length > maxChars ? `${text.substring(0, maxChars)}...` : text;
  };
  

  return (
    <div id={styles.borda}>
      <h3 className={styles.estiloh3}>ONGs</h3>
      <h4 className={styles.estiloh4}>Encontre a ONG que você deseja</h4>
      {ongs.map(ong => (
        <div key={ong.id} className={styles.content}>
          <Link to={`/search/${ong.id}`}>
            <div className={styles.content1}>
              <div className={styles.contentImg}>
                <img className={styles.img} src={ong.fotoPerfil || garf} alt="ong" />
              </div>
              <div className={styles.contentText}>
                <h3 className={styles.eh3}>{ong.nome}</h3>
                <p>{truncateText(ong.minhaHistoria)}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProfileSearch;
