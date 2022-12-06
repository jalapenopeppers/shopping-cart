import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Home.css'
import NavBar from './NavBar';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="home-grid-container">
        <div className="title-container">
          <h1 className="title-text">V I S I O</h1>
          <h4>The future lies with light</h4>
        </div>
        <div className="img-container">
          temp text for image
        </div>
      </div>
    </div>
  );
}

export default Home;