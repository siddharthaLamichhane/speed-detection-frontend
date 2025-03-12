import React, { useState } from "react";

const VideoSection = () => {
  const [isLive, setIsLive] = useState(true);

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-xl font-bold">Video Feed</h2>
        <button
          onClick={() => setIsLive(!isLive)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isLive ? "Switch to Recorded" : "Switch to Live"}
        </button>
      </div>
      {isLive ? (
        <div className="bg-black w-full h-96 flex items-center justify-center  text-white">
          Live Video Stream Placeholder
        </div>
      ) : (
        <div className="bg-gray-800 w-full h-96 flex items-center justify-center text-white">
          Recorded Video Placeholder
        </div>
      )}
    </div>
  );
};

export default VideoSection;
