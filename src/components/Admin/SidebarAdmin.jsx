import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaBoxOpen, FaClipboardList, FaStore, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const SidebarAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="p-6 ">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          BHARATMART
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center ">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-green-500"
            } flex items-center gap-2`
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-green-500"
            } flex items-center gap-2`
          }
        >
          <FaBoxOpen />
          <span>products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-green-500"
            } flex items-center gap-2`
          }
        >
          <FaClipboardList />
          <span>orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-blue-500" : "text-green-500"
            } flex items-center gap-2`
          }
        >
          <FaStore />
          <span>shop</span>
        </NavLink>
      </nav>

      <div className="mt-6 ">
        <button className="hover:text-red-00" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SidebarAdmin;
