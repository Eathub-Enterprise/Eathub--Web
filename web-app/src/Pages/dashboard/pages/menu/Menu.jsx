import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import authService from "../../../../services/auth/authService";
import "./menu.css";
import Preloader from "../../../../layouts/Preloader/Preloader";
import EmptyMenu from "./EmptyMenu";
import {
  useGetMenuListQuery,
  useGetMenuQuery,
} from "../../../../model/auth/authServices";
import { showToastNotification } from "../../../../helper/ToastNotify";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // using RTK to handle Api Request
  const { data } = useGetMenuListQuery("menuList", { refetchOnFocus: true });

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await authService.deleteMeal(id).then((response) => {
        if (response) {
          showToastNotification("Meal has been deleted!", "info");
        } else {
          showToastNotification("Error trying to delete meal");
        }
      });
      await authService.getMealList();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data) {
      setMeals(data.results);
    }
  }, [data]);

  if (loading) {
    return <Preloader />;
  }

  return (
    // to improve performance, abstract table below into smaller component
    <div className="menu-section">
      <div className="menu-title">
        <div className="menu-title-header">
          <h2>Menu</h2>
        </div>
        <button className="menu-btn">
          <Link to="/dashboard/menu/addMenu" className="menu-link">
            Add Meal
          </Link>
        </button>
      </div>
      <div className="menu-table">
        <table>
          <thead>
            <tr>
              <th>Meal</th>
              <th>Meal Description</th>
              <th>Price</th>
              <th>Meal Prep Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meals && meals.length > 0 ? (
              meals.map((meal) => {
                return (
                  <tr key={meal.id}>
                    <td>
                      <img src={meal.image} alt={meal.food_name} />
                    </td>
                    <td>
                      <p>{meal.food_description}</p>
                    </td>
                    <td>
                      <p>#{meal.food_price}</p>
                    </td>
                    <td>
                      <p>{meal.prepare_time} Minutes</p>
                    </td>
                    <td>
                      <span className="btns">
                        {/* Note: Using editMeal as the naming convention instead of editMenu */}
                        <Link to={"editMeal/" + meal.id}>
                          <p className="update">
                            <EditIcon />
                          </p>
                        </Link>
                        {/* Note: Using editMeal as the naming convention instead of editMenu */}
                        <p
                          className="update"
                          onClick={() => handleDelete(meal.id)}
                        >
                          <DeleteIcon />
                        </p>
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyMenu />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
