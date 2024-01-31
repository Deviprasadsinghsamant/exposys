import React from "react";

import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-2xl font-bold p-2">
          Welcome to eBookEmporium, where literary treasures await.
        </p>
        <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold md:py-8">
          Immerse yourself in a world of captivating stories, explore diverse
          genres, and embark on new adventures with our curated collection of
          books.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-4xl sm:text-3xl 4 text-xl font-bold py-6">
            Choose your flavor of storytelling
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl 4 text-xl font-bold md:pl-4 pl-2"
            strings={[
              "fiction?",
              "fantasy?",
              "thrillers?",
              "poetry?",
              "crime?",
            ]}
            typeSpeed={80}
            backSpeed={60}
            loop
          />
        </div>
        <p className="md:text-2xl py-6 text-xl font-bold text-gray-500">
          Click 'Get Started' to dive into the immersive world of our online
          library and begin your reading adventure.
        </p>

        <button className="bg-[#00df9a] w-200px rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          <Link to="/login">Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
