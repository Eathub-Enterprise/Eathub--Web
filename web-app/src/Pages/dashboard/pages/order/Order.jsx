import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../../../services/auth/authService";
import "./order.css";
import foodImg from "../../../../Assets/images/foodImg.png";
import Preloader from "../../../../layouts/Preloader/Preloader";
import EmptyOrder from "./EmptyOrder";
import { useGetOrderedMealQuery } from "../../../../model/auth/authServices";
import Swal from "sweetalert2";
import { showToastNotification } from "../../../../helper/ToastNotify";

const Order = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState("");

  // using RTK to handle api state
  const { data } = useGetOrderedMealQuery("userOrders", {
    refetchOnFocus: true,
  });

  /* To decide whether to accept or decline
 orders coming through for vendors */
  const handleStatus = async (id, state, index) => {
    setStatus(state);
    const meal = new FormData();
    meal.append("action", state);
    // console.log(status);

    await authService.decideOrderStatus(id, state, meal).then((response) => {
      if (response) {
        // Remove the row from the table data
        const updatedTableData = [...tableData];
        updatedTableData.splice(index, 1);
        setTableData(updatedTableData);
        authService.getOrderedMeals();
        showToastNotification(`Order has been ${state}`, "success");
      } else {
        console.log("Issue here!");
        showToastNotification(`Order could not be ${state}`, "warning");
      }
    });
  };

  useEffect(() => {
    if (data) {
      setTableData(data.results || []);
    }
  }, [data]);

  return (
    <div className="order">
      <span className="order-head">
        <h1>Order List</h1>
        <button>
          <span className="order-link">
            <Link to="/dashboard/orders/history" className="order-link">
              History
            </Link>
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
            {tableData && tableData.length > 0 ? (
              tableData.map((order, index) => {
                return (
                  // to improve performance, abstract table below into smaller component
                  <tr key={order.id}>
                    {/* convert the src link to image here! */}
                    <td>
                      {order.item.image ? null : (
                        <img src={foodImg} alt={foodImg} />
                      )}
                    </td>
                    <td>
                      <p>{order.item.food_title}</p>
                    </td>
                    {/* This needs to be changed to an accurate Location */}
                    <td>
                      <p>{order.client.location}</p>
                    </td>
                    <td>
                      <p> #{order.item.food_price}</p>
                    </td>
                    <td>
                      <div className="orderbtn">
                        <button
                          onClick={() =>
                            handleStatus(order.id, "accepted", index)
                          }
                          style={{ backgroundColor: "green" }}
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleStatus(order.id, "declined", index)
                          }
                          style={{ backgroundColor: "red" }}
                        >
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyOrder />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
