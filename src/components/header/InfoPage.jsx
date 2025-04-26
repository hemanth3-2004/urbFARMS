import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Home, Heart, Coins } from 'lucide-react';

const InfoPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#f8f4e8] font-[Nunito] p-16 rounded-2xl shadow-xl flex flex-col items-center text-center"
    >
      {/* Original Content */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-8 tracking-tight">
        About Urban Microfarming
      </h2>

      <p className="text-lg leading-relaxed text-gray-600 mb-8 max-w-3xl">
        <span className="font-semibold text-[#2c3e50]">Microfarming</span> is the practice of cultivating crops on a small scale within urban environments.
        It transforms spaces like balconies, rooftops, and small plots into vibrant gardens, producing fresh, local food and fostering a deeper connection with nature.
      </p>

      <p className="text-lg leading-relaxed text-gray-600 mb-12 max-w-3xl">
        Our project is dedicated to promoting and empowering urban microfarming,
        addressing key challenges and creating a more sustainable and thriving future:
      </p>

      {/* Key Benefits Section */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-md w-72 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-lg transition">
          <Home size={48} color="#4CAF50" className="mb-4" />
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">Enhancing Food Security</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Increasing access to fresh, nutritious food in our cities.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md w-72 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-lg transition">
          <Flower size={48} color="#81C784" className="mb-4" />
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">Promoting Sustainability</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Minimizing our environmental footprint and fostering thriving urban ecosystems.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md w-72 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-lg transition">
          <Heart size={48} color="#F06292" className="mb-4" />
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">Fostering Community</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Building connections and providing education around local food.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md w-72 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-lg transition">
          <Coins size={48} color="#FFB74D" className="mb-4" />
          <h3 className="text-2xl font-semibold text-[#2c3e50] mb-2">Economic Empowerment</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Creating income opportunities through local food production.
          </p>
        </div>
      </div>

      {/* Success Stories Section in a Grid */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8 tracking-tight">
        Success Stories in Urban Microfarming
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl">
        {/* Story 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
            Mohit Nijhawan – Chandigarh
          </h3>
          <p><strong>Background:</strong> Left a corporate job in 2020.</p>
          <p><strong>Setup:</strong> Started with 3 racks in a 9 sq ft area; expanded to 500 sq ft.</p>
          <p><strong>Earnings:</strong> Achieved a monthly turnover of ₹12 lakh from microgreens farming.</p>
        </div>

        {/* Story 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
            Vidyadharan – Chennai
          </h3>
          <p><strong>Setup:</strong> Established a 300 sq ft microgreens unit with an investment under ₹1 lakh.</p>
          <p><strong>Earnings:</strong> Earns approximately ₹1 lakh per month.</p>
        </div>

        {/* Story 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
            Linesh Pillai – Mumbai
          </h3>
          <p><strong>Background:</strong> Former banker who started India's first vertical farm in 2012.</p>
          <p><strong>Business:</strong> UGF Farms supplies to restaurants, hotels, and retailers across cities.</p>
        </div>

        {/* Story 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">
            Aditi Mali – Gujarat
          </h3>
          <p><strong>Background:</strong> Teacher turned urban farmer.</p>
          <p><strong>Business:</strong> Founded Mali Greens, offering microgreens and consultancy services.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InfoPage;