import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-green-700 py-16 px-12 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">

        {/* Top Section */}
        <div className="flex flex-row justify-between items-start w-full">
          
          {/* Left - Logo + Navigation Links Below */}
          <div className="text-white text-3xl font-bold text-left">
            <h2 className="text-[2em]">urb<span className="font-extrabold">FARMS</span></h2>
            <div className="flex space-x-10 mt-6 text-lg ml-1">  {/* Increased gap with mt-6 */}
              <Link to="/" className="hover:text-green-300 transition">Home</Link>
              <Link to="/info" className="hover:text-green-300 transition">Info</Link>
              <Link to="/crops" className="hover:text-green-300 transition">Crops</Link>
              <Link to="/faq" className="hover:text-green-300 transition">FAQs</Link>
            </div>
          </div>

          {/* Right - Social Media Links + Contact Info */}
          <div className="flex flex-col text-right text-white text-lg space-y-6">
            <div className="flex flex-col space-y-3 text-white">  {/* Set text-white for social links */}
              <a href="#" className="hover:text-green-300 transition">Instagram</a>
              <a href="#" className="hover:text-green-300 transition">Facebook</a>
              <a href="#" className="hover:text-green-300 transition">Twitter</a>
            </div>
            <p>Email: <a href="mailto:support@urbfarms.com" className="hover:text-green-300">support@urbfarms.com</a></p>
            <p>Phone: <a href="tel:+91-9876543210" className="hover:text-green-300">+91-9876543210</a></p>
          </div>
        </div>

        {/* Copyright - Centered at Bottom */}
        <div className="text-white text-lg text-center">
          <h2>© {new Date().getFullYear()} urb<span className='font-extrabold'>FARMS</span>. All rights reserved.</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;