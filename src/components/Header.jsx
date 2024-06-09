import React, { useState } from 'react';

import './Header.scss';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleDrawer}>
        <span className="hamburger-icon"></span>
      </button>
      <div className="logo">
        <img src="https://i.ibb.co/StZVfCx/logo-maeztra-novo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="O que Você Busca?" 
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>
      <div className="menu-itens">
        <div className="user">
          <img src='https://i.ibb.co/5LWhkYX/user.png' alt='user'/>
          <p>Minha Conta</p>
        </div>
        <div className="heart">
          <img src='https://i.ibb.co/T8VCvG9/heart.png' alt='heart'/>
          <p>Favoritos</p>
        </div>
        <div className="cart">
          <img src='https://i.ibb.co/PzKkn7C/bag.png' alt='bag'/>
          <p>Meu Carrinho</p>
        </div>
      </div>
      <div className="header-icons">
        <img className="header-icon" src='https://i.ibb.co/RpLgrvq/lupa.png' alt='lupa'/>
        <img className="header-icon" src='https://i.ibb.co/Nnc7rS7/bag2.png' alt='bag'/>
      </div>
      <div className={`overlay ${drawerOpen ? 'visible' : ''}`} onClick={closeDrawer}></div>
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeDrawer}>&times;</button>
        <ul className="drawer-list">
        <li className="drawer-item"><a href="#home">Novidades</a></li>
          <li className="drawer-item"><a href="#about">Vestidos</a></li>
          <li className="drawer-item"><a href="#services">Roupas</a></li>
          <li className="drawer-item"><a href="#contact">Sapatos</a></li>
          <li className="drawer-item"><a href="#contact">Lingerie</a></li>
          <li className="drawer-item"><a href="#contact">Acessórios</a></li>
          <li className="drawer-item"><a href="#contact">OUTLET</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;