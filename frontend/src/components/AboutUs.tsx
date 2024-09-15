import React from 'react';
import '../styles/AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="about-us">
      <div className="about-content">
        <h2>ABOUT US</h2>
        <p>Kami adalah agen kreatif yang bergerak dibidang periklanan social media, website & desain.</p>
        <p>
          di dirikan pada tahun 2017, kami berkomitmen untuk memberikan solusi kreatif dan inovatif bagi klien kami di berbagai bidang industri.
          Dengan fokus utama pada pengembangan konten digital yang menarik dan efektif, kami hadir untuk membantu merealisasikan visi dan tujuan branding serta pemasaran Anda.
        </p>
        <a href="#contact" className="get-in-touch-button">GET IN TOUCH</a>
      </div>
      {/* <div className="about-images">
        <img src="path-to-your-image1.jpg" alt="Team working" />
        <img src="path-to-your-image2.jpg" alt="Creative process" />
        <img src="path-to-your-image3.jpg" alt="Team outdoor activity" />
      </div> */}
    </section>
  );
};

export default AboutUs;
