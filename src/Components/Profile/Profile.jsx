import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MeuPerfil from './MeuPerfil';
import ProfileCreated from './ProfileCreated';
import ProfileSearch from './ProfileSearch';


const Profile = () => {

    return (
        <>
    
            <Routes>
                <Route path='/' element={<MeuPerfil/>}/>
                <Route path='meuperfil' element={<MeuPerfil/>}/>
                <Route path='perfilcriado' element={<ProfileCreated/>}/>
                <Route path='perfilpesquisar' element={<ProfileSearch/>} />
            </Routes>

        </>
    )
};

export default Profile;