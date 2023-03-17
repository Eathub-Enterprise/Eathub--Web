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
    <div>
      <Lottie options={defaultOptions} height={600} width={600} />
    </div>
  );
};

export default Preloader;
