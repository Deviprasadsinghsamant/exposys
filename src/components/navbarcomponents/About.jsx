import React from "react";

const About = () => {
  return (
    <div className="w-full p-8 bg-[#00df9a] shadow-lg rounded-md">
      <h2 className="text-4xl font-bold mb-6">About eBookEmporium</h2>
      <p className="mb-4 text-black">
        Welcome to{" "}
        <span className="text-white text-bold text-xl">eBookEmporium</span>,
        your digital gateway to a world of literary wonders. Established with a
        passion for reading, we are committed to providing an immersive and
        accessible platform for book enthusiasts worldwide.
      </p>
      <p className="mb-4 text-black  justify-between">
        At eBookEmporium, we believe in the transformative power of stories.
        Whether you're seeking thrilling adventures, heartwarming tales, or
        thought-provoking narratives, our extensive collection curated by
        passionate readers awaits to captivate your imagination.
      </p>
      <p className="mb-4 text-black">
        Our mission is to make reading a delightful and convenient experience.
        Dive into the rich tapestry of literature with our user-friendly
        interface, explore diverse genres, and connect with fellow bibliophiles
        in a vibrant online community.
      </p>
      <p className="mb-4 text-black">
        Join us on this literary journey as we celebrate the joy of reading and
        embrace the boundless possibilities that stories unfold. eBookEmporium
        is not just an online library; it's a sanctuary for minds seeking
        inspiration, entertainment, and the sheer delight of getting lost in a
        good book.
      </p>
    </div>
  );
};

export default About;
