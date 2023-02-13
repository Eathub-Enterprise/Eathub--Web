import React from "react";
import "./widget.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "customers":
      data = {
        title: "Customers",
        isNumber: 2409,
        icon: <CircularProgressbar value={70} strokeWidth={15} styles={buildStyles({
          pathColor: 'var(--primary)',
          trailColor: 'rgba(0, 0, 0, 0.2)',
          strokeLinecap: 'round',
          trail: {
            transition: 'stroke-dashoffset 0.5s ease 0s',
          }
        })} />,
        isNew:62,
        isReturning: 13,
        isInactive: 23
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isNumber: 4209,
        icon: <CircularProgressbar value={65} strokeWidth={15} styles={buildStyles({
          pathColor: 'var(--primary)',
          trailColor: 'rgba(0, 0, 0, 0.2)',
          strokeLinecap: 'round'
        })} />,
        isNew:62,
        isReturning: 13,
        isInactive: 23
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
              <div className="countr-data" style={{fontSize: 8}}>{data.isNew}% New</div>
            </span>
            <span className="counter-row">
              <div className="circle two"></div>
              <div className="countr-data" style={{fontSize: 8}}>{data.isReturning}% Returning</div>
            </span>
            <span className="counter-row">
              <div className="circle three"></div>
              <div className="countr-data" style={{fontSize: 8}}>{data.isInactive}% Inactive</div>
            </span>
          </div>
        </div>
        <div className="right">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
