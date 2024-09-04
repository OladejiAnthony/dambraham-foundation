import React from 'react';
import "./Events.scss";

const Events = () => {
  const events = [
    {
      title: 'Annual Fundraiser Gala',
      date: 'October 15, 2024',
      description: 'A night of dinner and entertainment to raise funds for our cause.',
      registrationLink: '/register-gala',
    },
    {
      title: 'Community Workshop: Sustainable Living',
      date: 'November 5, 2024',
      description: 'Learn tips and strategies for living a more sustainable lifestyle.',
      registrationLink: '/register-workshop',
    }
  ];

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      {events.map((event, index) => (
        <div key={index} className="event">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p>{event.description}</p>
          <a href={event.registrationLink} className="register-link">Register Now</a>
        </div>
      ))}
    </div>
  );
}

export default Events;

