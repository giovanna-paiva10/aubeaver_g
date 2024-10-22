import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase'; // Certifique-se de que isso está correto
import { doc, getDoc } from 'firebase/firestore';

const ProfileDetails = () => {
    const { id } = useParams(); // Capturando o ID da URL
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!id) return; // Verifica se o ID está definido

            try {
                const docRef = doc(firestore, 'Ongs', id); // Substitua 'Ongs' pelo nome correto da coleção
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
    }, [id]); // O ID é uma dependência, se mudar, a busca será reexecutada

    return (
        <div>
            {profileData ? (
                <div>
                    <h1>{profileData.nome}</h1>
                    <p>Email: {profileData.email}</p>
                    {/* Adicione mais campos conforme necessário */}
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default ProfileDetails;
