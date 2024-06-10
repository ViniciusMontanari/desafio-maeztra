import React from 'react';
import './DesktopMenu.scss';

const DesktopMenu = () => {
  return (
    <section className="desktop-menu">
        <div className="menu-container">
            <div className="desk-menu-itens">
                <div className="novidades">
                    <img src='https://i.ibb.co/bF7127c/novidades.png' alt='novidades' />
                    <p className='novidades'>Novidades</p>
                </div>
                <p>Vestidos</p>
                <p>Roupas</p>
                <p>Sapatos</p>
                <p>Lingerie</p>
                <p>Acessórios</p>
                <p>OUTLET</p>
            </div>
        </div>
    </section>
  );
};

export default DesktopMenu;