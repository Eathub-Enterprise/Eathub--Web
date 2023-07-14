import React from "react";
import "./ThirdSec.css";
import Order from "../../Assets/images/order.png";

const ThirdSec = () => {
  return (
    <div className="ThirdSection">
      <div className="thirdsec">
        <p className="ThirdP1">Customer Starved?</p>
        <p className="ThirdP2">Seamless Order Management</p>
        <p className="ThirdP3">
          Our user-friendly online platform provides you with a centralized hub
          for managing your orders efficiently. You can easily view and process
          incoming orders, update inventory, and track delivery status in
          real-time. This intuitive system simplifies your workflow, allowing
          you to focus on what you do best—providing outstanding products.
        </p>
      </div>
      <img src={Order} className="mobimg" alt="A mobile photos" />
    </div>
  );
};

export default ThirdSec;
