import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          eBookEmporium
        </h1>
        <p className="py-4">
          Connect with eBookEmporium and stay tuned for the latest literary
          updates. Join our newsletter for daily book recommendations, exclusive
          offers, and literary insights delivered directly to your inbox. Follow
          us on social media to engage with fellow book enthusiasts, share your
          reading adventures, and be part of our vibrant community. Explore our
          diverse collection, indulge your passion for reading, and make
          eBookEmporium your ultimate destination for literary discovery. Thank
          you for being a part of our journey into the world of stories!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Genres</h6>
          <ul>
            <li className="py-2 text-sm">Fiction</li>
            <li className="py-2 text-sm">Non-Fiction</li>
            <li className="py-2 text-sm">Romance</li>
            <li className="py-2 text-sm">Thrillers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Explore</h6>
          <ul>
            <li className="py-2 text-sm">About Us</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Featured Authors</li>
            <li className="py-2 text-sm">Press Releases</li>
            <li className="py-2 text-sm">Join Our Team</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
