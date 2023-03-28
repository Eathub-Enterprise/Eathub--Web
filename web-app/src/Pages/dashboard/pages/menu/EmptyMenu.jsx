import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../../../Assets/lotties/5081-empty-box.json";


const EmptyMenu = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div className="menu-section">
      <span className="empty-menu">
      <Lottie options={defaultOptions} height={400} width={400} />
        <h1>Your Menu List is currently Empty!</h1>
        <button className="menu-btn">
          <Link to="/dashboard/menu/addMenu" className="menu-link">
            Add Meal
          </Link>
        </button>
      </span>
    </div>
  );
};

export default EmptyMenu;
