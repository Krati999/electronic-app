// src/pages/Home.jsx
import React from 'react';
import '../style/Home.scss'; // Make sure to import the styles

const products = {
  mobiles: [
    { name: 'Apple iPhone', image: '/assets/iphone.jpg' },
    { name: 'Samsung Galaxy', image: '/assets/Samsung-14.jpg' },
    { name: 'Xiaomi Redmi', image: '/assets/Xiomi.jpg' },
    { name: 'Google Pixel', image: '/assets/pixle.jpg' },
  ],
  tablets: [
    { name: 'Apple iPad', image: '/assets/appleTab.jpg' },
    { name: 'Lenovo Tab', image: '/assets/Tablet.jpg' },
    { name: 'Dell Tablet', image: '/assets/DellTab.jpg' },
  ],
  tvs: [
    { name: 'OLED TV', image: '/assets/oled.jpg' },
    { name: 'TCD TV', image: '/assets/lcd.jpg' },
    { name: 'Android TV', image: '/assets/lcd.jpg' },
  ]
};

const Home = () => (
  <div className="home">
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to MyStore</h1>
        <p>Your ultimate destination for Mobiles, Tablets, and TVs. Explore the best deals and top-notch products, all in one place.</p>
        <button className="shop-now">Shop Now</button>
      </div>
      <img src="/assets/shopNow.jpg" alt="Shopping Banner" className="hero-image" />
    </section>

    {/* Features Section */}
    <section className="features">
      <h2>Why Shop With Us?</h2>
      <div className="features-list">
        <div className="feature-item">
          <img src="/assets/fastDelivery.jpg" alt="Fast Delivery" />
          <h3>Fast Delivery</h3>
          <p>Get your products delivered to your doorstep swiftly and safely.</p>
        </div>
        <div className="feature-item">
          <img src="/assets/bestprice.jpg" alt="Best Prices" />
          <h3>Best Prices</h3>
          <p>We offer unbeatable prices on all your favorite products.</p>
        </div>
        <div className="feature-item">
          <img src="/assets/quality.jpg" alt="Quality Products" />
          <h3>Top Quality</h3>
          <p>Shop from a wide range of premium quality products.</p>
        </div>
      </div>
    </section>

    {/* Product Display Section */}
    <section className="products">
      <h2>Our Products</h2>
      <div className="categories">
        {Object.keys(products).map((category) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="product-grid">
              {products[category].map((product, index) => (
                <div key={index} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <button className="add-to-cart">+ Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Call to Action Section */}
    <section className="cta">
      <h2>Don’t Miss Out!</h2>
      <p>Check out our latest collections and exclusive deals now.</p>
      <button className="explore-now">Explore Now</button>
    </section>
  </div>
);

export default Home;
