import React, { useState, useEffect } from 'react';
import './PopupDesktop.scss';

const PopupDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem("popupClosed");

    if (!popupClosed && window.innerWidth >= 769) {
      setIsOpen(true);
    }

    const handleResize = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false);
      } else if (!sessionStorage.getItem("popupClosed")) {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

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
    sessionStorage.setItem("popupClosed", "true");
  };

  return (
    <>
      {isOpen && (
        <div className="popup-desktop-overlay">
          <div className="popup-desktop-container">
            <img className='popup-desktop-img' src='https://i.ibb.co/M140hgM/image-4.png' alt='popup img' />
            <div className="popup-desktop">
              <div className="popup-desktop-close-container">
                <span className="popup-desktop-close" onClick={closePopup}>FECHAR</span>
              </div>
              <div className="popup-desktop-content">
                <img className='carta' src='https://i.ibb.co/m5jFXjh/newsletter-mail-icon.png' alt='envelope' />
                <h2>Bem Vindo à MAEZTRA</h2>
                <p>Receba em Primeira mão<br/>desconto e ofertas exclusivas</p>
                <input type="email" placeholder="Digite seu e-mail" />
                <button className='popup-desktop-btn' type="button">
                  ENVIAR <img src='https://i.ibb.co/tJq8zVZ/image.png' alt='aviao' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupDesktop;