import React from "react";
import "./SecondSec.css";
import Market from "../../Assets/images/Market.png";

const SecondSec = () => {
  return (
    <div className="SecondSection">
      <p className="secondP">
        How We <span className="Pcolours">Serve</span> You
      </p>
      <div className="secondContain">
        <img src={Market} alt="A marketplace" className="Mimg" loading="lazy"/>
        <div className="marketContainers">
          <p className="marketP">Customer Starved?</p>
          <p className="marketP2">Looking For Customers?</p>
          <p className="marketP3">
            Unlock a world of new opportunities and connect with a vast crowd
            craving delicious culinary experiences. Say goodbye to limited
            visibility and embrace the path to expanding your customer base with
            Eathub as a Vendor!.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSec;
