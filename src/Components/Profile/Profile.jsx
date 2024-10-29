import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MeuPerfil from './MeuPerfil';
import EditProfile from './EditProfile';
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
                path="editarperfil" 
                element={
                    <ProtectedRoute>
                        <EditProfile />
                    </ProtectedRoute>
                } 
            />
        </Routes>
    );
};

export default Profile;
