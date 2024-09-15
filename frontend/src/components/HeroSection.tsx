import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section id='hero' className="hero">
      <div className="hero-content">
        <h1 className='tittle1'>Welcome to </h1>
        <h1 className='tittle2'>MAXIMAL<br/>CREATIVE</h1>
        <p>Your partner in digital marketing, SEO, and more.</p>
        <a href="#services" className="cta-button">Discover More</a>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <h2>1000+</h2>
          <p>Happy Customers</p>
          <hr />
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Projects Completed</p>
          <hr />
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>Customer Support</p>
          <hr />
        </div>
        <div className="stat-item">
          <h2>5 Years</h2>
          <p>in Business</p>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
