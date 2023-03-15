import React, { useState, useEffect } from "react";

export const ProgressBarComp = ({ progress, color, label }) => {
  const progressBarStyles = {
    width: `${progress}%`,
    height: "10px",
    backgroundColor: color,
    borderRadius: "8px",
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-between",
          fontSize: '8px',
          fontWeight: '500'
        }}
      >
        <p>{label}</p>
        <p>{progress}%</p>
      </span>
      <div
        style={{
          width: "100%",
          border: ".05px solid black",
          borderRadius: "8px",
          height: "10px",
          backgroundColor: "#F4EDDD",
          marginBottom: "18px",
        }}
      >
        <div style={progressBarStyles} />
      </div>
    </div>
  );
};
