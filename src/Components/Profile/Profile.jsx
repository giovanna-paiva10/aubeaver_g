import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PerfilCriado from './PerfilCriado';




const Profile = () => {


    return (
        <>
        <Routes> 
            <Route path='/' element={<PerfilCriado/>}/>
        </Routes>
        </>
    )

};

export default Profile