import React from "react";
import { FaStar } from "react-icons/fa";
import './progressBar.css'

const ProgressBar = () => {
    const data = {
        rating: 3.8
    }
  return (
    <div className="progress-section">
      <div className="progress"></div>
      <div className="progress-rating">
        <h3>Your Rating</h3>
        <h1>{data.rating} <FaStar /></h1>
      </div>
    </div>
  );
};

export default ProgressBar;
