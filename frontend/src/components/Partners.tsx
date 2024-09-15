import React from 'react';
import '../styles/Partners.css';
import badanpom from './image/BADAN_POM.png';
import itsme from './image/itsme-logo.png';
import multivision from './image/Logo_Multivision_Plus_(MVP).png'
import ismut from './image/logo-ismut.png'
import musica from './image/logo-musica-med.png'
import monotype from './image/monotype-logo.png'

const Partners: React.FC = () => {
  return (
    <section id="partners" className="partners">
      <h2>OUR PARTNERS</h2>
      <div className="partners-list">
        <img src={multivision} alt="Partner 1" />
        <img src={badanpom} alt="Partner 2" />
        <img src={musica} alt="Partner 3" />
        <img src={ismut} alt="Partner 4" />
        <img src={itsme} alt="Partner 5" />
        <img src={monotype} alt="Partner 6" />
      </div>
    </section>
  );
};

export default Partners;