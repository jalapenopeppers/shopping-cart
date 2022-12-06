import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navigation">
      <div className="company-name">V I S I O</div>
      <ul className="buttons-list">
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="">Cart</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;