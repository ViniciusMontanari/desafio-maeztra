import React, { useState, useEffect } from 'react';
import './Popup.scss';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificar se o popup foi fechado nesta sessão
    const popupClosed = sessionStorage.getItem("popupClosed");
    if (!popupClosed) {
      // Verificar o tamanho da janela ao carregar a página
      if (window.innerWidth <= 768) {
        setIsOpen(true);
      }
    }

    // Listener para redimensionamento da janela
    const handleResize = () => {
      if (window.innerWidth <= 768 && !popupClosed) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Remover o listener no cleanup do useEffect
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-popup");
    } else {
      document.body.classList.remove("active-popup");
    }
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
    // Marcar no sessionStorage que o popup foi fechado
    sessionStorage.setItem("popupClosed", "true");
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