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
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        maxInlineSize:"100%",
        height: "100h",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        marginLeft: "8rem",
        backgroundColor: "white",
      }}
    >
      <div style={{ height: "100vh", zIndex: "100" }}>
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
    </div>
  );
};

export default Preloader;
