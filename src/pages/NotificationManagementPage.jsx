import React from "react";
import Header from "../components/common/Header"; 
import SearchFilter from "../components/Notification/SearchFilter";
import NotificationTable from "../components/Notification/NotificationTable";
import AdminControls from "../components/Notification/AdminControls";



const Notification = () => {
  return (
    <div className="flex-1 overflow-auto  relative z-10 bg-gray-900">
      <Header title="Notification" />

      <main className="max-w-4xl mx-auto  py-6 px-4 lg:px-8">
        <SearchFilter />
		  <NotificationTable /> 
		<AdminControls /> 
		

		
      </main>
    </div>
  );
};

export default Notification;


