import React, { useState } from 'react';

const cropData = {
  "Microgreens": { yieldPerSqm: 2, costPerKg: 125, pricePerKg: 500, cycleDays: 7 },
  "Spinach": { yieldPerSqm: 4, costPerKg: 20, pricePerKg: 50, cycleDays: 30 },
  "Mint": { yieldPerSqm: 3, costPerKg: 25, pricePerKg: 70, cycleDays: 30 },
  "Lettuce": { yieldPerSqm: 3, costPerKg: 12, pricePerKg: 50, cycleDays: 45 },
  "Cherry Tomato": { yieldPerSqm: 6, costPerKg: 25, pricePerKg: 125, cycleDays: 75 },
  "Strawberry": { yieldPerSqm: 1.2, costPerKg: 65, pricePerKg: 300, cycleDays: 90 },
  "Bell Peppers": { yieldPerSqm: 5, costPerKg: 40, pricePerKg: 125, cycleDays: 90 },
  "Kesar": { yieldPerSqm: 0.0004, costPerKg: 175000, pricePerKg: 800000, cycleDays: 150 },
  "Stevia": { yieldPerSqm: 1.5, costPerKg: 125, pricePerKg: 350, cycleDays: 120 }
};

const CropProfitCalculator = () => {
  const [area, setArea] = useState(100);
  const [crop, setCrop] = useState("Microgreens");
  const [useCustomPrice, setUseCustomPrice] = useState(false);
  const [customPrice, setCustomPrice] = useState("");
  const [profit, setProfit] = useState(null);

  const handleCalculate = () => {
    const selectedCrop = cropData[crop];
    const sqm = area / 10.76;
    const yieldTotal = selectedCrop.yieldPerSqm * sqm;
    const cost = yieldTotal * selectedCrop.costPerKg;
    const pricePerKg = useCustomPrice && customPrice > 0 ? customPrice : selectedCrop.pricePerKg;
    const income = yieldTotal * pricePerKg;
    const netProfit = income - cost;

    setProfit({
      yield: yieldTotal.toFixed(4),
      cost: cost.toFixed(2),
      income: income.toFixed(2),
      net: netProfit.toFixed(2),
      cycle: selectedCrop.cycleDays
    });
  };

  const handleReset = () => {
    setArea(100);
    setCrop("Microgreens");
    setUseCustomPrice(false);
    setCustomPrice(0);
    setProfit(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-xl rounded-2xl bg-gradient-to-br from-gray-100 to-green-100 border border-green-300 overflow">
      <h2 className="text-xl font-bold mb-4 text-green-800">🌱 Profit Estimator</h2>
      <div className="space-y-4 text-gray-800">
        <div>
          <label>Available Area (sq. ft):</label>
          <input type="number" value={area} onChange={e => setArea(Number(e.target.value))} className="w-full border rounded px-2 py-1 mt-1" />
        </div>
        <div>
          <label>Select Crop:</label>
          <select
            value={crop}
            onChange={e => setCrop(e.target.value)}
            className="w-full border rounded px-2 py-1 mt-1 bg-white"
          >
            {Object.keys(cropData).map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={useCustomPrice} onChange={() => setUseCustomPrice(!useCustomPrice)} />
            Use Custom Market Price
          </label>
          {useCustomPrice && (
            <input
              type="number"
              placeholder="Enter price per kg"
              value={customPrice}
              onChange={e => setCustomPrice(Number(e.target.value))}
              className="w-full border rounded px-2 py-1 mt-2"
            />
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={handleCalculate} className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Calculate Average Profit</button>
          <button onClick={handleReset} className="w-full mt-2 border border-green-600 text-green-700 px-4 py-2 rounded">Reset</button>
        </div>

        {profit && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl shadow">
            <p><strong>Estimated Yield:</strong> {profit.yield} {crop === 'Kesar' ? 'grams' : 'kg'}</p>
            <p><strong>Total Cost:</strong> ₹{profit.cost}</p>
            <p><strong>Income:</strong> ₹{profit.income}</p>
            <p><strong>Net Profit:</strong> ₹{profit.net}</p>
            <p><strong>Growth Cycle:</strong> {profit.cycle} days</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropProfitCalculator;