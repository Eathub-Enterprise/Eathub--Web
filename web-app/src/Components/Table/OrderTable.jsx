import React, { useState, useEffect } from "react";
import authService from "../../services/auth/authService";
import "./orderTable.css";
import foodImg from "../../Assets/images/foodImg.png";
import { useGetOrderedMealQuery } from "../../model/auth/authServices";

const OrderTable = () => {
  const [tableData, setTableData] = useState([]);

  // using RTK to handle api state
  // const { data } = useGetOrderedMealQuery();

  // useEffect(() => {
  //   if (data) {
  //     setTableData(data.results || []); // Use data.results if it matches your API response structure
  //   }
  // }, [data]);

  return (
    <div className="order-container">
      <h5>Recent Orders</h5>
      <table>
        <tbody>
          {tableData && tableData.length > 0 ? (
            tableData.map((order) => (
              <tr key={order.id}>
                <td>
                  <span className="food">
                    <img src={foodImg} alt={foodImg} />
                    {order.item.food_title}
                  </span>
                </td>
                <td>#{order.totalPrice}</td>
                <td>{order.client.location}</td>
                <td
                  style={{
                    color: order.status === "accepted" ? "lightgreen" : "red",
                  }}
                >
                  {order.status}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No recent orders available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
