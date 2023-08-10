import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../Assets/pngs/logo.png";
import "./navbar.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbarPage">
      <div className="header">
        <Link to="/">
          <img src={logo} alt={logo} />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/login">
              <button className="btn-outline">Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="btn-contained">Build Kitchen</button>
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#FF8323" }} />
          ) : (
            <FaBars size={30} style={{ color: "#FF8323" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
