import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import styles from './ProfileSearch.module.css';
import garf from '../../assets/garfield.png';

const ProfileSearch = () => {
  const [ongs, setOngs] = useState([]);
  const [filteredOngs, setFilteredOngs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const ongsPerPage = 10;

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'Usuários'));
        const ongData = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(ong => ong.nome);
        
        setOngs(ongData);
        setFilteredOngs(ongData);
      } catch (error) {
        console.error("Erro ao buscar ONGs:", error);
      }
    };

    fetchOngs();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const filtered = ongs.filter(ong =>
      ong.nome && ong.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOngs(filtered);
    setCurrentPage(1);
  }, [searchTerm, ongs]);

  const truncateText = (text) => {
    if (!text) return "";
    const maxChars = windowWidth > 1024 ? 200 : windowWidth > 768 ? 150 : 100;
    return text.length > maxChars ? `${text.substring(0, maxChars)}...` : text;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const indexOfLastOng = currentPage * ongsPerPage;
  const indexOfFirstOng = indexOfLastOng - ongsPerPage;
  const currentOngs = filteredOngs.slice(indexOfFirstOng, indexOfLastOng);

  const totalPages = Math.ceil(filteredOngs.length / ongsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div id={styles.borda}>
      <h3 className={styles.estiloh3}>ONGs</h3>
      <h4 className={styles.estiloh4}>Encontre a ONG que você deseja</h4>
      <input
        type="text"
        placeholder="Buscar ONG"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
      {currentOngs.map(ong => (
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

      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </div>
  );
};

export default ProfileSearch;
