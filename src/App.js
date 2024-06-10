import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Tips from './components/Tips/Tips';
import Partnership from './components/Partnership/Partnership';
import Shelf from './components/Shelf/Shelf';
import LoremText from './components/LoremText/LoremText';
import Newsletter from './components/Newsletter/Newsletter';
import BottomInfoMenu from './components/BottomInfoMenu/BottomInfoMenu';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import PopupDesktop from './components/PopupDesktop/PopupDesktop';
import DesktopMenu from './components/DesktopMenu/DesktopMenu';
import NotificationBar from './components/NotificationBar/NotificationBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Header />
      <DesktopMenu />
      <Banner />
      <Tips />
      <Partnership />
      <Shelf />
      <LoremText />
      <Newsletter />
      <BottomInfoMenu />
      <Footer />
      <Popup />
      <PopupDesktop />
    </div>
  );
}

export default App;
