import React from "react";
import Slider from "react-slick";
import "./Team.scss";

const teamMembers = [
  {
    name: "Damilola Olugbodi",
    role: "Founder & CEO",
    image: require("../../assets/images/oloro.jpg"),
    bio: "Damilola is the visionary CEO of Tdwonder Tech, known for her expertise in technology and leadership. She is also a dedicated teacher, a financial expert, and the Managing Director/CEO of both ABES Fashion Academy and the Dambraham Foundation in Eyenkorin, Ilorin, Kwara State, Nigeria. With her diverse experience across multiple industries, Damilola brings a unique blend of creativity, financial acumen, and a passion for empowering others through education and innovation.",
  },
  {
    name: "Abraham Olugbodi",
    role: "Co-founder",
    image: require("../../assets/images/Abraham.jpg"),
    bio: "Abraham Olugbodi is the visionary co-founder of the Dambraham Foundation, where he leverages his diverse talents to drive impactful change. As an author, realtor, farmer, entrepreneur, and business consultant, Abraham brings a wealth of knowledge and expertise to the foundation. He is also the MD/CEO of TGIC Network Integrity Company and serves as a pastor at Revival Chapel in Eyenkorin, Ilorin, Kwara State, Nigeria. His commitment to community service and leadership reflects his passion for empowering individuals and creating sustainable growth.",
  },
  {
    name: "Oladosu Timilehin Esther",
    role: "PRO/Information officer",
    image: require("../../assets/images/esther.jpg"),
    bio: "Oladosu Timilehi is a Booking Consultant and PRO at the Dambraham Foundation. She leverages her public health expertise to manage public relations and enhance community health initiatives.",
  },
  {
    name: "Odukunle Esther Damilola",
    role: "Program Manager",
    image: require("../../assets/images/damilola.jpg"),
    bio: "Odukunle Esther is a businesswoman and counselor in training. As Program Manager at the Dambraham Foundation, she drives initiatives for sustainable community growth and healthcare improvement.",
  },
  {
    name: "Orunmuyi Muyiwa Emmanuel",
    role: "Logistics manager",
    image: require("../../assets/images/muyiwa.jpg"),
    bio: "Orunmuyi Muyiwa, a Sales Executive and Agripreneur, ensures smooth logistics operations at the Dambraham Foundation, facilitating efficient resource management and delivery of services.",
  },
  {
    name: "Adedoyin Charles Adebayo",
    role: "Art and craft manager",
    image: require("../../assets/images/adebayo.jpg"),
    bio: "Adedoyin Charles is a skilled hand crafter and Agric Engineer. As the Art and Craft Manager at the Dambraham Foundation, he promotes creativity and sustainable practices through innovative projects.",
  },
  {
    name: "Akintunde Dayo Samuel ",
    role: "Volunteer",
    image: require("../../assets/images/samuel.jpg"),
    bio: "Akintunde Dayo is a Civil Engineer and dedicated volunteer at Dambraham Foundation. Passionate about community development, he contributes his time and skills towards impactful service and sustainable change, enhancing the foundations mission of humanitarian outreach.",
  },
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
        },
      },
    ],
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
