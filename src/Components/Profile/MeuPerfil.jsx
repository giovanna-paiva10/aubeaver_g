import React, { useState, useEffect } from 'react';
import { auth, firestore } from '../../firebase'; 
import { getDoc, doc } from 'firebase/firestore';

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

    return (
        <form>
            {userDetails ? (
                <>
                    <p></p>
                    {userDetails.fotoPerfil && (
                        <img src={userDetails.fotoPerfil} alt="Foto de Perfil" />
                    )}
                    <p></p>
                    {userType === "Usuário" ? (
                        <>
                            <p>Olá, {userDetails.nome}</p>
                            <p>Sua história: {userDetails.minhaHistoria}</p>
                        </>
                    ) : userType === "Ong" ? (
                        <>
                            <h1>Página de Perfil da ONG</h1>
                            <p>Nome da ONG: {userDetails.nome}</p>
                            <p>Missão: {userDetails.missao}</p>
                            <p>Contato: {userDetails.contato}</p>
                        </>
                    ) : null}
                    <button type="button" onClick={handleEditProfile}>Editar informações</button>
                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </form>
    );
};

export default MeuPerfil;
