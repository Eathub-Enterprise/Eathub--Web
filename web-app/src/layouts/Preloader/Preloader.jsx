import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assets/lotties/76899-delivery-grocery-and-food.json";

const Preloader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000, // Ensure the overlay is above other elements
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
  };

  return (
    <div style={overlayStyle}>
      <div>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    </div>
  );
};

export default Preloader;
