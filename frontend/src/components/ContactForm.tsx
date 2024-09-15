import React, {useState} from 'react';
import '../styles/ContactForm.css';
// import facebook from './image/facebook.png'
import instagram from './image/instagram.png'
// import x from './image/x.png'
import whatsapp from './image/whatsapp.png'
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/mail/contact', {
        name,
        email,
        message,
      });
  
      if (response.data.success) {
        setStatus('Message sent successfully!');
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
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
      <br/>
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
