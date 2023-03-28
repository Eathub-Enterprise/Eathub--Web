import React, { useState, useEffect } from "react";
import DashCharts from "../../../../Components/DashCharts/DashCharts";
import Location from "../../../../Components/Location/Location";
import ProgressBar from "../../../../Components/ProgressBar/ProgressBar";
import OrderTable from "../../../../Components/Table/OrderTable";
import Widget from "../../../../Components/Widgetss/Widget";
import Preloader from "../../../../layouts/Preloader/Preloader";
import "./overview.css";

const Overview = () => {
  const [loading, setLoading] = useState(true)
  // for performance in re-rendering
  const WidgetMemo = React.memo(Widget);
  const ProgressBarMemo = React.memo(ProgressBar);
  const DashChartsMemo = React.memo(DashCharts);
  const LocationMemo = React.memo(Location);
  const OrderTableMemo = React.memo(OrderTable);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a delay time for the preloader to show before hiding it
  }, [])

  return (
    <div className="overview-section">
      {loading && <Preloader /> }
      <div className="overview-dropdown">
        <select>
          <option value="msg">Overview: All-time</option>
        </select>
      </div>
      <div className="widgets">
        <WidgetMemo type="customers" />
        <WidgetMemo type="order" />
        <ProgressBarMemo />
      </div>
      <div className="charts">
        <DashChartsMemo />
        <LocationMemo />
      </div>
      <div className="orders">
        <OrderTableMemo />
      </div>
    </div>
  );
};

export default Overview;
