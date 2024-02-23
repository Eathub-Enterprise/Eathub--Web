import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../Assets/lotties/73982-healthy-or-junk-food.json";
import "./order.css";

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
    <div className="order-section">
      <span className="empty-order">
        <Lottie options={defaultOptions} height={450} width={450} />
        <h1>You have no Order Request Currently</h1>
      </span>
    </div>
  );
};

export default EmptyOrder;
