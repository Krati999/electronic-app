// src/pages/Tablets.jsx
import React, { useState } from 'react';
import '../style/Tablet.scss';

const Tablets = () => {
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'iPad Pro', brand: 'Apple', image: '/assets/appleTab.jpg', price: 74999 },
    { id: 2, name: 'Lenovo Tab P11', brand: 'Lenovo', image: '/assets/Tablet.jpg', price: 24999 },
    { id: 3, name: 'Dell XPS 13', brand: 'Dell', image: '/assets/DellTab.jpg', price: 89999 },
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
    <div className="tablets">
      <h1>Tablets</h1>
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

export default Tablets;
