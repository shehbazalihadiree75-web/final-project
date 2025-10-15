import React from 'react';
import { eventsData } from '../data/eventsData';

const Events = () => {
  return (
    <section id="events">
      <div className="container">
        <div className="section-title">
          <h2>Upcoming Events & Festivals</h2>
          <p>Don't miss these amazing cultural experiences in Thalay Broq Districe Ghanche Gilgit Baltistan</p>
        </div>
        <div className="events-grid">
          {eventsData.map(event => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-img" />
              <div className="event-content">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-venue">{event.venue}</div>
                <p>{event.description}</p>
                <a href="#booking" className="btn" style={{marginTop: '1rem', display: 'inline-block'}}>
                  Book Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;