import React from 'react';
import '../style/Mobiles.scss';

const Mobiles = ({ addToCart, updateQuantity, cart }) => {
  const products = [
    { id: 1, name: 'iPhone 14', brand: 'Apple', image: '/assets/iphone.jpg', price: 29999 },
    { id: 2, name: 'Galaxy S23', brand: 'Samsung', image: '/assets/Samsung-14.jpg', price: 70899 },
    { id: 3, name: 'Mi 13 Pro', brand: 'Xiaomi', image: '/assets/Xiomi.jpg', price: 56699 },
    { id: 4, name: 'Google Pixel', brand: 'Pixel', image: '/assets/pixle.jpg', price: 60699 },
  ];

  return (
    <div className="mobiles">
      <h1>Mobiles</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Price: Rs.{product.price}</p>
            <div className="cart-controls">
              <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              <span>{cart[product.id]?.quantity || 0}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
