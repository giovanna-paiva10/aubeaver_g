import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileCreated from './ProfileCreated';


const Profile = () => {

    return (
        <>

            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='perfilcriado' element={<ProfileCreated/>}/>
            </Routes>

        </>
    )
};

export default Profile;