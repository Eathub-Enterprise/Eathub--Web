import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import authService from "../../../../services/auth/authService";
import "./menu.css";

const Menu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getMealList();
        setMeals(response.data.results);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (meals.length === 0) {
    return <h1> Loading Meals</h1>;
  }

  return (
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
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => {
              return (
                <tr key={meal.id}>
                  <td>{meal.image}</td>
                  <td>{meal.food_description}</td>
                  <td>#{meal.food_price}</td>
                  <td>{meal.prepare_time} Minutes</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Menu;
