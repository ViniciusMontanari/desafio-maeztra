// src/components/Footer.js
import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="links">
      <a href="#facebook"><img src='https://i.ibb.co/Fzn9WFK/facebook-com.png' alt='fb'/></a>
      <a href="#linkedin"><img src='https://i.ibb.co/9h55rPC/www-linkedin-com.png' alt='In'/></a>
      <a href="#instagram"><img src='https://i.ibb.co/BTXb7gp/www-instagram-com.png' alt='insta'/></a>
      <a href="#youtube"><img src='https://i.ibb.co/3sbjDfD/www-youtube-com.png' alt='youtube'/></a>
      <img className='pagamentos' src='https://i.ibb.co/KrTY9py/accepted-payment-methods-meio-de-pagamentos.png' alt='pgtos'/>
    </div>
    <div className='powered'>
        <div className='vtex'>
          <p>Powered by</p>
          <img src='https://i.ibb.co/bmqVD5b/logo-footer.png' alt='vtex'/>
        </div>
        <div className='maeztra'>
          <p>Developed by</p>
          <img src='https://i.ibb.co/YTfjTFm/2019-05-Maeztra-Logo-cor.png' alt='maeztra'/>
        </div>
      </div>
  </footer>
);

export default Footer;