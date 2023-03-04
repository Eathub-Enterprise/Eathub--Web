import React, { useState, useEffect } from "react";
import authService from "../../services/auth/authService";
import "./orderTable.css";
import foodImg from "../../Assets/images/foodImg.png";
import Preloader from "../../layouts/Preloader/Preloader";

const OrderTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getOrderedMeals();
        setTableData(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (tableData.length === 0) {
    return <Preloader />;
  }

  return (
    <div className="order-container">
      <h5>Recent Orders</h5>
      <table>
        <tbody>
          {tableData.map((order) => {
            return (
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
