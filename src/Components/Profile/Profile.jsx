import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileCreated from './ProfileCreated';
import ProfileSearch from './ProfileSearch';


const Profile = () => {

    return (
        <>

            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='perfilcriado' element={<ProfileCreated/>}/>
                <Route path='perfilpesquisar' element={<ProfileSearch/>} />
            </Routes>

        </>
    )
};

export default Profile;