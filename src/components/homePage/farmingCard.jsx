import React from 'react';
import { motion } from 'framer-motion';

const FarmingCard = ({ title, description, videoUrl, imageUrl, index, playing, setPlaying }) => {
  const isPlaying = playing === index;

  const getEmbedUrl = (url) => {
    const videoId = new URL(url).searchParams.get("v") || url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;
  };

  return (
    <div
      className="bg-white/5 backdrop-blur-md rounded-lg shadow-lg p-6 transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-green-500/20 cursor-pointer"
      onClick={() => setPlaying(isPlaying ? null : index)}
    >
      <div className="relative rounded-md overflow-hidden mb-4 group h-48">
        {isPlaying ? (
          <motion.iframe
            src={getEmbedUrl(videoUrl)}
            className="absolute top-0 left-0 w-full h-full rounded-md"
            allow="autoplay; clipboard-write"
            allowFullScreen
            frameBorder="0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            title={title}
          />
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default FarmingCard;
