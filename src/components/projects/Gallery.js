import React from "react";
import "./Gallery.scss";

// Import images
import image1 from "../../assets/images/hero.jpg";
import image2 from "../../assets/images/hero2.jpg";
import image3 from "../../assets/images/hero3.jpg";
import image4 from "../../assets/images/hero4.jpg";
import image5 from "../../assets/images/hero5.jpg";

// Import videos
import video1 from "../../assets/videos/project1.mp4";
import video2 from "../../assets/videos/project2.mp4";

const Gallery = () => {
  const images = [image1, image2, image3, image4, image5];
  const videos = [video1, video2];

  return (
    <div className="project-gallery">
      <h2>Project Gallery</h2>
      <div className="gallery">
        {videos.map((video, index) => (
          <div key={index} className="video-container">
            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
        {images.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img key={index} src={image} alt={`Project Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
