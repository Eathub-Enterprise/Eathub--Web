import React from "react";
import DashCharts from "../../../../Components/DashCharts/DashCharts";
import Widget from "../../../../Components/Widgetss/Widget";
import "./overview.css";

const Overview = () => {
  return (
    <div className="overview-section">
      <div className="overview-dropdown">
        <select>
          <option value="msg">Overview: All-time</option>
        </select>
      </div>
      <div className="widgets">
        <Widget type="customers" />
        <Widget type="order" />
      </div>
      <div className="charts">
        <DashCharts />
      </div>
    </div>
  );
};

export default Overview;
