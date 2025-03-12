import React from "react";

const AdminControls = ({ onBulkResend, onExport }) => {
  return (
    <div className="flex flex-col md:flex-row gap-9 p-4">
      <button
        onClick={onBulkResend}
        className="bg-yellow-500 hover:bg-yellow-800 text-white p-2 rounded w-full md:w-auto transition duration-300"
        aria-label="Bulk Resend Failed Notifications"
      >
        Bulk Resend Failed
      </button>
      <button
        onClick={onExport}
        className="bg-purple-500 hover:bg-purple-700 text-white p-2 rounded w-full md:w-auto transition duration-300"
        aria-label="Export Notification Logs"
      >
        Export Logs
      </button>
    </div>
  );
};

export default AdminControls;


