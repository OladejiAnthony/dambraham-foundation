import React from 'react';
import './Partners.scss';

const partners = [
  {
    name: 'Partner Name 1',
    logo: require("../../assets/images/john.jpeg"),
    description: 'A brief description of the partner organization and their contribution to our cause.'
  },
  {
    name: 'Partner Name 2',
    logo: require("../../assets/images/john.jpeg"),
    description: 'A brief description of the partner organization and their contribution to our cause.'
  },
  {
    name: 'Partner Name 3',
    logo: require("../../assets/images/john.jpeg"),
    description: 'A brief description of the partner organization and their contribution to our cause.'
  },
  {
    name: 'Partner Name 4',
    logo: require("../../assets/images/john.jpeg"),
    description: 'A brief description of the partner organization and their contribution to our cause.'
  }
  // Add more partners as needed
];

const Partners = () => {
  return (
    <section className="partners container">
      <h2 className="text-center">Our Partners</h2>
      <div className="partner-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner">
            <img src={partner.logo} alt={partner.name} />
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
