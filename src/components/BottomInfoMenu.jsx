import React from "react";

import "./BottomInfoMenu.scss";

const BottomInfoMenu = () => {
    const titles = [
      'Informações',
      'Minha Conta',
      'Onde nos Encontrar'
    ];
  
    return (
      <div className="menu-list">
        {titles.map((title, index) => (
          <div className="menu-item" key={index}>
            <span className="menu-text">{title}</span>
            <span className="menu-icon">+</span>
          </div>
        ))}
      </div>
    );
  };

export default BottomInfoMenu;
