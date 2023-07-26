// Libros.js
import React, { useState } from 'react';
import librosData from '../DataJson/libros.json';
import MenuGeneros from './MenuGeneros';

const Libros = () => {
  const [filtroGenero, setFiltroGenero] = useState(null);

  // Obtener una lista de géneros únicos de los libros
  const generosUnicos = [...new Set(librosData.map((libro) => libro.genero))];

  // Filtrar la lista de libros por género seleccionado
  const librosFiltrados = filtroGenero
    ? librosData.filter((libro) => libro.genero === filtroGenero)
    : librosData;

  return (
    <div className='libros-container'>
      <MenuGeneros generos={generosUnicos} filtroPorGenero={setFiltroGenero} />
      <div className='lista-libros'>
        {librosFiltrados.map((libro) => (
          <div key={libro._id} className='libro-card'>
            <img
              src={libro.imagen}
              alt={libro.titulo}
              style={{
                width: '150px',
                height: '200px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <h2>{libro.titulo}</h2>
            <p>Autor: {libro.autor}</p>
            <p>Género: {libro.genero}</p>
            <p>Año de publicación: {libro.anio_publicacion}</p>
            <p>Editorial: {libro.editorial}</p>
            <p>ISBN: {libro.isbn}</p>
            <p>Cantidad disponible: {libro.cantidad_disponible}</p>
            <p>Precio: {libro.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Libros;
