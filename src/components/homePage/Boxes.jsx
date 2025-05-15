

import React, { useState } from "react";

const gridItems = [{
      id: 1,
      image: "https://www.ecofarmingdaily.com/wp-content/uploads/Photo1-4-1024x680.jpg",
      label: "Microgreens",
      method: "Container/Tray farming indoors or on windowsills.",
      harvest: "7-21 days",
      light: "Indirect sunlight or LED grow light",
      watering: "Mist daily, keep soil moist",
      setup: "Shallow trays, cocopeat/soil, spray bottle, seeds",
      profitability: "Very high. Quick harvest, premium market.",
      estimatedProfit: "₹8,000-₹12,000/month",
      additionalInfo: "Highly nutritious and easy to grow indoors. Provides quick returns."
    },
    {
      id: 2,
      image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1155&h=1528",
      label: "Spinach",
      method: "Raised beds or containers.",
      harvest: "30–45 days",
      light: "Needs 4–6 hours of sunlight",
      watering: "Every 2–3 days or when soil dries",
      setup: "Medium-sized containers, compost-rich soil, seeds",
      profitability: "High demand, good regular income.",
      estimatedProfit: "₹5,000–₹8,000 per cycle (100 sq ft)",
      additionalInfo: "Rich in iron and antioxidants. Thrives in small urban spaces with minimal setup."
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlLj6jk63svjLINu8X3irM-3Re7C09-4FwQ&s",
      label: "Mint",
      method: "Pots or grow bags.",
      harvest: "60–75 days",
      light: "Partial sun, 3–4 hours",
      watering: "Water every alternate day",
      setup: "Small pots, moist soil, cuttings or seeds",
      profitability: "Medium. High use in households and restaurants.",
      estimatedProfit: "₹3,000–₹6,000 per cycle",
      additionalInfo: "Ideal for culinary uses. Easy to maintain and grows well in small containers."
    },
    {
      id: 4,
      image: "https://images5.alphacoders.com/105/1050319.jpg",
      label: "Lettuce",
      method: "Hydroponics or containers.",
      harvest: "30–40 days",
      light: "10–12 hours of sunlight or grow light",
      watering: "Daily or via hydroponic flow",
      setup: "Grow trays, nutrient solution, good drainage",
      profitability: "High in urban markets.",
      estimatedProfit: "₹6,000–₹10,000 per cycle",
      additionalInfo: "Crisp and fresh, perfect for salads. Thrives in controlled environments."
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5PZr4HYwvPevDSgCv_w6WBNt0SNDmsQn4w&s",
      label: "Cherry Tomato",
      method: "Vertical farming or grow bags with support.",
      harvest: "60–80 days",
      light: "6–8 hours full sun",
      watering: "2–3 times a week",
      setup: "Pots/grow bags, trellis, nutrient-rich soil",
      profitability: "High value crop.",
      estimatedProfit: "₹7,000–₹12,000 per cycle",
      additionalInfo: "Produces flavorful fruits, ideal for urban farmers seeking premium crops."
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-obwJit4ERYEsdAHkERg0p9k7sNz6SFEi9g&s",
      label: "Strawberry",
      method: "Vertical towers or containers.",
      harvest: "90–100 days",
      light: "6+ hours of sunlight",
      watering: "Every 2 days; avoid wetting fruit",
      setup: "Containers, rich soil, starter plants",
      profitability: "Premium market prices.",
      estimatedProfit: "₹10,000–₹15,000 per cycle",
      additionalInfo: "Delicate fruit requiring care. Perfect for luxury markets and urban setups."
    },
    {
      id: 7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMOLPCs1a-F_sO-l0bK2puuEQPi9mMqQ0Ug&s",
      label: "Bell Peppers",
      method: "Grow bags or raised beds.",
      harvest: "75–90 days",
      light: "Full sunlight, 6 hours+",
      watering: "Twice a week",
      setup: "Support stakes, compost-rich soil",
      profitability: "Steady income, used widely.",
      estimatedProfit: "₹6,000–₹10,000 per cycle",
      additionalInfo: "Vibrant colors make them popular in culinary uses. Requires moderate care."
    },
    {
      id: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzQMG6TrNpwX3YndRbpVA6zhqKvfFyUttpw&s",
      label: "Kesar (Saffron)",
      method: "Indoor in trays (controlled conditions).",
      harvest: "90–120 days",
      light: "Moderate indirect light",
      watering: "Minimal – every 10 days",
      setup: "Saffron bulbs, trays, well-drained soil, cool room",
      profitability: "Very high (luxury crop).",
      estimatedProfit: "₹15,000–₹30,000 per cycle",
      additionalInfo: "Requires precision farming. Highly prized for its aroma and color."
    },
    {
      id: 9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjadxqGGE8TV9QYDoBNUt54btyj5iME34KJg&s",
      label: "Stevia",
      method: "Pots or grow bags.",
      harvest: "90–100 days",
      light: "5–6 hours of sunlight",
      watering: "Twice a week",
      setup: "Fertile, well-drained soil, cuttings preferred",
      profitability: "High in herbal product market.",
      estimatedProfit: "₹7,000–₹11,000 per cycle",
      additionalInfo: "Natural sugar substitute. Gaining popularity in health-conscious markets."
    }
  ];

const Boxes = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="w-full p-4" style={{ backgroundColor: "#faf4eb" }}>
      {/* Crop Grid */}
      <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden shadow-sm h-32 sm:h-36 md:h-40 cursor-pointer rounded-lg"
            onClick={() => setSelectedItem(item)}
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md max-w-[90vw] overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-2">{selectedItem.label}</h2>
            <p><strong>Best Method:</strong> {selectedItem.method}</p>
            <p><strong>Time to Harvest:</strong> {selectedItem.harvest}</p>
            <p><strong>Light Needs:</strong> {selectedItem.light}</p>
            <p><strong>Watering:</strong> {selectedItem.watering}</p>
            <p><strong>Profitability:</strong> {selectedItem.profitability}</p>
            <p><strong>Estimated Profit:</strong> {selectedItem.estimatedProfit}</p>
            <p className="mt-2"><strong>Additional Info:</strong> {selectedItem.additionalInfo}</p>
            <button
              onClick={() => setSelectedItem(null)}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Boxes;
