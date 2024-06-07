// src/components/Header.js
import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="logo">Logo</div>
    <nav className="nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
    <div className="icons">
      <i className="search-icon">🔍</i>
      <i className="profile-icon">👤</i>
    </div>
  </header>
);

export default Header;