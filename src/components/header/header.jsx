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
      className="relative bg-cover bg-center bg-no-repeat flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          'url(https://coolwallpapers.me/picsup/5478573-village-wallpapers.jpg)',
        height: '120em', // Consider making this responsive or dynamic
      }}
    >
      {/* ---- Header at the Top ---- */}
      <div className="backdrop-blur-sm bg-white/20 rounded-full mx-10 flex items-center justify-around px-8 py-1 mt-5 md:mt-3 lg:mt-2 xl:mt-1">
        {/* Project Title Button */}
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <button className="rounded-full py-1 px-4 text-white">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              to="/"
            >
              <h2 className="text-[1.3em]">urb<span className="font-bold">FARMS</span></h2>
            </Link>
          </button>
        </div>
        <div className="hidden md:block lg:block xl:block 2xl:block">
          <button className="rounded-full py-1 px-4 text-white">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              to="/"
            >
              <h2 className="text-[1.3em] md:text-[1.5em] lg:text-[1.7em] xl:text-[2em] 2xl:text-[2.2em]">
                urb<span className="font-bold">FARMS</span>
              </h2>
            </Link>
          </button>
        </div>

        {/* Middle Navigation Buttons */}
        <div className="midContainer flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
          <Link
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition md:px-6 lg:px-8 xl:px-10"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            to="/"
          >
            <h2 className="text-[1.1em] md:text-[1.3em] lg:text-[1.5em] xl:text-[1.7em] 2xl:text-[2em]">
              Home
            </h2>
          </Link>
          <Link
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition md:px-6 lg:px-8 xl:px-10"
            to="/info"
          >
            <h2 className="text-[1.1em] md:text-[1.3em] lg:text-[1.5em] xl:text-[1.7em] 2xl:text-[2em]">
              Info
            </h2>
          </Link>
          <Link
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition md:px-6 lg:px-8 xl:px-10"
            to="/crops"
          >
            <h2 className="text-[1.1em] md:text-[1.3em] lg:text-[1.5em] xl:text-[1.7em] 2xl:text-[2em]">
              Crops
            </h2>
          </Link>
          <button
            className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition md:px-6 lg:px-8 xl:px-10"
            onClick={handleClick}
          >
            <h2 className="text-[1.1em] md:text-[1.3em] lg:text-[1.5em] xl:text-[1.7em] 2xl:text-[2em]">
              Profit Estimator
            </h2>
          </button>
        </div>

        {/* FAQs Button */}
        <div>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition md:px-6 lg:px-8 xl:px-10">
            <Link to="/faq">
              <h2 className="text-[1.1em] md:text-[1.3em] lg:text-[1.5em] xl:text-[1.7em] 2xl:text-[2em]">
                F.A.Qs
              </h2>
            </Link>
          </button>
        </div>
      </div>

      {/* ---- Hero Text Section ---- */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
          <h1
            className={`text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white tracking-wide`}
          >
            Start Your{' '}
            <span className="text-green-400">Urban Microfarming</span> with urbFARMS
          </h1>
          <p
            className={`text-2xl text-gray-200 max-w-2xl mx-auto font-bold md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl`}
          >
            Your urban oasis of freshness
          </p>
          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl`}
          >
            <Link to="/types">Explore Now</Link>
          </button>
        </div>
      </div>

      {calci && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            <CropProfitCalculator />
            <button
              onClick={handleClick}
              className="absolute bg-white top-2 right-2 hover:text-blue-600 text-blue rounded-full text-xl text-black px-3 mt-2 mr-2 p-2 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
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