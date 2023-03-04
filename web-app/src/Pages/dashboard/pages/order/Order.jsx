import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../../../services/auth/authService";
import "./order.css";
import foodImg from "../../../../Assets/images/foodImg.png";
import Preloader from "../../../../layouts/Preloader/Preloader";

const Order = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getOrderedMeals();
        setTableData(response.data.results);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  if (tableData.length === 0) {
    return <Preloader />
  }
  return (
    <div className="order">
      <span className="order-head">
        <h1>Order List</h1>
        <button>
          <span className="order-link">
            <Link to="/dashboard/orders/history" className="order-link">History</Link>
          </span>
        </button>
      </span>
      <div className="orderedTable">
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Order Description</th>
              <th>Delivery Location</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((order) => {
              return (
                <tr key={order.id}>
                  {/* convert the src link to image here! */}
                  <td>
                    {order.item.image ? null : (
                      <img src={foodImg} alt={foodImg} />
                    )}
                  </td>
                  <td>{order.item.food_description}</td>
                  {/* This needs to be changed to an accurate Location */}
                  <td>{order.client.location}</td>
                  <td>#{order.item.food_price}</td>
                  <td>
                    <div className="orderbtn">
                      <button style={{ backgroundColor: "green" }}>
                        Accept
                      </button>
                      <button style={{ backgroundColor: "red" }}>
                        Decline
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
