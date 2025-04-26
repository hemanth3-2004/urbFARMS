import React, { useState, useEffect } from 'react';

const Intro = () => {
  const images = [
    "https://babylonmicrofarms.com/wp-content/uploads/2021/08/Babylon-Micro-Farms_How-It-Works_Harvest.jpg",
    "https://puregreensaz.com/wp-content/uploads/2023/08/Indoor-Micro-Farming-4.jpg",
    "https://www.agritechtomorrow.com/images/upload/images/Babylon.jpg",
    "https://i0.wp.com/motorcitymicrofarm.com/wp-content/uploads/2021/01/microgreens.jpg?w=1000&ssl=1"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds for smoother UX

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="bg-[#faf4eb] text-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-700">
              Join the movement towards sustainable urban farming
            </h2>
            <p className="text-lg text-green-900">
              Learn how urban micro-farming can contribute to the SDGs and create a greener,
              more sustainable future. Discover the benefits of growing your own food,
              even in small spaces.
            </p>
          </div>
          <div className="md:order-1 relative rounded-lg overflow-hidden shadow-lg w-full">
            <img
              src={images[currentImageIndex]}
              alt="Microfarming"
              className="w-full h-auto opacity-90 transition-opacity duration-1000 ease-in-out"
              style={{
                animation: 'fadeEffect 2s ease-in-out infinite alternate',
              }}
            />
            <style jsx="true">{`
              @keyframes fadeEffect {
                from { opacity: 0.8; }
                to { opacity: 1; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
