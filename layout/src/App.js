import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const products = [
  { image: 'product1.jpg', name: 'Product 1', description: 'Description for product 1' },
  { image: 'product2.jpg', name: 'Product 2', description: 'Description for product 2' },
  // Adicione mais produtos conforme necessário
];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;
