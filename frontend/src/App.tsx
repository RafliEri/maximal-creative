import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/Loading.css';
import logo from './components/image/max-logo.png'


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <img src={logo} alt="Loading" />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
        <Header />
      <div className="fade-in-item" style={{ animationDelay: '0.2s' }}>
        <HeroSection />
      </div>
      <div className="fade-in-item" style={{ animationDelay: '0.6s' }}>
        <Services />
      </div>
      <div className="fade-in-item" style={{ animationDelay: '0.8s' }}>
        <AboutUs />
      </div>
      <div className="fade-in-item" style={{ animationDelay: '1s' }}>
        <Partners />
      </div>
      <div className="fade-in-item" style={{ animationDelay: '1.2s' }}>
        <PhotoGallery />
      </div>
      <div className="fade-in-item" style={{ animationDelay: '1.4s' }}>
        <ContactForm />
      </div>
      <div className="fade-in-item" style={{ animationDelay: '1.6s' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
