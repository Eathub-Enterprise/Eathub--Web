import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import icon from "../../../../Assets/pngs/ImgUpload.png";
import authService from "../../../../services/auth/authService";

const AddMenu = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  const handleImageUpload = (event) => {
    setIsImageUploaded(true);
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await authService.getMealCategory();
        setCategory(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCategory();
  }, []);

  if (category.length === 0) {
    return <h5>Loading Categories</h5>;
  }

  return (
    <Formik
      initialValues={{
        category_id: "",
        food_title: "",
        food_description: "",
        food_price: "",
        food_type: "",
        prepare_time: "",
        delivery_type: "",
        image: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const formData = new FormData();
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
          await authService.createMeal(formData).then(
            (response) => {
              console.log("it Worked!", formData);
              navigate("/dashboard/menu");
              authService.getMealList();
            },
            (error) => {
              console.log("The Values are wrong or Incorrect!: ", error);
            }
          );
        } catch (err) {
          console.log("Something seems to wrong with the request: ", err);
        } finally {
          setSubmitting(false);
        }
      }}
      // Yup Validation
      // validationSchema={Yup.object().shape({
      //   category_id: Yup.number().required("Category ID needed here"),
      //   food_title: Yup.string().required("Meal Name is Required"),
      //   food_description: Yup.string().required("Meal Description is Required"),
      //   food_price: Yup.number().required("Meal Price is Required"),
      //   food_type: Yup.string().required("Meal Type is Needed"),
      //   prepare_time: Yup.number().required("Prepare Time has not been filled"),
      //   delivery_type: Yup.string().required(
      //     "Type of Delivery has not been filled"
      //   ),
      //   image: Yup.mixed().required("Image is required"),
      // })}
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
                  <h2>Add Meal</h2>
                </div>
                <button type="submit" className="menu-btn">
                  Save Meal
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
                        value={values.food_title}
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
                        value={values.food_type}
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
                        value={values.food_price}
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
                            value={values.image}
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                          ></input>
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
                        value={values.food_description}
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
                        value={values.prepare_time}
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
                        value={values.delivery_type}
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
                        value={values.category_id}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {category.map((meal) => {
                          return (
                              <option value={meal.id}>{meal.title}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default AddMenu;
