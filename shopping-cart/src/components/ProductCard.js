import React, { useState } from 'react';

// import './ProductManager.css'

const ProductCard = (props) => {

  const { prodImg, prodPrice } = props;
  return (
    <div className="product">
      <img className="product-image" src={prodImg} alt="Product" />
      <div className="product-details">
        <p className="product-price">{prodPrice}</p>
        <p className="product-quantity">Q: 0</p>
        <p className="add-to-cart">Add to cart</p>
      </div>
    </div>
  );
}

export default ProductCard;