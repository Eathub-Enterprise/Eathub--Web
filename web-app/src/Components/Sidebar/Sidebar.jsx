import React, { useContext, useEffect } from "react";
import { ChartDataContext } from "../../helper/requireAuth";
import { Link } from "react-router-dom";
import "./sidebar.css";
import {
  FaThLarge,
  FaCartPlus,
  FaSpa,
  FaEnvelope,
  FaMoneyBill,
  
} from "react-icons/fa";
import imgg from "../../Assets/pngs/logo.svg";
import text from "../../Assets/images/athub-white.png";
import { useNavigate, NavLink } from "react-router-dom";
import Person from "@mui/icons-material/PermIdentityTwoTone";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const glbData = useContext(ChartDataContext);
  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
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
      icon: <Person />,
    },
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <img loading="lazy" src={imgg} alt="logo" className="Logo" />
        </div>
        {menuItem.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className="link"
            activeclassname="active"
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
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
