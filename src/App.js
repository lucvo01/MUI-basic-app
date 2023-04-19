import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Layout from './pages/Layout.js';
import Login from './pages/Login.js';

function App() {

  return (
      <Routes path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route index element={<Login/>}/>

      </Routes>
  );
}

export default App;
