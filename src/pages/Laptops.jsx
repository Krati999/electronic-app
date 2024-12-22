import React, { useState } from 'react';
import '../style/Laptop.scss';

const Laptops = () => {
  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'HP Spectre x360', brand: 'HP', image: '/assets/dell.jpg', price: 99999 },
    { id: 2, name: 'Asus ZenBook', brand: 'Asus', image: '/assets/asus.jpg', price: 85999 },
    { id: 3, name: 'Dell XPS 13', brand: 'Dell', image: '/assets/hp.jpg', price: 114999 },
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
    <div className="laptops">
      <h1>Laptops</h1>
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

export default Laptops;
