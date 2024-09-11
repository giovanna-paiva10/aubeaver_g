import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';



const Login = () => {


    return (
        <Routes> 
            <Route path='/' element={<LoginForm/>}/>
            <Route path='criar' element ={<LoginCreate/>}/>
        </Routes>
    )

};

export default Login