import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Certifique-se de que o caminho está correto

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <p>Carregando...</p>; // Mostra algo enquanto o estado de autenticação é carregado
    }

    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
