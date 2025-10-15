import React from 'react';
import { galleryImages } from '../data/eventsData';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Photo Gallery</h2>
          <p>Memorable moments from our past events and festivals</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;