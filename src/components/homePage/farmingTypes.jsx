import React, { useRef, useState } from 'react';
import FarmingCard from './farmingCard';

const FarmingTypes = () => {
  const farmingTypes = [
    {
      title: "Vertical Farming",
      description: "Growing plants in vertically stacked layers. Saves space and increases yield.",
      videoUrl: "https://youtu.be/QzDHzAgzYiY?si=QXyq8j-QY9H7kvLZ",
      imageUrl: "https://www.treehugger.com/thmb/D1wPcjo2XEkYsdsMfLqWNXljYj8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/NickGreenShockinglyFresh-4161-17d215331d8a457f8d6ae959b9dec1a2.jpg",
    },
    {
      title: "Hydroponics",
      description: "Growing plants without soil, using water and nutrient solutions.",
      videoUrl: "https://youtu.be/wBcnUUkdavE?si=WV9u-A5C3SIS4lpd",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXnFW-5AFSvIgr-mazt07WXSJaF-T-bymIEU1eTSqPuPMQ_8Hsv-Lr3J_whA8UnbXXOI&usqp=CAU",
    },
    {
      title: "Aquaponics",
      description: "Combining aquaculture (raising fish) and hydroponics (growing plants without soil).",
      videoUrl: "https://youtu.be/yhcAOE2JOVs?si=-6hVtcr6swcKcGd4",
      imageUrl: "https://www.pflowmeters.com/uploads/202029849/n202009091752201110639.jpg",
    },
    {
      title: "Container Gardening",
      description: "Growing plants in pots, containers, or other vessels.",
      videoUrl: "https://youtu.be/ZW6HUQRhnsg?si=L6iJjGcCWK0YGZJy",
      imageUrl: "https://cdn.shopify.com/s/files/1/0573/3993/6868/t/6/assets/container-gardening-deck-1667854759960.jpg?v=1667854761",
    },
    {
        title: "Aeroponics",
        description: "Grow plants in air using nutrient-rich mist, no soil or water beds needed",
        videoUrl: "https://youtu.be/tSuwets_j4Y?si=nctJs9EcQFgIr-QW",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-C825to00UmHpBBaLcNJAcWxm5iVOAV9inCrcaXolGCD0-RWGbyJhkdmm3fWc5f2HU-o&usqp=CAU",
      },
      {
        title: "Rooftop Gardening",
        description: "Turn unused rooftops into lush, productive green spaces.",
        videoUrl: "https://youtu.be/lczgUj4InX0?si=n00HlRv0In2-gitR",
        imageUrl: "https://t4.ftcdn.net/jpg/12/32/86/59/360_F_1232865992_2sgOrfNsIVbHZmNZtKQPm3UAPNF07J23.jpg",
      },
      {
        title: "Balcony/ Windowsill Farming",
        description: "Grow fresh herbs and veggies right outside your window.",
        videoUrl: "https://youtu.be/h01CWn-aEdM?si=XmlX_X5dD3t2L-Ay",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6kS1hCPKPC4AGOpICZmiPStTM94ZGgBX81mpNzBCZJwaiFai_SwadL7PVVc4yt41Pig&usqp=CAU",
      },
      {
        title: "Microgreens Farming",
        description: "Harvest nutrient-packed greens in just days from seed to plate.",
        videoUrl: "https://youtu.be/XQXL_-2obrk?si=SEmZNZFpax7OX72F",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sM_ydRaM0jiZXnxLKxQ90guzfct8FNkc8g&s",
      },

   
  ];

  const [playing, setPlaying] = useState(null);
  const videoRefs = useRef({});

  return (
<div className="bg-gradient-to-br from-green-900 via-black to-green-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
          Explore Different Farming Methods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {farmingTypes.map((type, index) => (
            <FarmingCard
              key={index}
              index={index}
              playing={playing}
              setPlaying={setPlaying}
              videoRefs={videoRefs}
              {...type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmingTypes;
