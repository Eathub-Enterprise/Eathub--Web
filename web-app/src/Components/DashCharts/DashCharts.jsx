import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import "./dashCarts.css";

const data = [
  {
    name: "JAN",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "MAR",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "APR",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "MAY",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "JUN",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "JUL",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "AUG",
    uv: 2590,
    pv: 5600,
    amt: 1100,
  },
  {
    name: "SEP",
    uv: 1250,
    pv: 4100,
    amt: 6700,
  },
  {
    name: "OCT",
    uv: 7563,
    pv: 2895,
    amt: 7500,
  },
  {
    name: "NOV",
    uv: 985,
    pv: 1250,
    amt: 6700,
  },
  {
    name: "DEC",
    uv: 1985,
    pv: 1750,
    amt: 6700,
  },
];

const DashCharts = () => {
  return (
    <div className="dashCharts">
      <h5>Overall Restaurant Activity</h5>
      <ResponsiveContainer width={600} height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid horizontal={true} vertical={false} strokeDasharray="5 5" />
          <Bar dataKey="pv" fill="#FF8323" />
          <Bar dataKey="uv" fill="#ECE9E6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashCharts;
