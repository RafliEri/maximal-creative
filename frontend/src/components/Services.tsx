import React from 'react';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <section id="services" className="services">
      <h2>OUR SERVICES</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>DIGITAL MARKETING STRATEGY</h3>
          <hr />
          <p>At My Site, we specialize in creating effective digital marketing strategies tailored to your business goals. Our proven methods help businesses reach their target audience and drive growth.</p>
        </div>
        <div className="service-item">
          <h3>SEO CONTENT WRITING &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          <hr />
          <p>Our skilled writers craft SEO-optimized content that boosts your website's visibility and engages your audience. Elevate your online presence with compelling, search engine-friendly content.</p>
        </div>
        <div className="service-item">
          <h3>SOCIAL MEDIA MANAGEMENT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          <hr />
          <p>Engage and expand your audience with our comprehensive social media marketing services. We create captivating content and manage your social platforms to elevate your brand.</p>
        </div>
        <div className="service-item">
          <h3>PAY-PER-CLICK ADVERTISING &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          <hr />
          <p>Maximize your online visibility and generate quality leads with our expert PPC and media buying services. We optimize campaigns to deliver the best results for your budget.</p>
        </div>
        <div className="service-item">
          <h3>LOCAL SEO STRATEGY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          <hr />
          <p>Target potential customers in your area with our specialized local SEO strategies. We enhance your online presence to attract local leads and drive business growth.</p>
        </div>
        <div className="service-item">
          <h3>BRAND IDENTITY DESIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3>
          <hr />
          <p>Stand out in the market with our professional design and branding solutions. From logos to brand guidelines, we help businesses create a strong and memorable brand identity.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
