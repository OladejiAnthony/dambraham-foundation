import React from 'react';
import Blog from '../components/news/Blog';
import Media from '../components/news/Media';
import "../styles/News.scss";

const NewsPage = () => {
  return (
    <div className="news-page container">
      <section className="blog-section">
        <h2>Latest Updates</h2>
        <Blog />
      </section>
      <section className="media-gallery-section">
        <h2>Media Gallery</h2>
        <Media />
      </section>
    </div>
  );
}

export default NewsPage;
