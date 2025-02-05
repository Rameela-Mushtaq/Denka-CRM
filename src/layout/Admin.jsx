import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";


const Admin = () => {
  return (
    <div className="w-full min-h-screen flex justify-between overflow-auto relative">
      {/* Sidebar or Admin Menu can be added here */}
      <div className='fixed max-h-screen overflow-auto inset-0 z-50 transition-transform transform -translate-x-full md:static md:translate-x-0 xl:w-[19%] lg:w-[25%] md:w-[29%] w-[70%] custom-scrollbar'>
      <Sidebar />
      </div>


      <div className="flex-1 xl:w-[84%] w-full lg:w-[77%] md:w-[74%] max-h-screen overflow-auto">
        <TopBar />
      <Outlet /> {/* This will render admin pages */}  
      </div>
        
    </div>
  );
};

export default Admin;
