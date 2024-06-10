import React, { useState } from "react";
import "./BottomInfoMenu.scss";

const BottomInfoMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);

  // Itens dos menus
  const menuItems = {
    "Informações": [
      "Quem somos",
      "Prazo de Envio",
      "Trocas e Devoluções",
      "Promoções e Cupons",
    ],
    "Minha Conta": [
      "Minha Conta",
      "Meus Pedidos",
      "Cadastre-se",
    ],
    "Onde nos Encontrar": [
      "Lojas",
      "Endereço",
    ],
  };

  const toggleMenu = (menu) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <div className="menu-list">
      {/* Menu para dispositivos móveis */}
      <div className="bottom-menu-mobile">
        {Object.keys(menuItems).map((title, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-header" onClick={() => toggleMenu(title)}>
              <span className="menu-text">{title}</span>
              <span className="menu-icon">
                {openMenu === title ? "-" : "+"}
              </span>
            </div>
            <div className={`menu-content ${openMenu === title ? "open" : ""}`}>
              {menuItems[title].map((item, idx) => (
                <div className="menu-subitem" key={idx}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Menu para desktop */}
      <div className="bottom-menu-desktop">
        <div className="menu-item-1">
          <div className="menu-header">
            <span className="menu-text">Informações</span>
          </div>
          <div className="menu-content-1">
            <div className="menu-subitem-1"><a href="#quemsomos">Quem somos</a></div>
            <div className="menu-subitem-1"><a href="#prazo">Prazo de Envio</a></div>
            <div className="menu-subitem-1"><a href="#trocas">Trocas e Devoluções</a></div>
            <div className="menu-subitem-1"><a href="#promo">Promoções e Cupons</a></div>
          </div>
        </div>
        <div className="menu-item-2">
          <div className="menu-header">
            <span className="menu-text">Minha Conta</span>
          </div>
          <div className="menu-content-2">
            <div className="menu-subitem-2"><a href="#conta">Minha Conta</a></div>
            <div className="menu-subitem-2"><a href="#pedidos">Meus Pedidos</a></div>
            <div className="menu-subitem-2"><a href="#cadastro">Cadastre-se</a></div>
          </div>
        </div>
        <div className="menu-item-3">
          <div className="menu-header">
            <span className="menu-text">Onde nos Econtrar</span>
          </div>
          <div className="menu-content-3">
            <div className="menu-subitem-3"><a href="#lojas">Lojas</a></div>
            <div className="menu-subitem-3"><a href="#endereco">Endereços</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomInfoMenu;