// Clientes.js
import React from 'react';
import clientesData from '../DataJson/clientes.json';

const Clientes = () => {
  return (
    <div className='clientes-container'>
      {clientesData.map((cliente) => (
        <div key={cliente._id} className='cliente-card'>
          <h2>{cliente.nombre}</h2>
          <p>Correo electrónico: {cliente.correo}</p>
          <p>Teléfono: {cliente.telefono}</p>
        </div>
      ))}
    </div>
  );
};

export default Clientes;
