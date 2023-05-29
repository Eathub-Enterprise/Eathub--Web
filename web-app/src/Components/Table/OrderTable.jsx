import React, { useState, useEffect } from "react";
import authService from "../../services/auth/authService";
import "./orderTable.css";
import foodImg from "../../Assets/images/foodImg.png";

const OrderTable = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getOrderedMeals();
        if (Array.isArray(response.data)) {
          setTableData(response.data);
        } else {
          setTableData([]);
        }
        setLoading(false);
        // console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  // when data is loading
  if (loading) {
    return <></>;
  }

  // in the case of empty data
  if (Object.keys(tableData).length === 0) {
    return <></>;
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
