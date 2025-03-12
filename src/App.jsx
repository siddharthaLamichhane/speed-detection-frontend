import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";

// import SettingsPage from "./pages/SettingsPage";
import NotificationManagementPage from "./pages/NotificationManagementPage"; 
import ViolationManagementPage from "./pages/ViolationManagementPage"
import AnalyticsPage from "./pages/AnalyticsPage";




function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/violationmanagement" element={<ViolationManagementPage />} />

        {/* <Route path="/analytic" element={<AnalyticsPage />} /> */}
        {/* <Route path="/settings" element={<SettingsPage />} /> */}
        <Route path="/notificationmanagement" element={<NotificationManagementPage />} />
       
       
        
      
      </Routes>
    </div>
  );
}

export default App;
