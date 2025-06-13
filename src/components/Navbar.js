// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">Formulário</NavLink>
        </li>
        <li>
          <NavLink to="/list" activeclassname="active">Lista de Itens</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;