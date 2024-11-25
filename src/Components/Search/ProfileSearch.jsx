import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import styles from "./ProfileSearch.module.css";
import garf from "../../assets/garfield.png";
import limite from "../../assets/limite.svg";

const ProfileSearch = () => {
  const [ongs, setOngs] = useState([]);
  const [filteredOngs, setFilteredOngs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedTag, setSelectedTag] = useState("");

  const ongsPerPage = 10;

  useEffect(() => {
    const fetchOngs = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "Ongs"));
        const ongData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((ong) => ong.nome);

        setOngs(ongData);
        setFilteredOngs(ongData);
      } catch (error) {
        console.error("Erro ao buscar ONGs:", error);
      }
    };

    fetchOngs();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tag = params.get("tag");
    if (tag) {
      setSelectedTag(tag); 
    }
  }, [location]); 

  useEffect(() => {
    const filtered = ongs.filter((ong) => {
      const matchesSearchTerm =
        ong.nome && ong.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag =
        selectedTag === "" || ong.tags === selectedTag;  
      return matchesSearchTerm && matchesTag;
    });
    setFilteredOngs(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedTag, ongs]);

  const truncateText = (text) => {
    if (!text) return "";
    const maxChars = windowWidth > 1024 ? 500 : windowWidth > 768 ? 350 : windowWidth > 585 ? 200 
    : windowWidth > 450 ? 100 : 20;
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
    <body>
    <div id={styles.borda}>
      <div className={styles.container}>
        <div className={styles.linha}>
          <div>
            <h3 className={styles.estiloh3}>ONGs</h3>
            <h4 className={styles.estiloh4}>Encontre a ONG que você deseja</h4>
          </div>
          <div className={styles.linha2}>
            <input
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.searchInput}
            />
            <select 
            className={styles.select}
              onChange={(e) => setSelectedTag(e.target.value)}
              value={selectedTag}
            >
              <option value="">Todas as ONGs</option>
              <option value="Alimentos">Alimentos</option>
              <option value="Higiene">Higiene</option>
              <option value="Trabalho Voluntário">Trabalho Voluntário</option>
            </select>
          </div>
        </div>

        {currentOngs.map((ong) => (
          <div key={ong.id} className={styles.content}>
            <Link to={`/search/${ong.id}`}>
              <div className={styles.content1}>
                <div className={styles.contentImg}>
                  <img
                    className={styles.img}
                    src={ong.fotoPerfil || garf}
                    alt="Ong"
                  />
                </div>
                <div className={styles.contentText}>
                <div className={styles.headerText}>
                  <h2 className={styles.eh2}> {ong.nome}</h2> 
                  <h3 className={styles.icon}><span className={styles.caixaIcone}>Limite de {ong.pedidosAtuais}/{ong.limitePessoas} solicitações</span> <span> <div className={styles.contentIcon}><img className={styles.imgg} src={limite} alt="icone" /></div> </span></h3>
                </div>
                  <br/>

                  <h3 className={styles.eh3}><p>{truncateText(ong.organizacao)}</p></h3>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div className={styles.ctbt}>
          <div className={styles.pagination}>
            <button
              className={styles.botao1}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className={styles.pag}>
              Página {currentPage} de {totalPages}
            </span>
            <button
              className={styles.botao1}
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Próxima
            </button>
          </div>
          </div>
      </div>
    </div>
    </body>
  );
};

export default ProfileSearch;
