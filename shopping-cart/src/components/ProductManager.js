import React, { useState } from 'react';

import './ProductManager.css'
import ProductCard from './ProductCard';

const ProductManager = () => {
  const [ productsArr, setProductsArr ] = useState([
    {
      id: 1,
      elem: <ProductCard 
        key={1}
        prodName="Basic VR Headset"
        prodImg=""
        prodPrice="300"
      />
    },
    {
      id: 2,
      elem: <ProductCard 
        key={2}
        prodName="Advanced VR Headset"
        prodImg=""
        prodPrice="400"
      />
    },
    {
      id: 3,
      elem: <ProductCard 
        key={3}
        prodName="Premium VR Headset"
        prodImg=""
        prodPrice="500"
      />
    },
    {
      id: 4,
      elem: <ProductCard 
        key={4}
        prodName="Basic AR Glasses"
        prodImg=""
        prodPrice="200"
      />
    },
    {
      id: 5,
      elem: <ProductCard 
        key={5}
        prodName="Advanced AR Glasses"
        prodImg=""
        prodPrice="300"
      />
    },
    {
      id: 6,
      elem: <ProductCard 
        key={6}
        prodName="Premium AR Glasses"
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