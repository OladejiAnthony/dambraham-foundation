import React from 'react';
import './Blog.scss';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Our Recent Achievements",
      date: "September 5, 2024",
      content: "We are excited to share some of our latest accomplishments, including the completion of our community outreach program."
    },
    {
      id: 2,
      title: "Industry News: The Future of Social Impact",
      date: "August 29, 2024",
      content: "A deep dive into trends shaping the future of NGOs and how we're adapting to continue making a difference."
    },
    {
      id: 3,
      title: "Volunteer Spotlight: Meet Our Amazing Volunteers",
      date: "August 20, 2024",
      content: "This month, we shine a spotlight on some of our most dedicated volunteers and their incredible contributions."
    }
  ];

  return (
    <div className="blog-posts">
      {blogPosts.map(post => (
        <div key={post.id} className="blog-post">
          <h3>{post.title}</h3>
          <p className="date">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
