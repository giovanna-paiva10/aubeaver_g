import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeuPerfil from './MeuPerfil';
import ProfileCreated from './ProfileCreated';


const Profile = () => {

    return (
        <>
    
            <Routes>
                <Route path='/' element={<MeuPerfil/>}/>
                <Route path='meuperfil' element={<MeuPerfil/>}/>
                <Route path='perfilcriado' element={<ProfileCreated/>}/>
            </Routes>

        </>
    )
};

export default Profile;