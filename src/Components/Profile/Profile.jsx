import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MeuPerfil from './MeuPerfil';
import EditProfile from './EditProfile';
import EditProfileONG from './EditProfileOng';
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
            <Route 
                path="editarperfilong" 
                element={
                    <ProtectedRoute>
                        <EditProfileONG />
                    </ProtectedRoute>
                } 
            />
        </Routes>
    );
};

export default Profile;
