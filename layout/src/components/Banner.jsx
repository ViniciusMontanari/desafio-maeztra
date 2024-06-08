// src/components/Banner.js
import React from 'react';
import './Banner.scss';

const Banner = () => (
  <section className="banner">
    <img className='left-arrow' src='https://i.ibb.co/jvRC9RP/icon-prev.png' alt='left arrow' />
    <img className='banner-img' src="https://i.imgur.com/ftECh3G.png" alt="Banner" />
    <div className="content">
      <div className='banner-title'>
        <h1>Promoções de Outono</h1>
      </div>
      <div className='banner-text'>
        <p>Confira os melhores looks para combinar com você nesse Outono</p>
      </div>
      <button>Conferir</button>
    </div>
    <img className='right-arrow' src='https://i.ibb.co/wyXgrCT/icon-next.png' alt='right arrow' />
  </section>
);

export default Banner;