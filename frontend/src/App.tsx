import React from 'react';
// import './styles/App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <AboutUs />
      <Partners />
      <PhotoGallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
