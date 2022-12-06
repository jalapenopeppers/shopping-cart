import React, { useState } from 'react';

// import './ProductManager.css'
import ProductCard from './ProductCard';

const ProductManager = () => {
  const [ productsArr, setProductsArr ] = useState([
    {
      id: 1,
      elem: <ProductCard 
        key={1}
        prodImg=""
        prodPrice="300"
      />
    },
    {
      id: 2,
      elem: <ProductCard 
        key={2}
        prodImg=""
        prodPrice="400"
      />
    }
  ]);

  return (
    <div className="products-container">
      {
        productsArr.map(productObj => productObj.elem)
      }
    </div>
  );
}

export default ProductManager;