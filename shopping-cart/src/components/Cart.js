import React, { useEffect, useState } from "react";
import PubSub from 'pubsub-js';

import './Cart.css';
import ProductCard from "./ProductCard";
import CartProductCard from "./CartProductCard";

const Cart = () => {
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalQuantity, setTotalQuantity ] = useState(0);
  const [ productsArr, setProductsArray ] = useState([]);

  useEffect(() => {
    const subscriber = function (topicTitle, data) {
      // Filter through productsArr and replace the quantities of identical items with new quantities
      // May rewrite later with reduce
      let newProductsArr = [];
      if (productsArr.length > 0) {
        let newUniqueItem = true;
        for (let i = 0; i < productsArr.length; i++) {
          if (productsArr[i].prodName === data.prodName) {
            let newProdObj = {...productsArr[i]};
            newProdObj.quantity = data.quantity;
            if (data.quantity > 0) {
              // Only add the item back if the quantity is > 0. Else, delete it
              newProductsArr.push(newProdObj);
            }
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

      //Find totalQuantity
      setTotalQuantity(newProductsArr.reduce((accumulator, currObj) => accumulator + currObj.quantity, 0));
    
      //Find totalPrice
      setTotalPrice(newProductsArr.reduce((accumulator, currObj) => accumulator + (currObj.quantity * Number(currObj.prodPrice)), 0));
    };

    const CART_ITEMS = 'CART ITEMS';
    const token = PubSub.subscribe(CART_ITEMS, subscriber);

    return () => {
      PubSub.unsubscribe(subscriber);
    };
  }, [productsArr, setProductsArray]);
  // const token = PubSub.subscribe('CART ITEMS', subscriber);

  // Empties cart and resets quantity pickers 
  const handleOrder = () => {
    setProductsArray([]);
    setTotalPrice(0);
    setTotalQuantity(0);

    // FINISH - resets quantity pickers
  }

  // TEMP FUNCS
  const resetCart = () => {
    setProductsArray([]);
  }
  const logCart = () => {
    console.log(productsArr);
  }

  return (
    <div className="cart">
      {/* <p onClick={resetCart}>Click me to reset cart</p>
      <p onClick={logCart}>Click me to log cart contents</p> */}
      <h3 className="cart-header" >Cart ({totalQuantity})</h3>
      <div className="cart-items">
        {productsArr.map(product => <CartProductCard 
          key={product.id}
          prodName={product.prodName}
          prodImg={product.prodImg}
          prodPrice={product.prodPrice}
          quantity={product.quantity}
          id={product.id}
        />)}
      </div>
      <div className="cart-order-button-container">
        <button className="cart-order-button" onClick={handleOrder}>Order (${String(totalPrice) + '.00'})</button>
      </div>
    </div>
  );
}

export default Cart;