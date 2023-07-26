import React from "react";
import { Link } from "react-router-dom";


const Navegacion = () => {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/libros'>Libros</Link>
          </li>
          <li>
            <Link to='/clientes'>Clientes</Link>
          </li>
          <li>
            <Link to='/autores'>Autores</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navegacion;