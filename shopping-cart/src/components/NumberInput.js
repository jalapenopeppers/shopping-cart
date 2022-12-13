import React, { useEffect, useState } from "react";

import './NumberInput.css';

const NumberInput = (props) => {
  const callback = props.qtChangeCallback;

  const [ quantity, setQuantity ] = useState(0);
  useEffect(() => {
    callback(quantity);
  }, [callback, quantity]);
  useEffect(() => {
    if (props.startQt !== undefined) setQuantity(props.startQt);
  }, []);
  useEffect(() => {
    if (props.forceQtTo !== undefined) setQuantity(props.forceQtTo);
  }, [props.forceQtTo]);

  function decreaseQuantity() {
    // console.log('Decrease quantity');
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  function increaseQuantity() {
    // console.log('Increase quantity');
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