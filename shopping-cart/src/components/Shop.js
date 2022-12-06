import React from 'react';

import NavBar from './NavBar';
import ProductManager from './ProductManager';

const Shop = () => {
  return (
    <div className="shop">
      <NavBar />

      <ProductManager />
    </div>
  );
}

export default Shop;