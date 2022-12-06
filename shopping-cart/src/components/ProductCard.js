import React from 'react';

import NumberInput from './NumberInput';

import './ProductCard.css'
import addCartIcon from '../icons/add-cart-icon.svg';

const ProductCard = (props) => {
  const handleAddToCartClick = () => {
    // FINISH
    console.log('Add to cart');
  }
  const handleQuantityChange = () => {
    // FINISH
    console.log('Change quantity');
  }

  const { prodName, prodImg, prodPrice } = props;
  return (
    <div className="product">
      <img className="product-image" src="https://via.placeholder.com/150" alt="Product" />
      <div className="product-details">
        <p className="product-name">{prodName}</p>
        <p className="product-price">${prodPrice}</p>
        <NumberInput className="product-quantity" />
        <img className="add-to-cart" src={addCartIcon} alt="Add to cart" onClick={handleAddToCartClick} />
      </div>
    </div>
  );
}

export default ProductCard;