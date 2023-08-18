import './App.scss';
import { Routes, Route } from 'react-router-dom'
import  Layout from './components/Layout'
import  Home from './components/Home'
import React, { useEffect } from 'react';
import About from './components/About';

function App() {
  useEffect(() => {
    document.title = 'Imali'; 
}, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
