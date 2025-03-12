import React, { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [dateRange, setDateRange] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    onFilter({ status, dateRange });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 p-4 bg-gray-900 rounded-md">
      <input text-black
        type="text"
        placeholder="Search by Vehicle No."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 bg-white rounded w-full md:w-1/3 text-black"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2   bg-white rounded w-full md:w-1/3 text-black"
      >
        <option value="">Filter by Status</option>
        <option value="sent">Sent</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
      </select>
      <input
        type="date"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
        className="border p-2   bg-white rounded w-full md:w-1/3 text-black"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded w-full md:w-auto"
      >
        Search
      </button>
      <button
        onClick={handleFilter}
        className="bg-green-500 text-white p-2 rounded w-full md:w-auto"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default SearchFilter;
