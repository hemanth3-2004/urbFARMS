import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CropProfitCalculator from '../calculator';

const Header = () => {
  const [calci, setCalci] = useState(false);
  const handleClick = () => setCalci(!calci);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] xl:min-h-[100vh] flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          'url(https://coolwallpapers.me/picsup/5478573-village-wallpapers.jpg)',
      }}
    >
      {/* ---- Header Navigation ---- */}
      <div className="backdrop-blur-sm bg-white/20 rounded-full mx-4 sm:mx-8 md:mx-10 flex flex-wrap sm:flex-nowrap justify-between items-center px-4 sm:px-8 py-2 mt-4 sm:mt-6">
        {/* Project Title */}
        <div className="mb-2 sm:mb-0">
          <button className="rounded-full text-white text-lg sm:text-xl">
            <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/">
              <h2 className="text-[1.2em] sm:text-[1.4em]">
                urb<span className="font-bold">FARMS</span>
              </h2>
            </Link>
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            to="/"
          >
            <h2 className="text-base sm:text-[1.1em]">Home</h2>
          </Link>
          <Link
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition"
            to="/info"
          >
            <h2 className="text-base sm:text-[1.1em]">Info</h2>
          </Link>
          <Link
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition"
            to="/crops"
          >
            <h2 className="text-base sm:text-[1.1em]">Crops</h2>
          </Link>
          <button
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition"
            onClick={handleClick}
          >
            <h2 className="text-base sm:text-[1.1em]">Profit Estimator</h2>
          </button>
        </div>

        {/* FAQ */}
        <div className="mt-2 sm:mt-0">
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <Link to="/faq">
              <h2 className="text-base sm:text-[1.1em]">F.A.Qs</h2>
            </Link>
          </button>
        </div>
      </div>

      {/* ---- Hero Section ---- */}
      <div className="flex-1 flex items-center justify-center px-4 text-center">
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            Start Your <span className="text-green-400">Urban Microfarming</span> with urbFARMS
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 font-semibold">
            Your urban oasis of freshness
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 text-base sm:text-lg">
            <Link to="/types">Explore Now</Link>
          </button>
        </div>
      </div>

      {/* ---- Calculator Popup ---- */}
      {calci && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-md">
            <CropProfitCalculator />
            <button
              onClick={handleClick}
              className="absolute top-2 right-2 bg-white hover:text-blue-600 text-black rounded-full text-xl px-3 py-1"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
