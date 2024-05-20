// src/components/ReviewCarousel.js
import React, { useState, useEffect } from 'react';
import './ReviewCarousel.css';

const reviews = [
  {
    name: "Hanna Lisem",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    img: "https://via.placeholder.com/150",
    rating: 5,
    position: "Project Manager"
  },
  {
    name: "Ronne Galle",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    img: "https://via.placeholder.com/150",
    rating: 4,
    position: "Project Manager"
  },
  {
    name: "Missy Limana",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    img: "https://via.placeholder.com/150",
    rating: 5,
    position: "Engineer"
  },
  {
    name: "John Doe",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    img: "https://via.placeholder.com/150",
    rating: 5,
    position: "Software Engineer"
  },
  {
    name: "Jane Smith",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    img: "https://via.placeholder.com/150",
    rating: 4,
    position: "Marketing Specialist"
  },
  {
    name: "Sam Wilson",
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    img: "https://via.placeholder.com/150",
    rating: 5,
    position: "Graphic Designer"
  }
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
        {reviews.map((review, index) => (
          <div className="carousel-item" key={index}>
            <div className="review-card">
              <img src={review.img} alt={review.name} className="review-img" />
              <div className="review-content">
                <h3>{review.name}</h3>
                <p className="position">{review.position}</p>
                <p>{review.text}</p>
                <div className="review-rating">
                  {"⭐".repeat(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
