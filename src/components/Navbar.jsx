// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.scss';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (category) => setDropdown(category);
  const handleMouseLeave = () => setDropdown(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = {
    Mobiles: ['Pixel', 'Samsung', 'Apple', 'Xiaomi'],
    Tablets: ['Apple', 'Lenovo', 'Dell'],
    TVs: ['OLED', 'TCD', 'Android'],
    Laptops: ['HP', 'Asus', 'Dell'],
  };

  return (
    <nav className="navbar">
      <h1 className="logo">MyStore</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {['Home', 'Mobiles', 'Tablets', 'TVs', 'Laptops', 'Contact Us'].map((item) => (
          <li
            key={item}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`}>
              {item}
            </Link>
            {dropdown === item && menuItems[item] && (
              <div className="dropdown">
                {menuItems[item].map((subItem) => (
                  <Link
                    key={subItem}
                    to={`/${item.toLowerCase()}/${subItem.toLowerCase()}`}
                  >
                    {subItem}
                  </Link>
                ))}
        
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
