import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link} from "react-router-dom";
import authService from "../../../../services/auth/authService";
import "./menu.css";
import Preloader from "../../../../layouts/Preloader/Preloader";


const Menu = () => {
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getMealList();
        setMeals(response.data.results);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  if (meals.length === 0) {
    return <Preloader />;
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {meals.map((meal) => {
              return (
                <tr key={meal.id}>
                  <td>
                    <img src={meal.image} alt={meal.food_name} />
                  </td>
                  <td>{meal.food_description}</td>
                  <td>#{meal.food_price}</td>
                  <td>{meal.prepare_time} Minutes</td>
                  <td>
                    <span className="btns">
                        {/* Note: Using editMeal as the naming convention instead of editMenu */}
                        <Link to={"editMeal/" + meal.id}>
                          <p className="update">
                            <EditIcon />
                          </p>
                        </Link>
                        {/* Note: Using editMeal as the naming convention instead of editMenu */}
                          <p className="update">
                            <DeleteIcon />
                          </p>
                    </span>
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

export default Menu;
