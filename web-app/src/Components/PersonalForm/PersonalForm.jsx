import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./personalForm.css";
import { useNavigate } from "react-router-dom";
import Preloader from "../../layouts/Preloader/Preloader";

const PersonalForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  if (loading) {
    <Preloader />;
  }
  return (
    <Formik
      initialValues={{
        business_name: "",
        business_email: "",
        phone_number: "",
        vendor_category: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // Exclude confirmPassword from the values
          const { confirmPassword, ...formData } = values;
          // to pass the data to the businessForm Component
          localStorage.setItem(
            "user",
            JSON.stringify(formData).replace(/</g, "\\u003c")
          );
          if (formData) {
            navigate("/signup/business");
          }
          setSubmitting(false);
          setLoading(true);
        }, 1000);
      }}
      // Yup Validation
      validationSchema={Yup.object().shape({
        business_name: Yup.string().required("Business Name is Required"),
        business_email: Yup.string()
          .email()
          .required("Business Mail is Required"),
        phone_number: Yup.string().required("Phone Number is Required"),
        vendor_category: Yup.string().required(
          "Shop's category hasn't been chosen."
        ),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Passwords must be a minimum of eight characters.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm password is required"),
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
        } = props;

        return (
          <div className="personal-form">
            <div className="personal-form-main">
              <header>
                <h1>Welcome Vendor!</h1>
                <h4>Get Started With Us</h4>
              </header>
              <div className="personal-form-input">
                <form onSubmit={handleSubmit}>
                  <div className="input-header">
                    <input
                      id="business_name"
                      name="business_name"
                      type="text"
                      placeholder="Business Name"
                      value={values.business_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.business_name && touched.business_name && "error"
                      }
                    />
                    {errors.business_name && touched.business_name && (
                      <div className="input-feedback">
                        {errors.business_name}
                      </div>
                    )}
                  </div>
                  <input
                    id="business_email"
                    name="business_email"
                    type="email"
                    placeholder="Email"
                    value={values.business_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.business_email && touched.business_email && "error"
                    }
                  />

                  {errors.business_email && touched.business_email && (
                    <div className="input-feedback">
                      {errors.business_email}
                    </div>
                  )}

                  <input
                    id="phone_number"
                    name="phone_number"
                    type="tel"
                    placeholder="Phone Number"
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phone_number && touched.phone_number && "error"
                    }
                  />

                  {errors.phone_number && touched.phone_number && (
                    <div className="input-feedback">{errors.phone_number}</div>
                  )}

                  <select
                    id="vendor_category"
                    name="vendor_category"
                    value={values.vendor_category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.vendor_category &&
                      touched.vendor_category &&
                      "error"
                    }
                  >
                    <option value="" label="Select Kitchen Category" />
                    <option value="bakery" label="Bakery" />
                    <option value="restaurant" label="Restaurant" />
                    <option value="cafe" label="Cafe" />
                    {/* Add more options as needed */}
                  </select>

                  {errors.vendor_category && touched.vendor_category && (
                    <div className="input-feedback">
                      {errors.vendor_category}
                    </div>
                  )}

                  <input
                    id="Password"
                    name="password"
                    type="password"
                    placeholder="••••••••••••••"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />

                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="input-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}

                  <button
                    className="personal-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Continue
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

export default PersonalForm;
