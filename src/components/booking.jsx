import React, { useState } from 'react';
import { eventsData } from '../data/eventsData';

const Booking = () => {
  const [formData, setFormData] = useState({
    event: '',
    name: '',
    email: '',
    phone: '',
    tickets: 1,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your booking! We will contact you soon.');
    setFormData({
      event: '',
      name: '',
      email: '',
      phone: '',
      tickets: 1,
      message: ''
    });
  };

  return (
    <section id="booking">
      <div className="container">
        <div className="section-title">
          <h2>Book Your Tickets</h2>
          <p>Secure your spot at Skardu's most exciting events</p>
        </div>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="event">Select Event</label>
            <select 
              id="event" 
              name="event" 
              className="form-control" 
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Choose an event...</option>
              {eventsData.map(event => (
                <option key={event.id} value={event.title}>
                  {event.title} - {event.date}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-control" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="form-control" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tickets">Number of Tickets</label>
            <input 
              type="number" 
              id="tickets" 
              name="tickets" 
              className="form-control" 
              min="1" 
              max="10"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Special Requirements</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-control" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn" style={{width: '100%'}}>
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;