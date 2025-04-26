import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import CropProfitCalculator from '../calculator';

const Header = () => {

  const [calci,setCalci] = useState(false);
  function handleClick(){
    setCalci(!calci);
  }
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-[120em] sm:h-[500px] md:h-[600px] flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          'url(https://coolwallpapers.me/picsup/5478573-village-wallpapers.jpg)',
      }}
    >
      {/* ---- Header at the Top ---- */}
      <div className="backdrop-blur-sm bg-white/20 rounded-full mx-10 flex items-center justify-around px-8 py-1 mt-5">
        {/* Project Title Button */}
        <div>
          <button className="rounded-full py-1 px-4 text-white ">
            <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/"><h2 className='text-[1.3em]'>urb<span className='font-bold'>FARMS</span></h2></Link>
          </button>
        </div>

        {/* Middle Navigation Buttons */}
        <div className="midContainer flex items-center gap-6">
          <Link className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/">
            <h2 className='text-[1.1em]'>Home</h2>
          </Link>
          <Link className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition" to="/info">
            <h2 className='text-[1.1em]'>Info</h2>
          </Link>
          <Link className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition" to="/crops">
            <h2 className='text-[1.1em]'>Crops</h2>
          </Link>
          <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition" onClick={handleClick}>
            <h2 className='text-[1.1em]'>Profit Estimator</h2>
          </button>
        </div>

        {/* FAQs Button */}
        <div>
        <button className="rounded-full py-1 px-4 text-white hover:bg-white hover:text-black transition">
            <Link to="/faq"><h2 className='text-[1.1em]'>F.A.Qs</h2></Link>
          </button>
        </div>
      </div>

      {/* ---- Hero Text Section ---- */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white tracking-wide">
            Start Your <span className="text-green-400">Urban Microfarming</span> with urbFARMS
          </h1>
          <p className="text-2xl text-gray-200 max-w-2xl mx-auto font-bold">
            Your urban oasis of freshness
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 text-base sm:text-lg">
            <Link to="/types">
            Explore Now</Link>
          </button>
        </div>
      </div>
      

      {calci && (
  <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="relative">
      <CropProfitCalculator />
      <button
        onClick={handleClick}
        className="absolute  bg-white top-2 right-2 hover:text-blue-600 text-blue rounded-full text-xl text-black px-3 mt-2 mr-2 p-2 "
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
