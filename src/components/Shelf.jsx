import React from 'react';
import Slider from 'react-slick';
import mockShelf from './mockShelf';
import './Shelf.scss';

const Shelf = () => {
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
    <section className="product-slider">
        <h1 className='shelf-title'>As Mais Pedidas</h1>

        {/* Slider para dispositivos móveis */}
        <div className="shelf-mobile-slider">
          <Slider {...settings}>
              {mockShelf.map((product, index) => (
              <div className="product" key={index}>
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-info">
                      <div className="product-colors">
                          {product.colors.map((color, index) => (
                          <span
                              key={index}
                              className="color-square"
                              style={{ backgroundColor: color }}
                          ></span>
                          ))}
                      </div>
                      <p className="product-price">{product.price}</p>
                      <h2 className="product-title">{product.title}</h2>
                      <p className="product-description">{product.description}</p>
                  </div>
                  <button className="add-button">Adicionar</button>
              </div>
              ))}
          </Slider>
        </div>


        {/* Lista estática para desktop */}
        <div className="static-shelf">
            {mockShelf.map((product, index) => (
              <div className="product" key={index}>
                  <img src={product.image} alt={product.title} className="product-image" />
                  <div className="product-info">
                      <div className="product-colors">
                          {product.colors.map((color, index) => (
                          <span
                              key={index}
                              className="color-square"
                              style={{ backgroundColor: color }}
                          ></span>
                          ))}
                      </div>
                      <p className="product-price">{product.price}</p>
                      <h2 className="product-title">{product.title}</h2>
                      <p className="product-description">{product.description}</p>
                  </div>
                  <button className="add-button">Adicionar</button>
              </div>
            ))}
        </div>
    </section>
  );
};

export default Shelf;
