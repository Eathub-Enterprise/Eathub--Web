import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../../../../services/auth/authService";
import "./order.css";
import foodImg from "../../../../Assets/images/foodImg.png";
import Preloader from "../../../../layouts/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import { openSnackbar, closeSnackbar } from "../../../../Redux/actions";
import EmptyOrder from "./EmptyOrder";

const Order = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [status, setStatus] = useState("");

  // handling notifications for now
  const dispatch = useDispatch();
  const { open, message, duration } = useSelector((state) => state.snackbar);
  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  /* To decide whether to accept or decline
 orders coming through for vendors */
  const handleStatus = async (id, state, index) => {
    setStatus(state);
    const meal = new FormData();
    meal.append("action", state);
    console.log(status);

    try {
      await authService.decideOrderStatus(id, state, meal); // Corrected parameter
      console.log("Status Inputted!", meal);
      authService.getOrderedMeals();
      dispatch(openSnackbar(`Order has been ${state}`, 1000));

      // Remove the row from the table data
      const updatedTableData = [...tableData];
      updatedTableData.splice(index, 1);
      setTableData(updatedTableData);
    } catch (error) {
      console.log("Something must be genuinely wrong : ", error);
      dispatch(openSnackbar(`${state} Order Failed!, Try again`, 3000)); // Corrected parameter
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getOrderedMeals();
        if (response) {
          setTableData(response.data.results);
          console.log(response.data.results);
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
    return <Preloader />;
  }

  // in the case of empty data
  if (Object.keys(tableData).length === 0) {
    return <EmptyOrder />;
  }

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
            {tableData.map((order, index) => {
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
            })}
          </tbody>
        </table>
      </div>
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={duration}
        onClose={handleClose}
      />
    </div>
  );
};

export default Order;
