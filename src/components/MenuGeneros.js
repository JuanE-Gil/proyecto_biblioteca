// MenuGeneros.js
import React from 'react';


const MenuGeneros = ({ generos, filtroPorGenero }) => {
  return (
    <aside className='menu-generos'>
      <h2>Géneros</h2>
      <ul>
        {generos.map((genero) => (
          <li key={genero} onClick={() => filtroPorGenero(genero)}>
            {genero}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MenuGeneros;
