import React from "react";
import Reading from "../assets/reading.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Reading} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            E: BOOK: EMPORIUM DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Read Your Favorite Books Online Without The Need To Buy.
          </h1>
          <p>
            Welcome to eBookEmporium, your virtual sanctuary of stories. Dive
            into our vast online library, embracing the enchanting narratives
            across genres, where you can revel in the joy of reading without the
            confines of physical copies. Whether you're a casual reader or an
            avid book enthusiast, eBookEmporium invites you to explore endless
            literary adventures, unlocking a world of captivating tales right at
            your fingertips. Immerse yourself in the pleasure of online
            reading—where every story is a journey waiting to unfold
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
