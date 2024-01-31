import React from "react";
import SingleUserIcon from "../assets/single.png";
import DoubleUserIcon from "../assets/double.png";
import TripleUserIcon from "../assets/triple.png";

const SubscriptionCards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={SingleUserIcon}
            alt="Single User Icon"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Individual Reader
          </h2>
          <p className="text-center text-4xl font-bold">₹129/month</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Unlimited Access</p>
            <p className="py-2 border-b mx-8">Personal Bookshelf</p>
            <p className="py-2 border-b mx-8">Exclusive Content</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Subscribe Now
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={DoubleUserIcon}
            alt="Double User Icon"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Book Buddy Duo
          </h2>
          <p className="text-center text-4xl font-bold">₹199/month</p>
          <span
            className="bg-[#29c4d2] py-1 px-4 rounded-full text-sm uppercase  font-bold mb-2 w-[150px] rounded-md font-medium my-4 mx-auto px-6 py-3"
            style={{ color: "white", textAlign: "center" }}
          >
            Recommended
          </span>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Two User Accounts</p>
            <p className="py-2 border-b mx-8">Shared Bookshelf</p>
            <p className="py-2 border-b mx-8">Collaborative Reading</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Subscribe Now
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={TripleUserIcon}
            alt="Triple User Icon"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Library Enthusiast Trio
          </h2>
          <p className="text-center text-4xl font-bold">₹249/month</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Three User Accounts</p>
            <p className="py-2 border-b mx-8">Expanded Book Collection</p>
            <p className="py-2 border-b mx-8">Concurrent Reading</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCards;
