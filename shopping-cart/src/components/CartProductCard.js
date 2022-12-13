import React, {useEffect, useState} from 'react';
import PubSub from 'pubsub-js';

import NumberInput from './NumberInput';
import './CartProductCard.css'

const CartProductCard = (props) => {
  // const [quantity, setQuantity] = useState(0);
  // // useEffect(() => {

  // // }, [quantity]);

  const handleQuantityChange = (quantity) => {
    const CART_ITEMS = 'CART ITEMS';
    PubSub.publish(CART_ITEMS, {
      prodName,
      prodPrice,
      quantity,
      id
    });
  }

  const { prodName, prodImg, prodPrice, quantity, id } = props;
  return (
    <div className="cart-product">
      <img className="cart-product-image" src="https://via.placeholder.com/150" alt="Product" />
      <div className="cart-product-details">
        <p className="cart-product-name">{prodName}</p>
        <p className="cart-product-price">${prodPrice} x</p>
        <NumberInput className="cart-product-quantity" qtChangeCallback={handleQuantityChange} startQt={quantity}/>
        <p className="cart-product-subtotal">= ${prodPrice * quantity}</p>
      </div>
    </div>
  );
}

export default CartProductCard;