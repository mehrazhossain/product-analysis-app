import React from 'react';

const Home = () => {
  return (
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
  );
};

export default Home;
