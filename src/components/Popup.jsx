import React, { useState, useEffect } from 'react';
import './Popup.scss';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica se o popup foi fechado nesta sessão
    const popupClosed = sessionStorage.getItem("popupClosed");

    if (!popupClosed && window.innerWidth <= 768) {
      setIsOpen(true); // Abre o popup apenas se não foi fechado e a tela está em modo mobile
    }

    // Função para controlar a visibilidade do popup com base no tamanho da janela
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Não exibe o popup em tamanhos de tela maiores que 768px
      } else if (!sessionStorage.getItem("popupClosed")) {
        setIsOpen(true); // Exibe o popup apenas se não foi fechado anteriormente na sessão
      }
    };

    // Adiciona listeners para redimensionamento
    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Adiciona ou remove a classe 'active-popup' do body com base no estado do popup
    if (isOpen) {
      document.body.classList.add("active-popup");
    } else {
      document.body.classList.remove("active-popup");
    }
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false); // Fecha o popup
    sessionStorage.setItem("popupClosed", "true"); // Marca o popup como fechado na sessão atual
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