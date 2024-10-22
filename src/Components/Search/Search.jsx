import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileSearch from './ProfileSearch';
import ProfileDetails from './ProfileDetails';


const Search = () => {

    return (
        <>
    
            <Routes>
                <Route path='/' element={<ProfileSearch/>}/>
                <Route path='perfilpesquisar' element={<ProfileSearch/>} />
                <Route path='/:id' element={<ProfileDetails/>} />

            </Routes>

        </>
    )
};

export default Search;