import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mobiles from './pages/Mobiles';
import Tablets from './pages/Tablets';
import TVs from './pages/TVs';
import Laptops from './pages/Laptops';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';

const App = () => {
  // State to manage the cart
  const [cart, setCart] = useState({});

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: prevCart[product.id]
        ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
        : { ...product, quantity: 1 },
    }));
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (id, delta) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id]) {
        updatedCart[id].quantity += delta;
        if (updatedCart[id].quantity <= 0) delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles addToCart={addToCart} />} />
        <Route path="/mobiles/:brand" element={<Mobiles addToCart={addToCart} />} />
        <Route path="/tablets" element={<Tablets addToCart={addToCart} />} />
        <Route path="/tablets/:brand" element={<Tablets addToCart={addToCart} />} />
        <Route path="/tvs" element={<TVs addToCart={addToCart} />} />
        <Route path="/tvs/:type" element={<TVs addToCart={addToCart} />} />
        <Route path="/laptops" element={<Laptops addToCart={addToCart} />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
      </Routes>
    </Router>
  );
};

export default App;
