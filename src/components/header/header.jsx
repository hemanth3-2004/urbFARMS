import React from 'react';

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[120em] sm:h-[500px] md:h-[600px] flex flex-col"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      {/* ---- Header at the Top ---- */}
      <div className="backdrop-blur-sm bg-white/20 rounded-full mx-10 flex items-center justify-around px-8 py-2 mt-5">
        {/* Project Title Button */}
        <div>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <h2 className='text-[1.3em]'>urb<span className='font-bold'>FARM</span></h2>
          </button>
        </div>

        {/* Middle Navigation Buttons */}
        <div className="midContainer flex items-center gap-6">
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <h2 className='text-[1.1em]'>Home</h2>
          </button>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <h2 className='text-[1.1em]'>Info</h2>
          </button>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <h2 className='text-[1.1em]'>Crops</h2>
          </button>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <h2 className='text-[1.1em]'>Calculator</h2>
          </button>
        </div>

        {/* FAQs Button */}
        <div>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <h2 className='text-[1.1em]'>F.A.Qs</h2>
          </button>
        </div>
      </div>

      {/* ---- Hero Text Section ---- */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
            Start Your <span className="text-green-400">Balcony Garden</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Discover the joy of urban gardening and bring nature to your doorstep.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 text-base sm:text-lg">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
