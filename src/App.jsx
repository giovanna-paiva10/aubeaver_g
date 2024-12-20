import React, {useEffect, useState} from 'react';
import { Routes, Route, Router, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Notificacoes from './Components/Notificacoes.jsx';
import { auth } from './firebase.js';
import Search from './Components/Search/Search.jsx';
import Mainbody from './Components/Mainbody.jsx';


const App = () => {
  const [user, setUser] = useState();
  useEffect(()=>{
    //Verifica se o usuário está logado
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  })
  return (
  <> 
   <BrowserRouter>
    <Header />
    <Mainbody />
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/notificacoes' element={<Notificacoes/>}/>
        <Route path='/login/*' element={<Login/>}/>
        <Route path='/profile/*' element={<Profile/>}/>
        <Route path='/search/*' element={<Search/>}/>
      </Routes>
  
      <Footer />
    </BrowserRouter>

  

  </> 
  )
};

export default App;
