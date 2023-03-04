import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authService from "../../../../services/auth/authService";

const EditMenu = () => {
  const { id } = useParams();
  const [mealItems, setMealItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getMeal(id);
        setMealItems(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id]);
  return <div>EditMenu</div>;
};

export default EditMenu;
