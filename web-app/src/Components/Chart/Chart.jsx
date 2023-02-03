import React from "react";
import "./chart.scss";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUNE',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JUL',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]; 

const Chart = () => {
  return <div className="chart">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#FF8323" />
        <Bar dataKey="uv" fill="#808080" />
      </BarChart>
    </ResponsiveContainer>
  </div>;
};

export default Chart;
