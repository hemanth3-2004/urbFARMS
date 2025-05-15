import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // You can use Lucide, Heroicons or any icon lib
import CropProfitCalculator from '../calculator';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calci, setCalci] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleCalci = () => setCalci(!calci);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: 'url(https://coolwallpapers.me/picsup/5478573-village-wallpapers.jpg)',
      }}
    >
      {/* ---- NavBar ---- */}
      <div className="backdrop-blur-sm bg-white/20 rounded-3xl mx-4 px-6 py-3 mt-5 flex justify-between items-center text-white">
        <div className="text-xl font-semibold">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            urb<span className="font-bold">FARMS</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/">Home</Link>
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/info">Info</Link>
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/crops">Crops</Link>
          <button className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" onClick={toggleCalci}>Profit Estimator</button>
          <Link className="hover:bg-white hover:text-black px-4 py-1 rounded-full transition" to="/faq">F.A.Qs</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="sm:hidden text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 items-center mt-4 bg-white/20 backdrop-blur-sm mx-4 rounded-2xl py-6 text-white text-lg font-medium">
          <Link onClick={toggleMenu} to="/">Home</Link>
          <Link onClick={toggleMenu} to="/info">Info</Link>
          <Link onClick={toggleMenu} to="/crops">Crops</Link>
          <button onClick={() => { toggleMenu(); toggleCalci(); }}>Profit Estimator</button>
          <Link onClick={toggleMenu} to="/faq">F.A.Qs</Link>
        </div>
      )}

      {/* ---- Hero Section ---- */}
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
              onClick={toggleCalci}
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
