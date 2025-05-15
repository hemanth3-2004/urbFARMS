import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-green-700/90 py-16 px-6 sm:px-12 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start w-full space-y-10 sm:space-y-0">
          
          {/* Left - Logo + Navigation */}
          <div className="text-white text-3xl font-bold text-left">
            <h2 className="text-[2em]">
              urb<span className="font-extrabold">FARMS</span>
            </h2>

            <nav className="flex flex-wrap gap-6 mt-6 text-lg ml-1">
              <Link to="/" className="hover:text-green-300 transition">Home</Link>
              <Link to="/info" className="hover:text-green-300 transition">Info</Link>
              <Link to="/crops" className="hover:text-green-300 transition">Crops</Link>
              <Link to="/faq" className="hover:text-green-300 transition">FAQs</Link>
            </nav>
          </div>

          {/* Right - Social Links & Contact Info */}
          <div className="flex flex-col text-white text-lg space-y-6 sm:text-right">
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition"
              >
                Twitter
              </a>
            </div>

            <address className="not-italic space-y-2">
              <p>
                Email:{' '}
                <a href="mailto:support@urbfarms.com" className="hover:text-green-300">
                  support@urbfarms.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+91-9876543210" className="hover:text-green-300">
                  +91-9876543210
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom - Centered Copyright */}
        <div className="text-white text-center text-lg pt-4 border-t border-green-500/30">
          <h2>
            © {new Date().getFullYear()} urb
            <span className="font-extrabold">FARMS</span>. All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
