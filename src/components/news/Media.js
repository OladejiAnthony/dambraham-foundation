import React from 'react';
import './Media.scss';
import gallery3 from "../../assets/images/FB_IMG_1724450162079.jpg";
import gallery1 from '../../assets/images/hero3.jpg';
import gallery2 from '../../assets/images/hero4.jpg';

const Media = () => {
  const mediaItems = [
    { id: 1, type: "photo", src: gallery3, alt: "Community outreach" },
    { id: 2, type: "photo", src: gallery2, alt: "Volunteer event" },
    { id: 3, type: "photo", src: gallery1, alt: "Community event" },
    { id: 4, type: "photo", src: require("../../assets/images/community1.jpg"), alt: "Community event" },
    { id: 5, type: "photo", src: require("../../assets/images/community2.jpg"), alt: "Community event" },
    { id: 6, type: "photo", src: require("../../assets/images/community3.jpg"), alt: "Community event" },
    { id: 7, type: "photo", src: require("../../assets/images/community4.jpg"), alt: "Community event" },
    { id: 8, type: "photo", src: require("../../assets/images/community5.jpg"), alt: "Community event" },
    { id: 9, type: "photo", src: require("../../assets/images/community6.jpg"), alt: "Community event" },
    { id: 10, type: "photo", src: require("../../assets/images/community7.jpg"), alt: "Community event" },
    { id: 11, type: "photo", src: require("../../assets/images/community8.jpg"), alt: "Community event" },
    { id: 12, type: "photo", src: require("../../assets/images/community9.jpg"), alt: "Community event" },
    { id: 13, type: "video", src: "https://www.youtube.com/embed/example", title: "Our Impact Video" }
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
