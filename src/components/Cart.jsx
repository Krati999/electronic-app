// src/components/Cart.jsx
import React from 'react';
import '../style/Cart.scss';

const Cart = ({ cart }) => {
  const cartItems = Object.entries(cart);

  const getTotalItems = () =>
    cartItems.reduce((total, [, quantity]) => total + quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(([product, quantity]) => (
            <li key={product}>
              {product}: {quantity}
            </li>
          ))}
        </ul>
      )}
      <p>Total Items: {getTotalItems()}</p>
    </div>
  );
};

export default Cart;
