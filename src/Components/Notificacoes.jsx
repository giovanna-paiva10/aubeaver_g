import React, { useState, useEffect } from "react";
import { auth, firestore } from "../firebase";
import { setDoc, doc, getDoc, deleteDoc, arrayUnion, collection } from "firebase/firestore";
import styles from "./Notificacoes.module.css";
import { v4 as uuidv4 } from "uuid";
import iconpe from '../assets/iconeeditar.png';
import iconpe2 from '../assets/iconeeditar2.png.png';

const Notificacoes = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [userType, setUserType] = useState(null);
  const [user, setUser] = useState(null);  

  const fetchUserData = async (user) => {
    try {
      const userDocRef = doc(firestore, "Usuários", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        setUserDetails(userDocSnap.data());
        setUserType("Usuário");
        setUser(user);  
        fetchNotifications(user.uid);
        return;
      }

      const ongDocRef = doc(firestore, "Ongs", user.uid);
      const ongDocSnap = await getDoc(ongDocRef);

      if (ongDocSnap.exists()) {
        setUserDetails(ongDocSnap.data());
        setUserType("Ong");
        setUser(user); 
        fetchNotifications(user.uid);
        return;
      }

      console.log("Usuário não encontrado em 'Usuários' ou 'Ongs'");
      await auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      setError(error.message);
      console.error("Erro ao buscar dados do usuário:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotifications = async (userId) => {
    try {
      const notificationRef = doc(firestore, "Notificações", userId);
      const notificationDoc = await getDoc(notificationRef);

      if (notificationDoc.exists()) {
        const data = notificationDoc.data();
        console.log("Dados de notificação:", data);
        console.log('userType:', userType);

        if (data && Array.isArray(data.notifications)) {
          setNotifications(data.notifications);
        } else {
          setNotifications([]);
        }
      } else {
        setNotifications([]);
        console.log("Nenhuma notificação encontrada para este usuário.");
      }
    } catch (error) {
      setError(error.message);
      console.error("Erro ao buscar notificações:", error);
    }
  };

  const handleNegarNotificacao = async (notificationId, ongId) => {
    try {
      console.log("Tentando excluir a notificação com ID:", notificationId, "para a ONG:", ongId);
  
      if (!notificationId || !ongId) {
        console.log("IDs inválidos. Não é possível excluir a notificação.");
        return;
      }
  
      const notificationRef = doc(firestore, "Notificações", ongId);
      const notificationDoc = await getDoc(notificationRef);
  
      if (notificationDoc.exists()) {
        const notificationData = notificationDoc.data();
        console.log("Documento de notificações encontrado:", notificationData);
  
        const updatedNotifications = notificationData.notifications.filter(
          (notification) => notification.uid !== notificationId
        );
  
        if (updatedNotifications.length === notificationData.notifications.length) {
          console.log("A notificação com o ID fornecido não foi encontrada.");
          return; 
        }
  
        const notificationIndex = notificationData.notifications.findIndex(
          (notification) => notification.uid === notificationId
        );
        
        const originalNotification = notificationData.notifications[notificationIndex];
        const userUid = originalNotification.senderUid;
        
        const returnMessage = {
          uid: uuidv4(),
          title: `Sua ${originalNotification.title} foi negada`,
          description: `A ${originalNotification.title} relacionada a ${originalNotification.type} foi negada pela ONG.`,
          timestamp: new Date(),
          isRead: false,
          type: `Resposta à ${originalNotification.title}`,
          senderUid: ongId,
          receiverUid: userUid, 
        };
  
        const userNotificationRef = doc(firestore, "Notificações", userUid);
        await setDoc(userNotificationRef, {
          notifications: arrayUnion(returnMessage),
        }, { merge: true });
  
        await setDoc(notificationRef, { notifications: updatedNotifications });
        console.log("Notificação excluída com sucesso!");
  
        setNotifications(updatedNotifications);
  
        if (userType === "Ong") {
          const ongRef = doc(firestore, "Ongs", ongId);
          const ongDoc = await getDoc(ongRef);
  
          if (ongDoc.exists()) {
            const ongData = ongDoc.data();
            const updatedPedidosAtuais = ongData.pedidosAtuais - 1;
  
            await setDoc(ongRef, { pedidosAtuais: updatedPedidosAtuais }, { merge: true });
            console.log("Campo 'pedidosAtuais' atualizado com sucesso!");
          } else {
            console.log("Documento da ONG não encontrado.");
          }
        }
      } else {
        console.log("Documento de notificações não encontrado para a ONG:", ongId);
      }
    } catch (error) {
      console.error("Erro ao negar notificação:", error);
    }
  };

  const handleAceitarNotificacao = async (notificationId, ongId) => {
    try {
      console.log("Tentando aceitar a notificação com ID:", notificationId, "para a ONG:", ongId);
  
      if (!notificationId || !ongId) {
        console.log("IDs inválidos. Não é possível aceitar a notificação.");
        return;
      }
  
      const notificationRef = doc(firestore, "Notificações", ongId);
      const notificationDoc = await getDoc(notificationRef);
  
      if (notificationDoc.exists()) {
        const notificationData = notificationDoc.data();
        console.log("Documento de notificações encontrado:", notificationData);
  
        const updatedNotifications = notificationData.notifications.filter(
          (notification) => notification.uid !== notificationId
        );
  
        if (updatedNotifications.length === notificationData.notifications.length) {
          console.log("A notificação com o ID fornecido não foi encontrada.");
          return;
        }
  
        const notificationIndex = notificationData.notifications.findIndex(
          (notification) => notification.uid === notificationId
        );
        
        const originalNotification = notificationData.notifications[notificationIndex];
        const userUid = originalNotification.senderUid;
        
        const returnMessage = {
          uid: uuidv4(),
          title: `Sua ${originalNotification.title} foi foi aceita`,
          description: `A ${originalNotification.title} relacionada a ${originalNotification.type} foi aceita pela ONG.`,
          timestamp: new Date(),
          isRead: false,
          type: `Resposta à ${originalNotification.title}`,
          senderUid: ongId,
          receiverUid: userUid,  
        };
  
        const userNotificationRef = doc(firestore, "Notificações", userUid); 
        await setDoc(userNotificationRef, {
          notifications: arrayUnion(returnMessage),
        }, { merge: true });
  
        await setDoc(notificationRef, { notifications: updatedNotifications });
        console.log("Notificação aceita e excluída com sucesso!");
  
        setNotifications(updatedNotifications);

        if (userType === "Ong") {
          const ongRef = doc(firestore, "Ongs", ongId);
          const ongDoc = await getDoc(ongRef);
  
          if (ongDoc.exists()) {
            const ongData = ongDoc.data();
            const updatedPedidosAtuais = ongData.pedidosAtuais + 1;  
            
            await setDoc(ongRef, { pedidosAtuais: updatedPedidosAtuais }, { merge: true });
            console.log("Campo 'pedidosAtuais' atualizado com sucesso!");
          } else {
            console.log("Documento da ONG não encontrado.");
          }
        }
      } else {
        console.log("Documento de notificações não encontrado para a ONG:", ongId);
      }
    } catch (error) {
      console.error("Erro ao aceitar notificação:", error);
    }
  };  

  const handleRemoverNotificacao = async (notificationId, userUid) => {
    try {
      const notificationRef = doc(firestore, "Notificações", userUid);
      const notificationDoc = await getDoc(notificationRef);
  
      if (notificationDoc.exists()) {
        const notificationData = notificationDoc.data();
        console.log("Documento de notificações encontrado:", notificationData);
  
        const updatedNotifications = notificationData.notifications.filter(
          (notification) => notification.uid !== notificationId
        );
  
        if (updatedNotifications.length === notificationData.notifications.length) {
          console.log("A notificação com o ID fornecido não foi encontrada.");
          return; 
        }
  
        await setDoc(notificationRef, { notifications: updatedNotifications });
        console.log("Notificação excluída com sucesso!");
  
        setNotifications(updatedNotifications);
      } else {
        console.log("Documento de notificações não encontrado para o usuário:", userUid);
      }
    } catch (error) {
      console.error("Erro ao remover notificação:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        fetchUserData(user);
      } else {
        console.log("Usuário não autenticado");
        await auth.signOut();
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  const formatDetails = (details, type) => {
    if (type === "Alimentos" && Array.isArray(details)) {
      if (details.length === 1) {
        const item = details[0];
        return `${item.tipo} - ${item.quantidade}`;
      }

      return details.map((item, index) => {
        return `Item ${index + 1}: ${item.tipo} - ${item.quantidade}`;
      }).join(", ");
    }

    if (type === "Higiene" && Array.isArray(details)) {
      return details.map((item, index) => {
        return `Item ${index + 1}: ${item.produto} - ${item.quantidade}`;
      }).join(", ");
    }

    if (type === "Trabalho Voluntário" && Array.isArray(details)) {
      if (details.length === 1) {
        const item = details[0];
        return `Habilidades: ${item.habilidades}, Horas: ${item.horas}`;
      }

      return details.map((item, index) => {
        return `Item ${index + 1}: Habilidades: ${item.habilidades}, Horas: ${item.horas}`;
      }).join(", ");
    }

    return details || "Não informado";
  };

  return (
    <body id={styles.borda}>
      <div className={styles.topo}>

      </div>
<div      className={styles.notdiv}>
            <h3 className={styles.estiloh3}>Notificacoes</h3>
            <h4 className={styles.estiloh4}>Encontre a ONG que você deseja</h4>
          </div>
          <div className={styles.cont}>
            <div className={styles.cont1}>
              <div className={styles.bloco}>
             
              <div className={styles.seup}>
                        <div className={styles.texto}>
                        <div className={styles.contimg}>
                            <img src={iconpe2} alt="Icon Usuario" className={styles.iconpe} />
                            <label className={styles.titp}>Nome_Usuario</label>
                        </div>
                        </div>
                       
                    </div>
                    <div className={styles.itpt}>
                    <div className={styles.itens}>
                         <div className={styles.itens1}>
                         <div>1 Arroz</div>
                         <div>1 Feijão</div>
                         <div className={styles.itlt}>1 Macarrão</div>
                          </div>
                       
                          {/* 
<div className={styles.itens2}>
  1 Açúcar
  1 Farinha de trigo
  1 Sal
</div>
<div className={styles.itens3}>
  1 Lentilha
  1 Azeite
  1 Molho de Tomate
</div>
<div className={styles.itens4}>
  1 Farinha de Mandioca
  1 Leite em pó
  1 Leite líquido
</div>
*/}
                        </div>
                        </div>
                        
                    <div className={styles.tipo}>
                          Personalizado (3 Itens)
                        </div>
                        <div className={styles.mais}>
                          Ver mais...
                        </div>
                        
                       
              </div>
            </div>
          </div>
    <div className={styles.notifications}>
      <h2>Notificações</h2>
      {notifications.length > 0 ? (
      notifications.map((notification, index) => (
        <div key={index} className={styles.notificationItem}>
          <h3>{notification.title}</h3>
          <p>{notification.description}</p>
          <p>{new Date(notification.timestamp.seconds * 1000).toLocaleString()}</p>
          
          <div>
            <h4>Detalhes do Tipo de Ajuda</h4>
            <p><strong>Tipo de Ajuda:</strong> {notification.type}</p>
            <p><strong>Nome:</strong> {notification.nomeUser}</p>
            <p><strong>Email:</strong> {notification.email}</p>
            <p><strong>Telefone:</strong> {notification.telefone}</p>
            <p><strong>Endereço:</strong> {notification.endereco}</p>

            {notification.type === "Alimentos" && notification.alimentosDetails && (
              <div>
                <h4>Detalhes de Alimentos</h4>
                <p>{formatDetails(notification.alimentosDetails, "Alimentos")}</p>
              </div>
            )}
            {notification.type === "Higiene" && notification.higieneDetails && (
              <div>
                <h4>Detalhes de Higiene</h4>
                <p>{formatDetails(notification.higieneDetails, "Higiene")}</p>
              </div>
            )}
            {notification.type === "Trabalho Voluntário" && notification.voluntariaDetails && (
              <div>
                <h4>Detalhes do Trabalho Voluntário</h4>
                <p>{formatDetails(notification.voluntariaDetails, "Trabalho Voluntário")}</p>
              </div>
            )}
          </div>

            <div className={styles.notificationFooter}>
            {console.log('userType:', notification.title)}
          
          {userType === "Ong"  && notification.title === "Doação" ? (
            <>
              <button onClick={() => handleAceitarNotificacao(notification.uid, user.uid, notification.title)}>
              Aceitar Doação
              </button>

              <button onClick={() => handleNegarNotificacao(notification.uid, user.uid, notification.title)}>
                Negar
              </button>
            </>
          ) : userType === "Ong"  && notification.title === "Requisição" ? (
            <>
              <button onClick={() => handleAceitarNotificacao(notification.uid, user.uid)}>
              Aceitar Solicitação
              </button>

              <button onClick={() => handleNegarNotificacao(notification.uid, user.uid)}>
                Negar
              </button>
            </>
          ) : null}

          {userType === "Usuário" && (
            <button 
              onClick={() => handleRemoverNotificacao(notification.uid, user.uid)}
            >
              Compreendido
            </button>
            
          )}
        </div>
        </div>
      ))
    ) : (
      <p>Sem notificações.</p>
    )}
    </div>
    <div></div>
    </body>
  );
};

export default Notificacoes;
