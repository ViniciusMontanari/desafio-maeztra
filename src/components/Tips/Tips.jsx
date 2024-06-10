import React from 'react';
import mockTips from './mockTips';
import Slider from 'react-slick';
import './Tips.scss';

const Tips = () => {
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
    <section className="tips-list">
      <h1 className='tips-list-title'>Por que comprar na Maeztra?</h1>
      
      {/* Slider para dispositivos móveis */}
      <div className="mobile-slider">
        <Slider {...settings}>
          {mockTips.map((tips, index) => (
            <div className="tips" key={index}>
              <img src={tips.image} alt={tips.name} />
              <div className='tips-text-container'>
                <div className='tips-description'>
                  <h2>{tips.name}</h2>
                  <p>{tips.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Lista estática para desktop */}
      <div className="static-tips-list">
        {mockTips.map((tips, index) => (
          <div className="tips" key={index}>
            <img src={tips.image} alt={tips.name} />
            <div className='tips-text-container'>
              <div className='tips-description'>
                <h2>{tips.name}</h2>
                <p>{tips.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
