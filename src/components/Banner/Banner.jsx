// src/components/Banner.js
import React, { useState } from 'react';
import './Banner.scss';

const Banner = () => {
  const banners = [
    {
      src: "https://i.imgur.com/ftECh3G.png",
      title: "Promoções de Outono",
      text: "Confira os melhores looks para combinar com você nesse Outono",
    },
    {
      src: "https://i.imgur.com/ftECh3G.png",
      title: "Promoções de Inverno",
      text: "Descubra as tendências para aquecer seu inverno",
    },
    // Adicione mais objetos de banner conforme necessário
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const handlePrevClick = () => {
    setSlideDirection('left');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentBanner((prevBanner) => (prevBanner === 0 ? banners.length - 1 : prevBanner - 1));
      setIsSliding(false);
    }, 500);
  };

  const handleNextClick = () => {
    setSlideDirection('right');
    setIsSliding(true);
    setTimeout(() => {
      setCurrentBanner((prevBanner) => (prevBanner === banners.length - 1 ? 0 : prevBanner + 1));
      setIsSliding(false);
    }, 500);
  };

  return (
    <section className="banner">
      <img
        className="left-arrow"
        src="https://i.ibb.co/jvRC9RP/icon-prev.png"
        alt="left arrow"
        onClick={handlePrevClick}
      />
      <div className={`banner-img-container ${isSliding ? `slide-${slideDirection}` : ''}`}>
        <img className="banner-img" src={banners[currentBanner].src} alt="Banner" />
      </div>
      <div className="content">
        <div className="banner-title">
          <h1>{banners[currentBanner].title}</h1>
        </div>
        <div className="banner-text">
          <p>{banners[currentBanner].text}</p>
        </div>
        <button>Conferir</button>
      </div>
      <img
        className="right-arrow"
        src="https://i.ibb.co/wyXgrCT/icon-next.png"
        alt="right arrow"
        onClick={handleNextClick}
      />
    </section>
  );
};

export default Banner;