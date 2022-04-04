import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <>
      <section className="container mx-auto py-4 px-4">
        <div className=" flex align-middle items-center">
          <div className="w-1/2 m-5">
            <h1 className="text-6xl font-black">Model S Plaid</h1>
            <h1 className="text-6xl font-black" style={{ color: '#EA6221' }}>
              Beyond Ludicrous
            </h1>
            <p className="pt-8 text-xl mb-10">
              Model S Plaid has the quickest acceleration of any vehicle in
              production. Updated battery architecture for all Model S trims
              enables back-to-back track runs without performance degradation.
            </p>
            <button className="rounded-full bg-green-200 p-1 w-40 text-xl ml-10">
              Explore
            </button>
          </div>
          <div className="w-1/2 m-5">
            <img
              className="w-full"
              src={
                'https://www.topgear.com/sites/default/files/2021/07/0x0-ModelS_02.jpg?w=892&h=502'
              }
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto py-4 px-4 mb-40">
        <h1 className="text-5xl text-center mt-10">Customer Reviews(3)</h1>
        <div className="grid gap-4 grid-cols-3 grid-rows-1">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.name} review={review}></Review>
          ))}
        </div>
        <Link to="/reviews" element={<Reviews></Reviews>}>
          <div className="flex justify-center items-center h-100">
            <button className="rounded-full bg-green-200 p-1 w-40 text-sm ml-10">
              See all Reviews
            </button>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Home;
