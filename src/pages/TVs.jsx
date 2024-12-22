// src/pages/TVs.jsx
import React, { useState } from 'react';
//import '../style/TVs.scss';

const TVs = () => {
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'OLED TV', brand: 'LG', image: '/assets/oled.jpg', price: 79999 },
    { id: 2, name: 'TCD TV', brand: 'Samsung', image: '/assets/lcd.jpg', price: 67999 },
    { id: 3, name: 'Android TV', brand: 'Sony', image: '/assets/lcd.jpg', price: 53999 },
  ];

  const addToCart = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  return (
    <div className="tvs">
      <h1>TVs</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Price: Rs.{product.price}</p>
            <div className="cart-controls">
              <button onClick={() => removeFromCart(product.id)}>-</button>
              <span>{cart[product.id] || 0}</span>
              <button onClick={() => addToCart(product.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVs;
