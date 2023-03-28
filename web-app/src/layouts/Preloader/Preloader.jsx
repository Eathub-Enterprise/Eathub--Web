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
  return (
    <div style={{height: '100vh'}}>
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
};

export default Preloader;
