import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css'; // Create and import a CSS file for styling

const ReviewCard = ({ name, rating, comment }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} color={i < rating ? "#ffc107" : "#e4e5e9"} />
      );
    }
    return stars;
  };

  return (
    <div className="review-card">
      <h3 className="review-card-name">{name}</h3>
      <div className="review-card-rating">{renderStars(rating)}</div>
      <p className="review-card-comment">{comment}</p>
    </div>
  );
};

export default ReviewCard;
