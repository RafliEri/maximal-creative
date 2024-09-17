import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from './image/max-logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <a href="#hero" onClick={(e) => handleMenuClick(e, 'hero')}> 
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="logo">MAXIMAL CREATIVE</h1>
        </div>
          </a>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#services" onClick={(e) => handleMenuClick(e, 'services')}>Services</a></li>
            <li><a href="#about" onClick={(e) => handleMenuClick(e, 'about')}>About</a></li>
            <li><a href="#partners" onClick={(e) => handleMenuClick(e, 'partners')}>Clients</a></li>
            <li><a href="#collection" onClick={(e) => handleMenuClick(e, 'collection')}>Works</a></li>
            <li><a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')}>Contact</a></li>
          </ul>
        </nav>
        <div className="burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
