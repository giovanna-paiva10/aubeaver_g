import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore, auth } from "../../firebase";
import foto from "../../assets/rosto.svg";
import garf from "../../assets/garfield.png";
import fotoo from "../../assets/fotoo.png";
import styles from "./ProfileDetails.module.css";
import localizacao from "../../assets/locationicon.svg";
import website from "../../assets/webicon.svg";
import facebook from "../../assets/facebookicon.svg";
import instagram from "../../assets/instaicon.svg";
import ModalPopUp from "../Modal/ModalPopUp";
import {
  increment,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
    telefone: "",
    endereco: "",
    tipoAjuda: "",
    alimentosDetails: [{ quantidade: "", tipo: "" }],
    higieneDetails: [{ produto: "", marca: "" }],
    voluntariaDetails: [{ horas: "", habilidades: "" }],
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

    const handleNextStep = () => {
        
      if (
        !formData.email ||
        !formData.nome ||
        !formData.telefone ||
        !formData.endereco ||
        !formData.tipoAjuda
      ) {
        setError("Por favor, preencha todos os campos antes de avançar.");
        return;
        }
  
        if (formData.tipoAjuda === "Alimentos" || formData.tipoAjuda === "Higiene") {
            if (userType === "Doador") {
                if (
                    !formData.quantidadeProdutos ||
                    (formData.quantidadeProdutos === "Personalizado" &&
                        !formData.quantidadePersonalizada)
                ) {
                    setError("Por favor, preencha a quantidade de produtos.");
                    return;
                }
            }
        }
  
        setError("");
        setCurrentStep((prev) => prev + 1);
    };

    const handlePreviousStep = () => setCurrentStep((prev) => prev - 1)

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        const newValue = (name === "quantidadePersonalizada" || name === "quantidade")
            ? value === "" ? "" : parseInt(value)
            : value;
    
        setFormData((prevData) => {
            if (name === "tipoAjuda") {
                return {
                    ...prevData,
                    [name]: value,
                    alimentosDetails: value === "Alimentos" ? [{ tipo: "", quantidade: "" }] : prevData.alimentosDetails,
                    higieneDetails: value === "Higiene" ? [{ produto: "", marca: "" }] : prevData.higieneDetails,
                    voluntariaDetails: value === "Ajuda voluntária" ? [{ horas: "", habilidades: "" }] : prevData.voluntariaDetails
                };
            }
    
            return {
                ...prevData,
                [name]: newValue
            };
        });
    };
    
    
    

    const handleSubmit = async () => {
        if (profileData.pedidosAtuais >= profileData.limitePessoas) {
            alert("O limite de pedidos foi atingido para esta ONG.");
            return;
        }
    
        const tipoDeAjuda = userType === "Doador" ? "Doação" : "Requisição"
        const filteredFormData = { ...formData, tipoAjuda: tipoDeAjuda }
    
        Object.keys(filteredFormData).forEach((key) => {
            if (
                filteredFormData[key] === null ||
                filteredFormData[key] === "" ||
                filteredFormData[key] === undefined
            ) {
                delete filteredFormData[key];
            } else if (typeof filteredFormData[key] === "object") {
                Object.keys(filteredFormData[key]).forEach((subKey) => {
                    if (
                        filteredFormData[key][subKey] === null ||
                        filteredFormData[key][subKey] === "" ||
                        filteredFormData[key][subKey] === undefined
                    ) {
                        delete filteredFormData[key][subKey];
                    }
                });
    
                if (Object.keys(filteredFormData[key]).length === 0) {
                    delete filteredFormData[key];
                }
            }
        });

        let totalQuantidade = 0;
      
        if (formData.tipoAjuda === "Alimentos" && userType === "Doador") {
          if (formData.alimentosDetails && formData.alimentosDetails.length > 0) {
            totalQuantidade = formData.alimentosDetails.reduce(
              (sum, alimento) => sum + (parseInt(alimento.quantidade) || 0),
              0
            );
          }
          const limite =
            formData.quantidadeProdutos === "Personalizado"
              ? parseInt(formData.quantidadePersonalizada)
              : parseInt(formData.quantidadeProdutos);
      
          if (totalQuantidade > limite) {
            setError(
              `O total de alimentos (${totalQuantidade}) excede o limite de ${limite}.`
            );
            return; 
          }
        }
      
        if (formData.tipoAjuda === "Higiene" && userType === "Doador") {
          if (formData.higieneDetails && formData.higieneDetails.length > 0) {
            totalQuantidade = formData.higieneDetails.reduce(
              (sum, produto) => sum + (parseInt(produto.quantidade) || 0),
              0
            );
          }
          const limite =
            formData.quantidadeProdutos === "Personalizado"
              ? parseInt(formData.quantidadePersonalizada)
              : parseInt(formData.quantidadeProdutos);
      
          if (totalQuantidade > limite) {
            setError(
              `O total de itens de higiene (${totalQuantidade}) excede o limite de ${limite}.`
            );
            return;
          }
        }
      
        const notificationData = {
          uid: uuidv4(),  
          title: `${tipoDeAjuda}`,
          description: `Relacionado a ${formData.tipoAjuda}`,
          timestamp: new Date(),
          isRead: false,
          type: formData.tipoAjuda,
          nomeUser: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          endereco: formData.endereco,
          alimentosDetails: formData.alimentosDetails,
          higieneDetails: formData.higieneDetails,
          voluntariaDetails: formData.voluntariaDetails,
        };
      
        try {
          const ongId = id;
          const notificationRef = doc(firestore, "Notificações", ongId);
          await setDoc(
            notificationRef,
            {
              notifications: arrayUnion(notificationData),
            },
            { merge: true }
          );
    
          const ongRef = doc(firestore, "Ongs", ongId);
          const ongDocSnap = await getDoc(ongRef);
    
          if (ongDocSnap.exists()) {
            const ongData = ongDocSnap.data();
            const currentPedidosAtuais = ongData.pedidosAtuais || 0;
      
            await updateDoc(ongRef, {
              pedidosAtuais: increment(1),
            });
    
            console.log("Notificação criada com sucesso!");
      
            console.log(formData.quantidadeProdutos, formData.quantidadePersonalizada ,formData.alimentosDetails[0].quantidade)
            console.log("Total Quantidade:", totalQuantidade);
console.log("Quantidade Personalizada:", formData.quantidadePersonalizada);
          } else {
            console.error("Documento da ONG não encontrado");
          }
        } catch (error) {
          console.error("Erro ao criar notificação:", error);
        }
    
        setCurrentStep(3);
    };

    const handleDynamicFieldChange = (e, type, index) => {
        const { name, value } = e.target;
        const newValue = (name === "quantidade" || name === "quantidadePersonalizada")
            ? value === "" ? "" : parseInt(value)
            : value;
    
        const updatedFormData = { ...formData };
    
        if (name === "tipoAjuda") {
            updatedFormData.tipoAjuda = value;
        } else {
            if (type === "alimentos") {
                updatedFormData.alimentosDetails[index][name] = newValue;
            } else if (type === "higiene") {
                updatedFormData.higieneDetails[index][name] = newValue;
            } else if (type === "Trabalho Voluntário") {
                updatedFormData.voluntariaDetails[index][name] = newValue;
            }
        }
    
        setFormData(updatedFormData);
    };    


  const addField = (type) => {
    const updatedFormData = { ...formData };

    if (type === "alimentos") {
      updatedFormData.alimentosDetails.push({ quantidade: "", tipo: "" });
    } else if (type === "higiene") {
      updatedFormData.higieneDetails.push({ produto: "", marca: "" });
    } else if (type === "Trabalho Voluntário") {
      updatedFormData.voluntariaDetails.push({
        horas: "",
        habilidades: "",
      });
    }

    setFormData(updatedFormData);
  };

  const removeField = (type, index) => {
    const updatedFormData = { ...formData };

    if (type === "alimentos") {
      updatedFormData.alimentosDetails.splice(index, 1);
    } else if (type === "higiene") {
      updatedFormData.higieneDetails.splice(index, 1);
    } else if (type === "Trabalho Voluntário") {
      updatedFormData.voluntariaDetails.splice(index, 1);
    }

    setFormData(updatedFormData);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!id) return;

      try {
        const docRef = doc(firestore, "Ongs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          console.log("Perfil não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
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

  useEffect(() => {
    if (profileData && profileData.tags) {
      setFormData((prevData) => ({
        ...prevData,
        tipoAjuda: profileData.tags,
      }));
    }
  }, [profileData]);

  const openModal = () => {
    if (profileData.pedidosAtuais >= profileData.limitePessoas) {
      alert("O limite de pedidos foi atingido para esta ONG.");
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <body id={styles.borda}>
      <div className={styles.mainContainer}>
        {/*< ModalPopUp />*/}

        {profileData ? (
          <>
            <div className={styles.container}>
              <div className={styles.content}>
                {/* <div className={styles.content1}> */}
                <div className={styles.contentImg}>
                  <img
                    className={styles.img}
                    src={profileData.fotoPerfil || garf}
                    alt="ong"
                  />
                </div>

                <div className={styles.contentText}>
                  <h1 className={styles.estiloh2}>
                    {profileData.nome}
                    {profileData.tags && (
                      <span className={styles.tag}>{profileData.tags}</span>
                    )}
                  </h1>
                  <br />
                  <h4>{profileData.bio}</h4>
                  <br />
                  {userType === "Doador" && (
                    <button className={styles.botao1} onClick={openModal}>
                      Quero ajudar
                    </button>
                  )}
                  {userType === "Solicitante" && (
                    <button className={styles.botao1} onClick={openModal}>
                      Preciso de ajuda
                    </button>
                  )}
                </div>
                {/* </div> */}
              </div>
            </div>

            {isModalOpen && (
              <div className={styles.modalOverlay} onClick={closeModal}>
                <div
                  className={styles.modalContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.modalLeft}>
                    <div className={styles.contentLogo}>
                      <img className={styles.logo} src={foto} alt="Mascote" />
                    </div>

                    {currentStep === 1 && (
                      <>
                        <label>E-mail</label>
                        <input
                          className={styles.input}
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label>Nome completo</label>
                        <input
                          className={styles.input}
                          type="text"
                          name="nome"
                          placeholder="Nome completo"
                          value={formData.nome}
                          onChange={handleChange}
                        />
                        <label>Telefone</label>
                        <input
                          className={styles.input}
                          type="tel"
                          name="telefone"
                          placeholder="Telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                        />
                        <label>Endereço</label>
                        <input
                          className={styles.input}
                          type="text"
                          name="endereco"
                          placeholder="Endereço"
                          value={formData.endereco}
                          onChange={handleChange}
                        />
                        <label> Tipo de ajuda necessária</label>
                        {profileData && profileData.tags ? (
                          <select
                            className={styles.select}
                            name="tipoAjuda"
                            value={profileData.tags}
                            disabled
                          >
                            <option value="Alimentos">Alimentos</option>
                            <option value="Higiene">Higiene</option>
                            <option value="Trabalho Voluntário">
                              Ajuda voluntária
                            </option>
                          </select>
                        ) : (
                          <select
                            name="tipoAjuda"
                            value={formData.tipoAjuda}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Selecione o tipo de ajuda
                            </option>
                            <option value="Alimentos">Alimentos</option>
                            <option value="Higiene">Higiene</option>
                            <option value="Trabalho Voluntário">
                              Ajuda voluntária
                            </option>
                          </select>
                        )}
                        {formData.tipoAjuda === "Alimentos" &&
                          userType === "Doador" && (
                            <>
                              <label>Quantidade de produtos</label>
                              <select
                                name="quantidadeProdutos"
                                value={formData.quantidadeProdutos}
                                onChange={handleChange}
                                required
                              >
                                <option value="" disabled selected>
                                  Selecione a quantidade
                                </option>
                                <option value={5}>Até 5</option>
                                <option value={10}>Até 10</option>
                                <option value={20}>Até 20</option>
                                <option value="Personalizado">
                                  Personalizado
                                </option>
                              </select>
                              {formData.quantidadeProdutos ===
                                "Personalizado" && (
                                <input
                                  type="number"
                                  name="quantidadePersonalizada"
                                  placeholder="Quantidade personalizada"
                                  value={formData.quantidadePersonalizada || ""}
                                  onChange={handleChange}
                                  required
                                />
                              )}
                            </>
                          )}

                        {formData.tipoAjuda === "Higiene" &&
                          userType === "Doador" && (
                            <>
                              <label>Quantidade de produtos</label>
                              <select
                                name="quantidadeProdutos"
                                value={formData.quantidadeProdutos}
                                onChange={handleChange}
                                required
                              >
                                <option value="" disabled selected>
                                  Selecione a quantidade
                                </option>
                                <option value={5}>Até 5</option>
                                <option value={10}>Até 10</option>
                                <option value={20}>Até 20</option>
                                <option value="Personalizado">
                                  Personalizado
                                </option>
                              </select>
                              {formData.quantidadeProdutos ===
                                "Personalizado" && (
                                <input
                                  type="number"
                                  name="quantidade"
                                  placeholder="Quantidade personalizada"
                                  value={formData.quantidadePersonalizada || ""}
                                  onChange={(e) =>
                                    handleDynamicFieldChange(e, "higiene", 0)
                                  }
                                  required
                                />
                              )}
                            </>
                          )}

                        {error && <p className={styles.error}>{error}</p>}
                        <center>
                          <button
                            className={styles.btn}
                            onClick={handleNextStep}
                          >
                            Avançar
                          </button>
                        </center>
                      </>
                    )}

        <div className={styles.caixaa}>
                    {currentStep === 2 && (
                      <>
                        {formData.tipoAjuda === "Alimentos" &&
                          Array.isArray(formData.alimentosDetails) &&
                          formData.alimentosDetails.map((alimento, index) => (
                            <div key={index}>
                              <label>Tipo de alimento</label>
                              <input
                                className={styles.input}
                                type="text"
                                name="tipo"
                                placeholder="Ex: Arroz, Feijão"
                                value={alimento.tipo}
                                onChange={(e) =>
                                  handleDynamicFieldChange(
                                    e,
                                    "alimentos",
                                    index
                                  )
                                }
                              />
                              <label>Quantidade de alimento</label>
                              <input
                                className={styles.input}
                                type="number"
                                name="quantidade"
                                placeholder="Quantidade"
                                value={alimento.quantidade}
                                onChange={(e) =>
                                  handleDynamicFieldChange(
                                    e,
                                    "alimentos",
                                    index
                                  )
                                }
                              />
            
                              <button
                                className={styles.btn}
                                type="button"
                                onClick={() => removeField("alimentos", index)}
                              >
                                Remover
                              </button>
                            </div>
                          ))}
                        {formData.tipoAjuda === "Alimentos" && (
                          <button
                            className={styles.btn}
                            type="button"
                            onClick={() => addField("alimentos")}
                          >
                            Adicionar mais alimentos
                          </button>
                        )}

                        {formData.tipoAjuda === "Higiene" && (
                          <>
                            {Array.isArray(formData.higieneDetails) &&
                              formData.higieneDetails.map((higiene, index) => (
                                <div key={index}>
                                  <label>Produto de higiene</label>
                                  <input
                                    type="text"
                                    name="produto"
                                    placeholder="Produto"
                                    value={higiene.produto}
                                    onChange={(e) =>
                                      handleDynamicFieldChange(
                                        e,
                                        "higiene",
                                        index
                                      )
                                    }
                                  />
                                  <label>Marca</label>
                                  <input
                                    type="text"
                                    name="marca"
                                    placeholder="Marca"
                                    value={higiene.marca}
                                    onChange={(e) =>
                                      handleDynamicFieldChange(
                                        e,
                                        "higiene",
                                        index
                                      )
                                    }
                                  />
                                  <button
                                  
                                    className={styles.btn}
                                    type="button"
                                    onClick={() =>
                                      removeField("higiene", index)
                                    }
                                  >
                                    Remover
                                  </button>
                                </div>
                              ))}
                            <button
                              className={styles.btn}
                              type="button"
                              onClick={() => addField("higiene")}
                            >
                              Adicionar mais produtos de higiene
                            </button>
                          </>
                        )}

                        {formData.tipoAjuda === "Trabalho Voluntário" && (
                          <>
                            {Array.isArray(formData.voluntariaDetails) &&
                              formData.voluntariaDetails.map(
                                (
                                    voluntario, 
                                    index
                                ) => (
                                  <div key={index}>
                                    <label>Horas de Trabalho Voluntário</label>
                                    <input
                                      className={styles.input}
                                      type="number"
                                      name="horas"
                                      placeholder="Horas"
                                      value={voluntario.horas}
                                      onChange={(e) =>
                                        handleDynamicFieldChange(
                                          e,
                                          "Trabalho Voluntário",
                                          index
                                        )
                                      }
                                    />
                                    <label>Habilidades</label>
                                    <input
                                      className={styles.input}
                                      type="text"
                                      name="habilidades"
                                      placeholder="Habilidades"
                                      value={voluntario.habilidades}
                                      onChange={(e) =>
                                        handleDynamicFieldChange(
                                          e,
                                          "Trabalho Voluntário",
                                          index
                                        )
                                      }
                                    />
                                    <button
                                    className={styles.btn}
                                      type="button"
                                      onClick={() =>
                                        removeField(
                                          "Trabalho Voluntário",
                                          index
                                        )
                                      }
                                    >
                                      Remover
                                    </button>
                                  </div>
                                )
                              )}
                            <button
                            className={styles.btn}
                              type="button"
                              onClick={() => addField("Trabalho Voluntário")}
                            >
                              Adicionar mais voluntários
                            </button>
                          </>
                        )}
                <div className={styles.botoes}>
                    <button className={styles.btn1} onClick={handleSubmit}>
                          Confirmar e Enviar
                        </button>
                        <button
                          className={styles.btn1}
                          onClick={handlePreviousStep}
                        >
                          Voltar
                        </button>
                </div>
                        
                      </>
                    )}
            </div>

                    {currentStep === 3 && (
                      <div className={styles.confirmationMessage}>
                        <h3>Obrigado por sua solicitação!</h3>
                        <p>Entraremos em contato em breve.</p>
                        <button className={styles.bnt} onClick={closeModal}>
                          Fechar
                        </button>
                      </div>
                    )}
                  </div>

                  <div className={styles.modalRight}>
                    {currentStep === 1 && (
                      <p className={styles.texto}>
                        <h1 className={styles.estiloh1}>
                          Vamos construir um futuro melhor juntos
                        </h1>
                        <p className={styles.espaco}></p>
                        <div className={styles.texto2}>
                          Nosso compromisso é caminhar ao seu lado, oferecendo
                          apoio e novas oportunidades para que você possa
                          alcançar um futuro mais seguro e cheio de
                          possibilidades.
                          <p></p>
                          Estamos aqui para apoiar você e ajudar a construir um
                          futuro mais seguro e promissor.
                        </div>
                      </p>
                    )}
                    {currentStep === 2 && (
                      <p>
                        Por favor, confirme se as informações fornecidas estão
                        corretas antes de enviar.
                      </p>
                    )}
                    {currentStep === 3 && (
                      <p>
                        Agradecemos por confiar em nossa plataforma para
                        ajudá-lo. Nossa equipe está analisando sua solicitação.
                      </p>
                    )}

                    <div className={styles.modalHeader}>
                      <span className={styles.close} onClick={closeModal}>
                        ×
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.container1}>
              <div className={styles.content2}>
                <div className={styles.contentText2}>
                  <h2 className={styles.estiloh2}> Sobre a organização</h2>
                  <br />
                  <h4>{profileData.organizacao}</h4>
                  <br className={styles.espaco} />
                  <br />
                  <h2 className={styles.estiloh2}> Palavras de apoio</h2>
                  <br />
                  <h3 className={styles.estilouser}>user.name</h3>
                  <br />
                  <h4 className={styles.estiloh4}>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eu eleifend nisl. Phasellus libero justo, ultricies
                    nec mauris a, congue iaculis eros. Aenean egestas nisl in
                    quam vehicula,{" "}
                  </h4>
                </div>
              </div>

              <div className={styles.caixa}>
                {profileData.localizacao ||
                profileData.website ||
                profileData.facebook ||
                profileData.instagram ? (
                  <div className={styles.contentText3}>
                    <h2 className={styles.estiloh2}>Contato</h2>
                    <br />
                    <h5 className={styles.estiloh5}>
                      <ul>
                        {profileData.localizacao && (
                          <li className={styles.espacolista}>
                            <div className={styles.icon}>
                              <img src={localizacao} alt="local" />
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
                              <img src={website} alt="web" />
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
                              <img src={facebook} alt="face" />
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
                              <img src={instagram} alt="insta" />
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
                    Infelizmente a ONG ainda não adicionou nenhum meio de
                    contato.
                  </div>
                )}

                <div className={styles.contentText4}>
                  <img
                    src={fotoo}
                    alt="fotoplaceholderpraad"
                    className={styles.imgg}
                  />
                </div>
              </div>
            </div>

            <div className={styles.container2}>
              <div className={styles.content3}>
                {profileData.fotoSituacao1 && (
                  <div>
                    <img
                      className={styles.imggg}
                      src={profileData.fotoSituacao1 || fotoo}
                      alt="foto"
                    />
                  </div>
                )}
                {profileData.fotoSituacao2 && (
                  <div>
                    <img
                      className={styles.imggg}
                      src={profileData.fotoSituacao2 || fotoo}
                      alt="foto"
                    />
                  </div>
                )}
                {profileData.fotoSituacao3 && (
                  <div>
                    <img
                      className={styles.imggg}
                      src={profileData.fotoSituacao3 || fotoo}
                      alt="foto"
                    />
                  </div>
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
