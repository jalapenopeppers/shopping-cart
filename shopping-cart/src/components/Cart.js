import React, { useEffect, useState } from "react";
import PubSub from 'pubsub-js';

import './Cart.css';

const Cart = () => {
   
  const [ totalQuantity, setTotalQuantity ] = useState(0);
  const [ productsArr, setProductsArray ] = useState([]);

  useEffect(() => {
    const subscriber = function (topicTitle, data) {
      // Filter through productsArr and replace the quantities of identical items with new quantities
      // May rewrite later with reduce
      let newProductsArr = [];
      // console.log(productsArr.length);
      if (productsArr.length > 0) {
        let newUniqueItem = true;
        for (let i = 0; i < productsArr.length; i++) {
          if (productsArr[i].prodName === data.prodName) {
            let newProdObj = {...productsArr[i]};
            newProdObj.quantity = data.quantity;
            newProductsArr.push(newProdObj);
            newUniqueItem = false;
          } else {
            newProductsArr.push(productsArr[i]);
          }
        }
        if (newUniqueItem) newProductsArr.push(data);
      } else {
        newProductsArr.push(data);
      }
      // setProductsArray(currentArr => [...currentArr, data]);
      // console.log(newProductsArr);
      setProductsArray(newProductsArr);
    };

    const CART_ITEMS = 'CART ITEMS';
    const token = PubSub.subscribe(CART_ITEMS, subscriber);

    return () => {
      PubSub.unsubscribe(subscriber);
    };
  }, [productsArr, setProductsArray]);
  // const token = PubSub.subscribe('CART ITEMS', subscriber);

  const resetCart = () => {
    setProductsArray([]);
  }
  const logCart = () => {
    console.log(productsArr);
  }

  return (
    <div className="cart">
      <p onClick={resetCart}>Click me to reset cart</p>
      <p onClick={logCart}>Click me to log cart contents</p>
    </div>
  );
}

export default Cart;