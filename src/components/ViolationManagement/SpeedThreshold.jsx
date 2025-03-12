import React, { useState } from "react";

const SpeedThreshold = ({ onThresholdChange }) => {
  const [threshold, setThreshold] = useState("80"); // Default threshold
  const [newThreshold, setNewThreshold] = useState(""); // Input for setting new threshold

  const handleSetThreshold = () => {
    if (newThreshold === "" || isNaN(newThreshold) || Number(newThreshold) < 0) return;
    if (threshold !== newThreshold) {
      const confirmChange = window.confirm("Do you want to change the speed threshold?");
      if (confirmChange) {
        setThreshold(newThreshold);
        onThresholdChange(Number(newThreshold)); // Notify parent
        setNewThreshold(""); // Clear input
      }
    }
  };

  return (
    <div className="p-4 bg-blue-50 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        Adjust Speed Threshold
      </h2>
      <div className="flex items-center gap-4">
        <label className="font-medium text-gray-700">
          Threshold Speed (km/h):
        </label>
        <input
          type="number"
          value={newThreshold}
          onChange={(e) => setNewThreshold(e.target.value)}
          className="border border-blue-300 p-2 rounded w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          placeholder={threshold}
        />
        <button
          onClick={handleSetThreshold}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default SpeedThreshold;
