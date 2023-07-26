import React from 'react';
import autoresData from '../DataJson/Autores.json';

const Autores = () => {
  return (
    <div className='autores-container'>
      {autoresData.map((autor) => (
        <div key={autor._id} className='autor-card'>
          <img src={autor.foto} alt={autor.nombre} />
          <div className='autor-info'>
            <h2>{autor.nombre}</h2>
            <p>Nacionalidad: {autor.nacionalidad}</p>
            <p>Biografía:</p>
            <p>{autor.biografia}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Autores;
