import React, {useState} from 'react';
import PubSub from 'pubsub-js';

import NumberInput from './NumberInput';
import './ProductCard.css'
import addCartIcon from '../icons/add-cart-icon.svg';

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCartClick = () => {
    // if (quantity > 0) {
    //   const CART_ITEMS = 'CART ITEMS';
    //   PubSub.publish(CART_ITEMS, {
    //     prodName,
    //     prodPrice,
    //     quantity,
    //     id
    //   });
    //   console.log('Added to cart');
    //   setQuantity(0);
    // }
    const CART_ITEMS = 'CART ITEMS';
    PubSub.publish(CART_ITEMS, {
      prodName,
      prodPrice,
      quantity: 1,
      id
    });
    console.log('Added to cart');
  }

  const handleQuantityChange = (quantity) => {
    console.log('Change quantity to: ' + quantity);
    setQuantity(quantity);
  }

  const { prodName, prodImg, prodPrice, id } = props;
  return (
    <div className="product">
      <img className="product-image" src="https://via.placeholder.com/150" alt="Product" />
      <div className="product-details">
        <p className="product-name">{prodName}</p>
        <p className="product-price">${prodPrice}</p>
        {/* <NumberInput className="product-quantity" qtChangeCallback={handleQuantityChange}/> */}
        <img className="add-to-cart" src={addCartIcon} alt="Add to cart" onClick={handleAddToCartClick} />
      </div>
    </div>
  );
}

export default ProductCard;