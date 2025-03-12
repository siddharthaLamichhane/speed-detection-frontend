import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const ViolationData = [
  { name: "Jul", Violation: 4200 },
  { name: "Aug", Violation: 3800 },
  { name: "Sep", Violation: 5100 },
  { name: "Oct", Violation: 4600 },
  { name: "Nov", Violation: 5400 },
  { name: "Dec", Violation: 7200 },
  { name: "Jan", Violation: 6100 },
  { name: "Feb", Violation: 5900 },
  { name: "Mar", Violation: 6800 },
  { name: "Apr", Violation: 6300 },
  { name: "May", Violation: 7100 },
  { name: "Jun", Violation: 7500 },
];

const ViolationOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Violation Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={ViolationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"  />

            <XAxis dataKey={"name"} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af"/>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Line
              type="monotone"
              dataKey="Violation"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ViolationOverviewChart;
