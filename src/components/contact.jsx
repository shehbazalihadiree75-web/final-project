import React, { useState } from 'react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for any inquiries</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>Shehbaz Ali: 0342-0668922</p>
                <p>Syed Rizwan: 0355-4294764</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>shehbazalihadiree75@gmail.com</p>
                <p>Rsyed3466@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>Skardu, Gilgit-Baltistan</p>
                <p>Pakistan</p>
              </div>
            </div>
          </div>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input 
                type="text" 
                id="contact-name" 
                name="name" 
                className="form-control" 
                value={contactForm.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input 
                type="email" 
                id="contact-email" 
                name="email" 
                className="form-control" 
                value={contactForm.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input 
                type="text" 
                id="contact-subject" 
                name="subject" 
                className="form-control" 
                value={contactForm.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea 
                id="contact-message" 
                name="message" 
                className="form-control" 
                rows="5"
                value={contactForm.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" style={{width: '100%'}}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;