import React from 'react';

import NavBar from './NavBar';
import ProductManager from './ProductManager';
import Cart from './Cart';

const Shop = () => {
  return (
    <div className="shop">
      <NavBar />

      <ProductManager />
      <Cart />
    </div>
  );
}

export default Shop;