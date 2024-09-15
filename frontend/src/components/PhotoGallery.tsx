import React from 'react';
import '../styles/PhotoGallery.css';
import image1 from '../assets/collections/1.png';
import image2 from '../assets/collections/2.png';
import image3 from '../assets/collections/3.jpg';
import image4 from '../assets/collections/4.jpg';
import image5 from '../assets/collections/5.jpg';
import image6 from '../assets/collections/6.jpg';
import image7 from '../assets/collections/7.jpg';
import image8 from '../assets/collections/8.jpg';
import image9 from '../assets/collections/9.png';
import image10 from '../assets/collections/10.png';
import image11 from '../assets/collections/11.png';
import image12 from '../assets/collections/12.png';
import image13 from '../assets/collections/13.png';
import image14 from '../assets/collections/14.png';
import image15 from '../assets/collections/15.png';
import image16 from '../assets/collections/16.png';
import image17 from '../assets/collections/17.png';
import image18 from '../assets/collections/18.png';



const images = [image1, image2, image3, image4, image5, image6, image7,
   image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18];

const App: React.FC = () => {
  return (
    <section id="collection" className="collection">
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image} alt={`Item ${index + 1}`} />
        </div>
      ))}
    </div>
    </section>
  );
}

export default App;
