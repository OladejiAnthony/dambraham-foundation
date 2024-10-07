import React from 'react';
import Slider from 'react-slick';
import './Success.scss';


const successStories = [
  {
    id: 1,
    image: require("../../assets/images/adeola.jpg"),
    testimonial: 'The Dambraham Foundation changed my life. I am now a skilled artisan with a steady income.',
    name: 'Adeola Adeolu',
  },
  {
    id: 2,
    image:  require("../../assets/images/teacher.jpg"),
    testimonial: 'Thanks to the foundation, I completed my education and now work as a teacher in my community.',
    name: 'Jane Egberongbe',
  },
  {
    id: 3,
    image:  require("../../assets/images/woman.png"),
    testimonial: 'The healthcare support provided by the foundation saved my life and the lives of my children.',
    name: 'Shade Adu',
  },
  {
    id: 4,
    image:  require("../../assets/images/trader.jpg"),
    testimonial: 'I started a small business with the help of the foundation, and it has been thriving ever since.',
    name: 'Michael Brown',
  },
  {
    id: 5,
    image:  require("../../assets/images/com.jpg"),
    testimonial: 'The environmental initiatives from the foundation have helped our village prosper sustainably.',
    name: 'Sarah Davis',
  },
];

const Success = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time for large screens
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Scrolls every 3 seconds
    arrows: false, // Disable the previous and next arrows
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 2, // Show 2 slides at a time on tablets
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on mobile
        },
      },
    ],
  };
  

  return (
    <section id="success-stories" className="success-stories">
      <h2>Success Stories</h2>
      <Slider {...settings}>
        {successStories.map((story) => (
          <div key={story.id} className="story">
            <img src={story.image} alt={story.name} />
            <div className="testimonial">
              <p>"{story.testimonial}"</p>
              <h4>- {story.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Success;
