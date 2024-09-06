import React from 'react';
import './Media.scss';
import gallery1 from '../../assets/images/hero3.jpg';
import gallery2 from '../../assets/images/hero4.jpg';

const Media = () => {
  const mediaItems = [
    { id: 1, type: "photo", src: gallery1, alt: "Community outreach" },
    { id: 2, type: "photo", src: gallery2, alt: "Volunteer event" },
    { id: 3, type: "video", src: "https://www.youtube.com/embed/example", title: "Our Impact Video" }
  ];

  return (
    <div className="media-gallery">
      {mediaItems.map(item => (
        item.type === "photo" ? (
          <div key={item.id} className="media-item photo">
            <img src={item.src} alt={item.alt} />
          </div>
        ) : (
          <div key={item.id} className="media-item video">
            <iframe
              src={item.src}
              title={item.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )
      ))}
    </div>
  );
}

export default Media;
