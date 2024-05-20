import React, { useState } from 'react';
import ReviewCard from './ReviewCard';
import './ReviewList.css'; // Create and import a CSS file for styling

const ReviewList = () => {
  const [reviews] = useState([
    { name: 'John Doe', rating: 5, comment: 'Excellent service!' },
    { name: 'Jane Smith', rating: 4, comment: 'Very good, will come again.' },
    { name: 'Sam Johnson', rating: 3, comment: 'Average experience.' },
  ]);

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          rating={review.rating}
          comment={review.comment}
        />
      ))}
    </div>
  );
};

export default ReviewList;
