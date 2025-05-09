import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CropProfitCalculator from '../calculator';

const Header = () => {
  const [calci, setCalci] = useState(false);
  function handleClick() {
    setCalci(!calci);
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[100em] sm:h-[500px] md:h-[600px] flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          'url(https://coolwallpapers.me/picsup/5478573-village-wallpapers.jpg)',
      }}
    >
      {/* ---- Header at the Top ---- */}
      <div className="backdrop-blur-sm bg-white/20 rounded-3xl mx-4 px-6 py-3 mt-5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-y-4">
        
        {/* Project Title */}
        <div className="w-full sm:w-auto text-center sm:text-left">
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/">
            <h2 className="text-white text-xl sm:text-2xl">urb<span className="font-bold">FARMS</span></h2>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto text-white text-base">
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/">Home</Link>
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/info">Info</Link>
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/crops">Crops</Link>
          <button className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" onClick={handleClick}>Profit Estimator</button>
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/faq">F.A.Qs</Link>
        </div>
      </div>

      {/* ---- Hero Text Section ---- */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide leading-tight">
            Start Your <span className="text-green-400">Urban Microfarming</span> with urbFARMS
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 font-bold">
            Your urban oasis of freshness
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 text-base sm:text-lg">
            <Link to="/types">Explore Now</Link>
          </button>
        </div>
      </div>

      {/* ---- Calculator Modal ---- */}
      {calci && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative bg-white rounded-xl shadow-xl max-w-[90vw]">
            <CropProfitCalculator />
            <button
              onClick={handleClick}
              className="absolute top-2 right-2 text-black bg-white border hover:text-red-600 rounded-full text-xl px-3 py-1"
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
