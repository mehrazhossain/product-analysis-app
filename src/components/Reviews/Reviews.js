import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section className="container mx-auto py-4 px-4">
      <h1 className="text-center text-3xl font-semibold">
        What our customers say!
      </h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-1">
        {reviews.map((review) => (
          <Review key={review.name} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
