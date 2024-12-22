// src/components/ProductGrid.jsx
import React, { useState } from 'react';
//import './ProductGrid.scss';

const ProductGrid = ({ products }) => {
  const [cart, setCart] = useState({});

  const handleAdd = (product) => {
    setCart((prev) => ({ ...prev, [product]: (prev[product] || 0) + 1 }));
  };

  const handleSubtract = (product) => {
    setCart((prev) => {
      if (prev[product] > 1) return { ...prev, [product]: prev[product] - 1 };
      const updatedCart = { ...prev };
      delete updatedCart[product];
      return updatedCart;
    });
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product} className="product-card">
          <h3>{product}</h3>
          <div className="cart-actions">
            <button onClick={() => handleSubtract(product)}>-</button>
            <span>{cart[product] || 0}</span>
            <button onClick={() => handleAdd(product)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
