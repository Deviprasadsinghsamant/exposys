import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.png";
import Book4 from "../../assets/books/book4.webp";
import Book5 from "../../assets/books/book5.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Pride and Prejudice",
    rating: 5.0,
    author: "Jane Austen",
  },
  {
    id: 2,
    img: Book2,
    title: "War and Peace",
    rating: 4.5,
    author: "leo Tolstoy",
  },
  {
    id: 3,
    img: Book3,
    title: "The Girl Who Drank The Moon",
    rating: 4.7,
    author: "Kelly Barnhill",
  },
  {
    id: 4,
    img: Book4,
    title: "To Kill A Mockingbird",
    rating: 4.4,
    author: "Harper Lee",
  },
  {
    id: 5,
    img: Book5,
    title: "The Silent Patient",
    rating: 4.5,
    author: "Alex Michaelides",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 className="text-3xl font-bold text-[#00df9a]">Top Books</h1>
            <p className="text-xl-4 text-white py-4">
              Discover worlds within pages as our top books beckon, inviting you
              to embark on enchanting journeys through the art of storytelling.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[320px] w-[250px] object-cover rounded-md mx-6  "
                  />
                  <div className="mx-6">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="text-sm text-gray-400">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span className="text-sm text-white">{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="bg-[#00df9a] w-200px rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
