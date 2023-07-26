import React from 'react';
import './App.css';
import Libros from './components/libros';
import Navegacion from './components/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Clientes from './components/Cliente';
import Autores from './components/Autores';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Bienvenidos a la librería</h1>
        <Navegacion />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/libros' element={<Libros />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/autores' element={<Autores />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
