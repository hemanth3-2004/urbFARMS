import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Define Poppins font globally (simulate Next.js behavior)
const poppins = {
  style: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400', // You can include multiple weights if needed (e.g., 500, 600)
  },
};

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  // Animation variants
  const itemVariants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
  };

  // Initial FAQ data
  const faqData = [
    {
      question: 'What is Urban Farming?',
      answer: 'Urban farming is the practice of cultivating, processing, and distributing food in or around urban areas.',
    },
    {
      question: 'Why is Urban Farming important?',
      answer: 'It increases access to fresh food, reduces transportation costs, creates green spaces, and promotes community engagement.',
    },
    {
      question: 'What types of farming can be done in an urban setting?',
      answer: 'Various methods like vertical farming, hydroponics, aquaponics, and container gardening can be used.',
    },
    {
      question: 'How can I get started with urban farming?',
      answer: 'You can start small with a container garden, join a community garden, or explore vertical farming systems.',
    },
    {
      question: 'What are the types of Micro-Farming I can try at home?',
      answer:
        'You can explore vertical farming, hydroponics, aquaponics, container farming, and other space-efficient methods suitable for small areas.',
    },
    {
        question: "What is the minimum area required for micro-farming?",
        answer: "Even with just a few square feet, you can start farming. We help suggest the best methods and crops based on your available space."
      },
      {
        question: "What is the cost of infrastructure for micro-farming?",
        answer: "Initial setup may include containers, soil, fertilizers, tools, or hydroponic systems. We'll give you an estimate based on your chosen method."
      },
      {
        question: "What is the complete farming cost from start to harvest?",
        answer: "We provide a detailed cost analysis for the entire farming cycle, helping you plan your budget effectively."
      },
      {
        question: "Is there a step-by-step process to follow for micro-farming?",
        answer: "Yes, we offer simple guides and videos covering setup, planting, watering, harvesting, and maintenance."
      },
  ];

  return (
    <div
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#f8f4e8' }} // Apply background color directly
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`${'text-3xl sm:text-4xl font-bold mb-8 text-gray-900 text-center'} ${
            poppins.style.fontFamily
          }`}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {/* Map through FAQ data to generate items */}
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-lg shadow-md border border-white/90 overflow-hidden"
            >
              {/* Question Header */}
              <button
                className={`flex items-center justify-between w-full px-6 py-4 text-left font-semibold transition-colors duration-300 hover:bg-white/20 text-gray-900 ${poppins.style.fontFamily}`}
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                <span>{item.question}</span>
                <motion.div
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </button>

              {/* Answer Content */}
              <AnimatePresence>
                {openItem === index && (
                  <motion.div
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="px-6 pb-6 leading-relaxed text-gray-700"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const gridItems = [
    { id: 1, image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1155&h=1528", label: "Spinach", method: "Raised beds or containers", harvest: "30–45 days", light: "4–6 hours sunlight", profitability: "₹5,000–₹8,000 per cycle" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlLj6jk63svjLINu8X3irM-3Re7C09-4FwQ&s", label: "Mint", method: "Pots or grow bags", harvest: "60–75 days", light: "Partial sun, 3–4 hours", profitability: "₹3,000–₹6,000 per cycle" },
    { id: 3, image: "https://images5.alphacoders.com/105/1050319.jpg", label: "Lettuce", method: "Hydroponics or containers", harvest: "30–40 days", light: "10–12 hours sunlight or grow light", profitability: "₹6,000–₹10,000 per cycle" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5PZr4HYwvPevDSgCv_w6WBNt0SNDmsQn4w&s", label: "Cherry Tomatoes", method: "Vertical farming or grow bags", harvest: "60–80 days", light: "6–8 hours full sun", profitability: "₹7,000–₹12,000 per cycle" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzQMG6TrNpwX3YndRbpVA6zhqKvfFyUttpw&s", label: "Saffron", method: "Raised beds or containers", harvest: "30–45 days", light: "4–6 hours sunlight", profitability: "₹5,000–₹8,000 per cycle" },
    { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-obwJit4ERYEsdAHkERg0p9k7sNz6SFEi9g&s", label: "Strawberry", method: "Pots or grow bags", harvest: "60–75 days", light: "Partial sun, 3–4 hours", profitability: "₹3,000–₹6,000 per cycle" },
    { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMOLPCs1a-F_sO-l0bK2puuEQPi9mMqQ0Ug&s", label: "Bell Pepper", method: "Hydroponics or containers", harvest: "30–40 days", light: "10–12 hours sunlight or grow light", profitability: "₹6,000–₹10,000 per cycle" },
    { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5PZr4HYwvPevDSgCv_w6WBNt0SNDmsQn4w&s", label: "Micro Greens", method: "Vertical farming or grow bags", harvest: "60–80 days", light: "6–8 hours full sun", profitability: "₹7,000–₹12,000 per cycle" },
    { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjadxqGGE8TV9QYDoBNUt54btyj5iME34KJg&s", label: "Stevia", method: "Vertical farming or grow bags", harvest: "60–80 days", light: "6–8 hours full sun", profitability: "₹7,000–₹12,000 per cycle" },

  ];
