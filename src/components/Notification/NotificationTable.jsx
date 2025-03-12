import React from "react";

const NotificationTable = ({ notifications = [], onResend, onViewDetails }) => {
  return (
    <div className="p-4">
      {notifications.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <caption className="text-left p-2 font-semibold">
            Notification Details
          </caption>
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Vehicle No.</th>
              <th className="border p-2">Speed</th>
              <th className="border p-2">Date/Time</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="border p-2">{item.vehicleNumber}</td>
                <td className="border p-2">{item.speed} km/h</td>
                <td className="border p-2">{item.dateTime}</td>
                <td
                  className={`border p-2 ${
                    item.status === "Failed"
                      ? "text-red-500"
                      : item.status === "Pending"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  {item.status}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => onResend(item.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Resend
                  </button>
                  <button
                    onClick={() => onViewDetails(item.id)}
                    className="bg-gray-500 text-white px-2 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-gray-500 text-center py-4">
          No notifications to display.
        </div>
      )}
    </div>
  );
};

export default NotificationTable;


