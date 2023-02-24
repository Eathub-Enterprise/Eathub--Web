import React from "react";
import DashCharts from "../../../../Components/DashCharts/DashCharts";
import Location from "../../../../Components/Location/Location";
import ProgressBar from "../../../../Components/ProgressBar/ProgressBar";
import OrderTable from "../../../../Components/Table/OrderTable";
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
        <ProgressBar />
      </div>
      <div className="charts">
        <DashCharts />
        <Location />
      </div>
      <div className="orders">
        <OrderTable />
      </div>
    </div>
  );
};

export default Overview;
