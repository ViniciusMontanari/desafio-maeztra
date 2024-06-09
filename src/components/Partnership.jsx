import React from 'react';
import mockPartnership from './mockPartnership';
import Slider from 'react-slick';

import './Partnership.scss';

const Partnership = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="partner-list">
      <h1 className='partner-list-title'>Marcas Parceiras</h1>

      {/* Slider para dispositivos móveis */}
      <div className="partner-mobile-slider">
        <Slider {...settings}>
          {mockPartnership.map((partner, index) => (
            <div className="partner" key={index}>
              <img src={partner.image} alt={partner.name} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Lista estática para desktop */}
      <div className="static-partner-list">
        {mockPartnership.map((partner, index) => (
          <div className="partner" key={index}>
            <img src={partner.image} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnership;