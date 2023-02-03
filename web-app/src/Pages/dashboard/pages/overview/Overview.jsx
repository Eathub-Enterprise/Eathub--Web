import React from "react";
import Chart from "../../../../Components/Chart/Chart";
import Featured from "../../../../Components/Featured/Featured";
import Widget from "../../../../Components/Widgetss/Widget";
import "./overview.css";

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="widgets">
        <Widget type="customers" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart />
      </div>
    </div>
  );
};

export default Overview;
