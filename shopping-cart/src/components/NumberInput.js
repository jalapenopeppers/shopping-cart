import React, { useState } from "react";

import './NumberInput.css';

const NumberInput = () => {
  const [ quantity, setQuantity ] = useState(0);

  function decreaseQuantity() {
    console.log('Decrease quantity');
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  function increaseQuantity() {
    console.log('Increase quantity');
    setQuantity(quantity + 1);
  }

  return (
    <div className="custom-number-input">
      <div className="change-number-button" onClick={decreaseQuantity}>-</div>
      <p>{quantity}</p>
      <div className="change-number-button" onClick={increaseQuantity}>+</div>
    </div>
  );
}

export default NumberInput;