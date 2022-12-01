import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";
import "./navbar.css";
import e from "../../Assets/images/logo 1.png";
import text from "../../Assets/images/athub.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
  minWidth: "fit-content",
});

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <AppBar maxWidth="xl" color="inherit" position="sticky">
      <StyledToolbar>
        <div className="navbar-logo">
          <img src={e} alt={e} className="large-e" />
          <img src={text} alt={text} />
        </div>
        <div class="navbar-link-wrapper">
          {( toggleMenu || screenWidth > 768) && (<div className="links">
            <Link to="/login">
              <button className="btn-outline">Vendor Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn-contained">Become a Vendor</button>
            </Link>
          </div>)}
        </div>
        <span className="hamburger">
            <button onClick={toggleNav} className="btn">
              <MenuRoundedIcon />
            </button>
          </span>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
