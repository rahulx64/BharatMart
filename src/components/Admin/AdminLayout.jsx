import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import SidebarAdmin from "./SidebarAdmin";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  const [issidebarOpen, setSidebarOpen] = useState(false);
  const togglesidebar = () => {
    setSidebarOpen(!issidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={togglesidebar}>
          <FaBars />
        </button>
        <h1 className="ml-4 text-xl font-medium uppercase">admin dashboard</h1>
      </div>

      {issidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black md:hidden "
          onclick={togglesidebar}
        >
          {" "}
        </div>
      )}
      <div
        className={`bg-gray-700 w-64 min-h-screen text-white absolute md:relative transition-transform duration-300 transform ${
          issidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-20`}
      >
        <SidebarAdmin />
      </div>
      <div className="flex-grow p-6 overflow-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
