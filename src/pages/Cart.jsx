import React from 'react';
import '../style/Cart.scss';

const Cart = ({ cart, updateQuantity }) => {
  const cartItems = Object.values(cart);

  if (cartItems.length === 0) {
    return <div className="cart"><h1>Your Cart is Empty!</h1></div>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Brand: {item.brand}</p>
            <p>Price: Rs.{item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <p>Total: Rs.{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
