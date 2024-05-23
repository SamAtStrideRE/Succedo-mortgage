// src/components/ReviewCarousel.js
import React, { useState, useEffect } from "react";
import "./ReviewCarousel.css";

const reviews = [
  {
    name: "Laiju",
    text: "Succedo is highly trustworthy, knowledgeable, and supportive. They have effectively addressed all of my inquiries and remains readily available to answer any questions.",
    img: "https://via.placeholder.com/150",
    rating: 5,

  },
  {
    name: "var saj",
    text: "They are very helpful throughout the entire process of buying a new home. They went above and beyond for us.",
    img: "https://via.placeholder.com/150",
    rating: 4,

  },
  {
    name: "Shabina",
    text: "Transaction Closed! Succedo is transparent and efficient and very detailed with their clients and the team is involved in the transaction",
    img: "https://via.placeholder.com/150",
    rating: 5,
 
  },
  {
    name: "Ray",
    text: "My wife and I just closed on our first home recently. Succedo is our first mortgage agency. Succedo is really good at what they do and makes sure that everything is done well and on time",
    img: "https://via.placeholder.com/150",
    rating: 5,

  },
  {
    name: "Sarin",
    text: "Succedo is extremely professional and helpful throughout the process. They are very quick to respond to queries..",
    img: "https://via.placeholder.com/150",
    rating: 5,
   
  },
  {
    name: "Glory",
    text: "Succedo was resourceful and their team is always available. From the beginning, I was able to trust them in the finance of our home. ",
    img: "https://via.placeholder.com/150",
    rating: 5,
  
  },
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
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
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
