import React, { useState, useEffect } from 'react';
import './Popup.scss';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(true);
      }
    };

    handleResize(); // Verifique o tamanho da janela ao carregar a página
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('active-popup');
    } else {
      document.body.classList.remove('active-popup');
    }
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="popup-close-container">
              <span className="popup-close" onClick={closePopup}>FECHAR</span>
            </div>
            <div className="popup-content">
              <img className='carta' src='https://i.ibb.co/m5jFXjh/newsletter-mail-icon.png' alt='envelope' />
              <h2>Bem Vindo à MAEZTRA</h2>
              <p>Receba em Primeira mão<br/>desconto e ofertas exclusivas</p>
              <input type="email" placeholder="Digite seu e-mail" />
              <button className='popup-btn' type="button">
                ENVIAR <img src='https://i.ibb.co/tJq8zVZ/image.png' alt='aviao' />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;