import React, { useState } from "react";

const FineManagement = () => {
  const [fixedFine, setFixedFine] = useState(100); // Default fine
  const [newFine, setNewFine] = useState(""); // Fine input state
  const violations = [
    { id: 1, vehicleNumber: "ABC123" },
    { id: 2, vehicleNumber: "XYZ789" },
    { id: 3, vehicleNumber: "LMN456" },
  ];

  const handleSetFine = () => {
    if (newFine === "") return; // Prevent setting empty fine
    if (fixedFine !== Number(newFine)) {
      const confirmChange = window.confirm("Do you want to change the fine?");
      if (confirmChange) {
        setFixedFine(Number(newFine));
        setNewFine(""); // Clear input after setting
      }
    }
  };

  return (
    <div className="p-4 bg-blue-50 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Manage Fines</h2>

      {/* Fine Adjustment */}
      <div className="mb-4 flex items-center gap-4">
        <label className="font-medium text-gray-700">Set Fine (RS):</label>
        <input
          type="number"
          value={newFine}
          onChange={(e) => setNewFine(e.target.value)}
          className="border border-blue-300 p-2 rounded w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          placeholder="Enter fine"
        />
        <button
          onClick={handleSetFine}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Set Fine
        </button>
      </div>

      {/* Fine Display Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Vehicle No.</th>
            <th className="border p-2">Fine (RS)</th>
          </tr>
        </thead>
        <tbody>
          {violations.map((violation) => (
            <tr key={violation.id} className="hover:bg-gray-100">
              <td className="border p-2">{violation.vehicleNumber}</td>
              <td className="border p-2">{fixedFine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FineManagement;
