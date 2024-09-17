import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginLostPassword from './LoginLost';
import LoginResetPassword from './LoginResetPassword';



const Login = () => {


    return (
        <>
        <Routes> 
            <Route path='/' element={<LoginForm/>}/>
            <Route path='criar' element ={<LoginCreate/>}/>
            <Route path='perdeu' element = {<LoginLostPassword/>}/>
            <Route path='reset' element = {<LoginResetPassword/>}/>
        </Routes>
        </>
    )

};

export default Login