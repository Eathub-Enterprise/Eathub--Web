import React, { useState } from "react";
import "./sidebar.css";
import {
  FaThLarge,
  FaCartPlus,
  FaSpa,
  FaEnvelope,
  FaMoneyBill,
  FaUser,
} from "react-icons/fa";
import imgg from "../../Assets/pngs/logo.svg";
import { useNavigate, NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaThLarge />,
    },
    {
      path: "/dashboard/orders",
      name: "Orders",
      icon: <FaCartPlus />,
    },
    {
      path: "/dashboard/menu",
      name: "Menu",
      icon: <FaSpa />,
    },
    {
      path: "/dashboard/message",
      name: "Message",
      icon: <FaEnvelope />,
    },
    {
      path: "/dashboard/payouts",
      name: "Payouts",
      icon: <FaMoneyBill />,
    },
    {
      path: "/dashboard/profile",
      name: "Profile",
      icon: <FaUser />,
    },
  ];

  return (
    <div className={`container ${isSidebarOpen ? "open" : ""}`}>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="top-section">
          <img loading="lazy" src={imgg} alt="logo" className="Logo" />
        </div>
        {menuItem.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className="link"
            activeClassName="active" // Use activeClassName to set the active class
            onClick={handleToggleSidebar}
          >
            <div className="icon">{item.icon}</div>
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
        <span className="profile-space">
          <button onClick={handleLogOut} className="sidebar-button">
            LogOut
          </button>
        </span>
      </div>
      <div
        className={`menu-icon ${isSidebarOpen ? "open" : ""}`}
        onClick={handleToggleSidebar}
      >
        ☰
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
