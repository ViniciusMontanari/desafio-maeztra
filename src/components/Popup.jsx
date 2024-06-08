import React, { useState, useEffect } from 'react';
import './Popup.scss';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Exibir o pop-up ao carregar a página
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <span className="popup-close" onClick={closePopup}>FECHAR</span>
        <div className="popup-content">
          <img src='https://i.ibb.co/m5jFXjh/newsletter-mail-icon.png' alt='envelope' />
          <h2>Bem-vindo!</h2>
          <p>Receba em Primeira mão<br/>desconto e ofertas exclusivas</p>
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="button">
            ENVIAR <img src='https://i.ibb.co/tJq8zVZ/image.png' alt='aviao' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;