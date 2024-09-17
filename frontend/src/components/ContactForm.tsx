import React, { useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/ContactForm.css';
import instagram from './image/instagram.png';
import whatsapp from './image/whatsapp.png';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState('');

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setStatus('Please complete the CAPTCHA');
      return;
    }

    try {
      const response = await axios.post(process.env.REACT_APP_API_URL || 'https://api.maximal-creative.com/api'+'/mail/contact' , {
        name,
        email,
        message,
        captchaToken,
      });

      if (response.data.success) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }

        setCaptchaToken(null); 
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <section id='contact' className="contact">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Type your message here..."
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ReCAPTCHA
          sitekey="6LebYkQqAAAAAMSb-7k0tZJxcGSf8c47qthHV-40"
          onChange={handleCaptchaChange}
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
      <br />
      <div className="contact-info">
        <div className="info-wrapper">
          <div className="contact-details">
            <p><strong>Phone</strong></p>
            <p>+62 858-8061-0112 (Syafiq)</p>
            <p>+62 823-1020-7354 (Rainis)</p>
          </div>
          <div className="contact-details">
            <p><strong>Visit Us</strong></p>
            <p>Abadijaya Kec. Sukmajaya</p>
            <p>Kota Depok Jawa Barat</p>
          </div>
        </div><br/>

        <div className="social-media">
          <a href="https://www.instagram.com/maximalcreative.agency/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a> */}
          <a href="https://wa.me/+6285880610112" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="X" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
