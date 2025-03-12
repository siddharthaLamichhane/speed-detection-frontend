import React from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import VideoSection from "../components/ViolationManagement/VideoSection";
import SpeedThreshold from "../components/ViolationManagement/SpeedThreshold";
import FineManagement from "../components/ViolationManagement/FineManagement";

const ViolationManagementPage = () => {
  return (
    <div className="flex-1 overflow-auto  bg-gray-900 relative z-10">
      <Header title="Violation Management" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1  mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gray-900 p-4 rounded shadow space-y-6 text-black">
            <VideoSection />
            <SpeedThreshold />
            <FineManagement />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ViolationManagementPage;
