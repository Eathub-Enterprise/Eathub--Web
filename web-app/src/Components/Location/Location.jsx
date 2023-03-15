import React, { useContext } from "react";
import "./location.css";
import graph from "../../Assets/images/Graph.png";
import { ChartDataContext } from "../../helper/requireAuth";
import Preloader from "../../layouts/Preloader/Preloader";

const Location = () => {
  const glbData = useContext(ChartDataContext);
  const locationData = glbData.getCustomerLocations;

  if (!locationData || Object.keys(locationData).length === 0) {
    return <Preloader />;
  }

  // dealing with a bug here 😭

  return (
    <div className="charts-location">
      <h5>Customer's Location</h5>
      <div className="location-container">
        <div className="charts-places">
          <ul>
            {Object.keys(locationData).map((key, index) => {
              return <li key={index}>{key}</li>;
            })}
          </ul>
        </div>
        <div className="location-numbers">
          <ul>
            {Object.values(locationData).map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>
        <div className="location-graph">
          <ul>
            {Object.keys(locationData).map((key, index) => {
              return (
                <li key={index}>
                  <img src={graph} alt={graph} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
