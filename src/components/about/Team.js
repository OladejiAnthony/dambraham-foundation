import React from 'react';
import Slider from 'react-slick';
import './Team.scss';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: 'path-to-john-image.jpg',
    bio: 'With over 15 years of experience in the nonprofit sector, John leads the foundation with a vision for sustainable change.'
  },
  {
    name: 'Jane Smith',
    role: 'Program Director',
    image: 'path-to-jane-image.jpg',
    bio: 'Jane oversees all educational initiatives at the foundation. Her passion for education and her background in teaching have helped thousands of students gain access to quality education.'
  },
  {
    name: 'Michael Johnson',
    role: 'Healthcare Coordinator',
    image: 'path-to-michael-image.jpg',
    bio: 'Michael’s background in public health drives the foundation’s healthcare programs, ensuring that communities receive the medical care they need.'
  },
  {
    name: 'Susan Williams',
    role: 'Operations Manager',
    image: 'path-to-susan-image.jpg',
    bio: 'Susan manages the day-to-day operations of the foundation, ensuring that all projects run smoothly and efficiently.'
  }
  // Add more team members as needed
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="team container">
      <h2 className="text-center">Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Team;
