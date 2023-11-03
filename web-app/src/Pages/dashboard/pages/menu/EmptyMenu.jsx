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
      <span className="empty-menu" style={{marginTop: 50}}>
      <Lottie options={defaultOptions} height={400} width={400} />
        <h1>Your Menu List is currently Empty!</h1>
      </span>
    </div>
  );
};

export default EmptyMenu;
