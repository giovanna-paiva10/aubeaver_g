import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MeuPerfil from './MeuPerfil';
import ProfileCreated from './ProfileCreated';
import ProtectedRoute from '../Login/ProtectedRoute'; // Importe a rota protegida

const Profile = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <ProtectedRoute>
                        <MeuPerfil />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="meuperfil" 
                element={
                    <ProtectedRoute>
                        <MeuPerfil />
                    </ProtectedRoute>
                } 
            />
            <Route 
                path="perfilcriado" 
                element={
                    <ProtectedRoute>
                        <ProfileCreated />
                    </ProtectedRoute>
                } 
            />
        </Routes>
    );
};

export default Profile;
