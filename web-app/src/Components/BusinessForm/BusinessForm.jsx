import { Formik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../layouts/Preloader/Preloader";
import { vendorRegister } from "../../model/auth/authAction";
import Swal from "sweetalert2";
import ImageUploader from "../../shared/components/ImageUploader";
import { Locations } from "../../shared/Location";
import DaysSelector from "../../shared/components/Checkbox";

const BusinessForm = (e) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // remember-me feature
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // leftover data from the previous form
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  // for Registeration state with RTK
  const { loading, error } = useSelector((state) => state.auth);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Formik
      initialValues={{
        business_image: "",
        business_address_city: "",
        business_address: "",
        business_address_state: "Lagos",
        business_address_coord_lat: null,
        business_address_coord_lng: null,
        opening_days: "",
        opening_time: "",
        closing_time: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        // Convert array to comma-separated string
        const openingDaysString = values.opening_days.join(",");
        const value = {
          ...values,
          opening_days: openingDaysString,
          ...user,
        };
        try {
          const registrationStatus = await dispatch(vendorRegister(value));
          if (registrationStatus.type === "auth/register/fulfilled") {
            Swal.fire({
              text: "Registered Sucessfully",
              icon: "success",
              iconColor: "#fff",
              toast: true,
              position: "top-right",
              showConfirmButton: false,
              timer: 5000,
              background: "#ff8323",
              color: "#fff",
            });
            navigate("/login");
          }
          // console.log("Submit!", registrationStatus);
          // if (vendor) {
          //   Swal.fire({
          //     text: "User Already Existing",
          //     icon: "warning",
          //     iconColor: "#fff",
          //     toast: true,
          //     position: "top-right",
          //     showConfirmButton: false,
          //     timer: 5000,
          //     background: "#ff8323",
          //     color: "#fff",
          //   });
          //   navigate("/login");
          //   // console.log("Vendor Already Exists!");
          // }
          else if (error) {
            Swal.fire({
              text: "Unsucessful Registeration",
              icon: "error",
              toast: true,
              position: "top-right",
              showConfirmButton: false,
              timer: 5000,
            });
            console.error(error);
            navigate("/signup/business");
          }
        } catch (error) {
          console.error("Error During Registration", error);
        } finally {
          setSubmitting(false);
        }
      }}
      // Yup Validation
      validationSchema={Yup.object().shape({
        business_address_city: Yup.string().required("Choose City!"),
        business_address: Yup.string().required("Business Address is Required"),
        checked: Yup.boolean().oneOf([true], "Please check the checkbox"),
      })}
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
          setFieldValue,
        } = props;
        return (
          <div className="personal-form">
            <div className="personal-form-main">
              <header>
                <h1>Business Registration</h1>
                <p className="header-text">Kindly complete registeration</p>
              </header>
              <div className="personal-form-input">
                <form onSubmit={handleSubmit}>
                  <ImageUploader
                    onImageUpload={(uploadedImage) =>
                      setFieldValue("business_image", uploadedImage)
                    }
                    imageUrl={values.business_image}
                    header={"Upload Business Logo"}
                  />

                  <input
                    id="business_address"
                    name="business_address"
                    type="text"
                    placeholder="Business Address"
                    value={values.business_address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.business_address &&
                      touched.business_address &&
                      "error"
                    }
                  />

                  {errors.business_address && touched.business_address && (
                    <div className="input-feedback">
                      {errors.business_address}
                    </div>
                  )}

                  <select
                    name="business_address_city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.business_address_city}
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    {Locations.map((location, index) => (
                      <option
                        key={index}
                        value={location.business_address_city}
                      >
                        {location.business_address_city}
                      </option>
                    ))}
                  </select>

                  {errors.business_address_city &&
                    touched.business_address_city && (
                      <div className="input-feedback">
                        {errors.business_address_city}
                      </div>
                    )}

                  <label>
                    <h4>Days of Operation</h4>
                  </label>
                  <DaysSelector
                    selectedDays={values.opening_days}
                    onChange={handleChange}
                  />

                  <br />
                  <label>
                    <h4>Opening Hours</h4>
                  </label>
                  <input
                    id="opening_time"
                    name="opening_time"
                    type="time"
                    placeholder="Opening Hours"
                    value={values.opening_time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.opening_time && touched.opening_time && "error"
                    }
                  />

                  {errors.opening_time && touched.opening_time && (
                    <div className="input-feedback">{errors.opening_time}</div>
                  )}
                  <br />
                  <label>
                    <h4>Closing Hours</h4>
                  </label>
                  <input
                    id="closing_time"
                    name="closing_time"
                    type="time"
                    placeholder="Closing Hours"
                    value={values.closing_time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.closing_time && touched.closing_time && "error"
                    }
                  />

                  {errors.closing_time && touched.closing_time && (
                    <div className="input-feedback">{errors.closing_time}</div>
                  )}

                  {/* make the state do something */}
                  <label className="check-container">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    I accept to the terms and agreement.{" "}
                  </label>
                  <Link to="/terms" className="check-link">
                    <i>Terms and Agreement</i>
                  </Link>
                  {errors.checked && touched.checked && (
                    <div className="input-feedback">{errors.checked}</div>
                  )}

                  <button
                    className="business-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Register
                  </button>
                </form>
              </div>
              <span className="progress-circles"></span>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default BusinessForm;
