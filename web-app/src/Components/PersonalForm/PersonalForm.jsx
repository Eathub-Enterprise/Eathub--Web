import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./personalForm.css";
import { useNavigate } from "react-router-dom";
import Preloader from "../../layouts/Preloader/Preloader";

// reminder to separate into smart and dumb component

const PersonalForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  if(loading) {
    <Preloader />
  }
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        middlename: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
        location:""
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // to pass the data to the businessForm Component
          localStorage.setItem(
            "user",
            JSON.stringify(values).replace(/</g, "\\u003c")
          );

          navigate("/signup/business");
          setSubmitting(false);
          setLoading(true);
        }, 1000);
      }}
      // Yup Validation
      validationSchema={Yup.object().shape({
        firstname: Yup.string().required("First name is Required"),
        lastname: Yup.string().required("Last name is Required"),
        middlename: Yup.string().required("Middlename is Required"),
        gender: Yup.string()
          .oneOf(["male", "female", "other"])
          .required("Gender is required"),
        username: Yup.string().required("Username is Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Passwords must be a minimum of eight characters")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm password is required"),
        location:Yup.string().required('Location is Required!')
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
                    <div className="input-top">
                      <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First Name"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.firstname && touched.firstname && "error"
                        }
                      />
                      {errors.firstname && touched.firstname && (
                        <div className="input-feedback">{errors.firstname}</div>
                      )}
                    </div>
                    <div className="input-top">
                      <input
                        id="middlename"
                        name="middlename"
                        type="text"
                        placeholder="Middle Name"
                        value={values.middlename}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.middlename && touched.middlename && "error"
                        }
                      />
                      {errors.middlename && touched.middlename && (
                        <div className="input-feedback">
                          {errors.middlename}
                        </div>
                      )}
                    </div>
                  </div>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lastname && touched.lastname && "error"}
                  />

                  {errors.lastname && touched.lastname && (
                    <div className="input-feedback">{errors.lastname}</div>
                  )}

                  <select
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                  {errors.gender && touched.gender && (
                    <div className="input-feedback">{errors.gender}</div>
                  )}

                  <input
                    id="form-username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.username && touched.username && "error"}
                  />

                  {errors.username && touched.username && (
                    <div className="input-feedback">{errors.username}</div>
                  )}

                  <input
                    id="password"
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
                    <div className="input-feedback">{errors.confirmPassword}</div>
                  )}

                  <input
                    type="text"
                    name="location"
                    placeholder="Axis Location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />

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
