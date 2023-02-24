import React, { useContext } from "react";
import "./widget.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ChartDataContext } from "../../helper/requireAuth";

const Widget = ({ type }) => {
  const glbData = useContext(ChartDataContext);
  
  /* variables + calculations */
  // customers
  const returnCustomer = glbData.no_of_returning_customers;
  const customer = glbData.no_of_customers;
  const newCustomer = customer - returnCustomer;
  const inactive = newCustomer;

  // orders
  const orders = glbData.total_orders;

  let data;
  switch (type) {
    case "customers":
      data = {
        title: "Customers",
        isNumber: returnCustomer,
        icon: (
          <CircularProgressbar
            value={customer}
            strokeWidth={15}
            styles={buildStyles({
              pathColor: "var(--primary)",
              trailColor: "rgba(0, 0, 0, 0.2)",
              strokeLinecap: "round",
              trail: {
                transition: "stroke-dashoffset 0.5s ease 0s",
              },
            })}
          />
        ),
        isNew: newCustomer,
        isReturning: returnCustomer,
        isInactive: inactive,
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isNumber: orders,
        icon: (
          <CircularProgressbar
            value={orders}
            strokeWidth={15}
            styles={buildStyles({
              pathColor: "var(--primary)",
              trailColor: "rgba(0, 0, 0, 0.2)",
              strokeLinecap: "round",
            })}
          />
        ),
        isNew: orders,
        // isReturning: 13,
        // isInactive: 23,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget-page">
      <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isNumber} </span>
          <div className="counter-list">
            <span className="counter-row">
              <div className="circle one"></div>
              <div className="countr-data" style={{ fontSize: 8 }}>
                {data.isNew}% New
              </div>
            </span>
            <span className="counter-row">
              <div className="circle two"></div>
              <div className="countr-data" style={{ fontSize: 8 }}>
                {data.isReturning}% Recurring
              </div>
            </span>
            <span className="counter-row">
              <div className="circle three"></div>
              <div className="countr-data" style={{ fontSize: 8 }}>
                {data.isInactive}% Inactive
              </div>
            </span>
          </div>
        </div>
        <div className="right">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
