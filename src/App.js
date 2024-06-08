import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Tips from './components/Tips';
import Partnership from './components/Partnership';
import Shelf from './components/Shelf';
import LoremText from './components/LoremText';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
