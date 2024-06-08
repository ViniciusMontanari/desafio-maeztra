import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Tips from './components/Tips';
import Partnership from './components/Partnership';
import Shelf from './components/Shelf';
import LoremText from './components/LoremText';
import Newsletter from './components/Newsletter';
import BottomInfoMenu from './components/BottomInfoMenu';
import Footer from './components/Footer';
import Popup from './components/Popup';
import NotificationBar from './components/NotificationBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Header />
      <Banner />
      <Tips />
      <Partnership />
      <Shelf />
      <LoremText />
      <Newsletter />
      <BottomInfoMenu />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
