import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileSearch from './ProfileSearch';


const Search = () => {

    return (
        <>
    
            <Routes>
                <Route path='/' element={<ProfileSearch/>}/>
                <Route path='perfilpesquisar' element={<ProfileSearch/>} />
            </Routes>

        </>
    )
};

export default Search;