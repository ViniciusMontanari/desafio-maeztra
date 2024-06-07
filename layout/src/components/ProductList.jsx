// src/components/ProductList.js
import React from 'react';
import './ProductList.scss';

const ProductList = ({ products }) => (
  <section className="product-list">
    {products.map((product, index) => (
      <div className="product" key={index}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    ))}
  </section>
);

export default ProductList;
