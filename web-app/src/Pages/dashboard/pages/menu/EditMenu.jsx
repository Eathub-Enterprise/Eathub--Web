import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import authService from "../../../../services/auth/authService";
import { Formik } from "formik";
import * as Yup from "yup";
import icon from "../../../../Assets/pngs/ImgUpload.png";
import Preloader from "../../../../layouts/Preloader/Preloader";
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@mui/material';
import { openSnackbar, closeSnackbar } from '../../../../Redux/actions';


const EditMenu = () => {
  const { id } = useParams();
  const [mealItems, setMealItems] = useState({image: ""});
  const navigate = useNavigate();

      // handling notifications for now - remind to update
      const dispatch = useDispatch();
      const { open, message, duration:closeSnackbar } = useSelector((state) => state.snackbar);
      const handleClose = () => {
        dispatch(closeSnackbar);
      };

  // to grab the catgeories need for the Meal Category Select tag
  const [category, setCategory] = useState([]);

  // to update the value % state of an image into a file acceptable to the backend
  const [file, setFile] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  // The Method handling that
  const handleImageUpload = (event) => {
    setIsImageUploaded(true);
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  // This gets the category data from the backend
  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await authService.getMealCategory();
        setCategory(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategory();
  }, []);

  // This is to get the pre-existing data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await authService.getMeal(id);
        const meal = response.data;
        console.log(meal);
        // setting the state
        setMealItems({
          category_id: meal.id,
          food_title: meal.food_title,
          food_description: meal.food_description,
          food_price: meal.food_price,
          food_type: meal.food_type,
          prepare_time: meal.prepare_time,
          delivery_type: meal.delivery_type,
          image: "",
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id]);

  if (category.length === 0) {
    return <h5>Loading Categories</h5>;
  }

  if (mealItems.length === 0) {
    return <Preloader />;
  }



  return (
    <Formik
      initialValues={mealItems}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);

        const formData = new FormData();
        // To send a form with a file, use this instead of JSON
        formData.append("food_title", values.food_title);
        formData.append("food-type", values.food_type);
        formData.append("food_price", values.food_price);
        formData.append("image", file);
        formData.append("food_description", values.food_description);
        formData.append("prepare_time", values.prepare_time);
        formData.append("delivery_type", values.delivery_type);
        formData.append("category_id", values.category_id);

        /* Note: In the case where multiple Images would be needed, 
          ensure to append to formData instead of destructuring.*/

        try {
          await authService.updateMeal(id, formData).then(
            (response) => {
              console.log("Update Inputted!", formData);
              navigate("/dashboard/menu");
              authService.getMealList();
              if(response){
                dispatch(openSnackbar('Meal Updated!', 1000));
              } else {
                dispatch(openSnackbar('Meal Update Error!', 1000));
              }
            },
            (error) => {
              dispatch(openSnackbar('Error updating Meal, Try Again', 1000));
              console.log("The Values are wrong or Incorrect!: ", error);
            }
          );
        } catch (err) {
          dispatch(openSnackbar('Something went wrong!', 1000));
          console.log("Something seems to wrong with the request: ", err);
        } finally {
          setSubmitting(false);
        }
      }}
      validator={() => ({})}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="menu-section">
            <form onSubmit={handleSubmit}>
              <div className="menu-title">
                <div className="menu-title-header">
                  <h2>Edit Meal</h2>
                </div>
                <button type="submit" className="menu-btn">
                  Update Meal
                </button>
              </div>
              <div className="menu-table">
                <div className="menu-table-inner">
                  <div className="menu-table-row">
                    <div className="menu-input">
                      <label>
                        <h4>NAME</h4>
                      </label>
                      <input
                        id="food_title"
                        name="food_title"
                        defaultValue={mealItems.food_title}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Name"
                        className={
                          errors.food_title && touched.food_title && "error"
                        }
                      />
                      {errors.food_title && touched.food_title && (
                        <div className="input-feedback">
                          {errors.food_title}
                        </div>
                      )}
                    </div>
                    <div className="menu-input">
                      <label>
                        <h4>CATEGORIES</h4>
                      </label>
                      {/* Design a Custom DropDown after Launch */}
                      <select
                        id="food_type"
                        name="food_type"
                        defaultValue={mealItems.food_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value=""></option>
                        <option value="main-dish">Main Dish</option>
                        <option value="side-dish">Side Dish</option>
                      </select>
                    </div>

                    <div className="menu-input">
                      <label>
                        <h4>PRICE (NGN)</h4>
                      </label>
                      <input
                        id="food_price"
                        name="food_price"
                        type="digit"
                        defaultValue={mealItems.food_price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Price"
                        className={
                          errors.food_price && touched.food_price && "error"
                        }
                      />
                      {errors.food_price && touched.food_price && (
                        <div className="input-feedback">
                          {errors.food_price}
                        </div>
                      )}
                    </div>

                    {/* Look closely at my logic for this image input */}
                    <div className="menu-input-img">
                      <h4>Import Meal Image</h4>
                      <div className="labels">
                        <label
                          htmlFor="Image1"
                          className={isImageUploaded ? "uploaded" : ""}
                        >
                          {/* sucessful display fix needs to be better */}
                          <input
                            id="Image1"
                            name="image"
                            defaultValue={mealItems.image}
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                          ></input>
                          <div className="img-display">
                            {isImageUploaded && (
                              <img
                                src={URL.createObjectURL(file)}
                                alt="food-img"
                              />
                            )}
                            {!isImageUploaded && (
                              <img src={values.image} alt="food-img" />
                            )}
                          </div>
                          <label htmlFor="Image1">
                            <img
                              src={icon}
                              alt={icon}
                              className="menu-inputImg"
                            />
                          </label>
                        </label>
                      </div>
                      {/* <label>
                        <p className="menu-small">Image should be 2mb max</p>
                      </label> */}
                    </div>
                  </div>
                  <div className="menu-table-row second">
                    <div className="menu-input">
                      <label>
                        <h4>DESCRIPTION</h4>
                      </label>
                      <textarea
                        id="food_description"
                        name="food_description"
                        defaultValue={mealItems.food_description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Meal Description"
                        className={
                          errors.food_description &&
                          touched.food_description &&
                          "error"
                        }
                      ></textarea>
                      {errors.food_description && touched.food_description && (
                        <div className="input-feedback">
                          {errors.food_description}
                        </div>
                      )}
                    </div>

                    <div className="menu-input">
                      <label>
                        <h4>PREPARATION TIME (minutes)</h4>
                      </label>
                      <input
                        id="prepare_time"
                        name="prepare_time"
                        defaultValue={mealItems.prepare_time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="digit"
                        placeholder="Preparation Time"
                        className={
                          errors.prepare_time && touched.prepare_time && "error"
                        }
                      />
                      {errors.prepare_time && touched.prepare_time && (
                        <div className="input-feedback">
                          {errors.prepare_time}
                        </div>
                      )}
                    </div>

                    <div className="menu-input">
                      <label>
                        <h4>Delivery Type</h4>
                      </label>
                      <select
                        defaultValue={mealItems.delivery_type}
                        name="delivery_type"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="">..</option>
                        <option value="Instant Delivery">
                          Instant Delivery
                        </option>
                      </select>
                    </div>

                    <div className="menu-input">
                      <label>
                        <h4>Meal Category</h4>
                      </label>
                      <select
                        name="category_id"
                        defaultValue={mealItems.category_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {category.map((meal) => {
                          return <option value={meal.id}>{meal.title}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <Snackbar open={open} message={message} duration={closeSnackbar} onClose={handleClose} />
          </div>
        );
      }}
    </Formik>
  );
};

export default EditMenu;
