import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../Assets/lotties/73982-healthy-or-junk-food.json";
import './order.css'

const EmptyOrder = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div className="menu-section">
      <span className="empty-menu">
      <div className="lottie-container"><Lottie options={defaultOptions} height={350} width={350} />
     </div>
        <h1>You have no Order Request Currently</h1>
      </span>
    </div>
  );
};

export default EmptyOrder;
