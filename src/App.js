import React from 'react';
import './App.css';
import { Header } from './header/header.js';
import { About } from './about/about.js';
import { Routes, Route } from "react-router-dom";
import { Catalogo } from './catalogo/catalogo';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<About />} />
        {/* Header links */}
        <Route path="/about" element={<About />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </div>
  );
}

export default App;
