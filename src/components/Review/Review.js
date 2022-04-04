import React from 'react';

const Review = (props) => {
  const { img, name, review, rating } = props.review;
  return (
    <div className="mx-auto py-5">
      <img className="rounded-full mx-auto" src={img} alt="" />
      <p className="text-center  text-2xl">{name}</p>
      <p className="text-center text-lg">"{review}"</p>
      <p className="text-center text-xl">Ratings: {rating}</p>
    </div>
  );
};

export default Review;
