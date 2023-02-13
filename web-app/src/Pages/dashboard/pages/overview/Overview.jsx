import React from "react";
import DashCharts from "../../../../Components/DashCharts/DashCharts";
import Location from "../../../../Components/Location/Location";
import ProgressBar from "../../../../Components/ProgressBar/ProgressBar";
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
        {/* Convert to Component */}
        <div className="order-container">
        <h5>Recent Orders</h5>
        <table>
          <tbody>
            <tr>
              <td>Rice & Stew</td>
              <td>#6000</td>
              <td>Alimosho</td>
              <td style={{color: 'lightgreen'}}>Delivered</td>
            </tr>
            <tr>
              <td>Rice & Stew</td>
              <td>#6000</td>
              <td>Alimosho</td>
              <td style={{color: 'lightgreen'}}>Delivered</td>
            </tr>
            <tr>
              <td>Rice & Stew</td>
              <td>#6000</td>
              <td>Alimosho</td>
              <td style={{color: 'red'}}>Cancelled</td>
            </tr>
            <tr>
              <td>Rice & Stew</td>
              <td>#6000</td>
              <td>Alimosho</td>
              <td style={{color: 'red'}}>Cancelled</td>
            </tr>
            <tr>
              <td>Rice & Stew</td>
              <td>#6000</td>
              <td>Alimosho</td>
              <td style={{color: 'lightgreen'}}>Delivered</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
