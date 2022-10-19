import { Formik } from "formik";
import * as Yup from "yup";
import "./personalForm.css";

// reminder to separate into smart and dumb component

const PersonalForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        cfpassword: "",
        phoneNumber: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Sign Up Success", values);
          setSubmitting(false);
        });
      }}
      // Yup Validation
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First name is Required"),
        lastName: Yup.string().required("Last name is Required"),
        username: Yup.string().required("Username is Required"),
        phoneNumber: Yup.number().required("Phone Number is Required"),
        email: Yup.string().email().required("Email is Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Passwords must be a minimum of eight characters")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
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
                <h1>Get Started</h1>
                <p className="header-text">
                  Kindly fill the form below to sign up
                </p>
              </header>
              <div className="personal-form-input">
                <form onSubmit={handleSubmit}>
                  <div className="input-header">
                    <div className="input-top">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.firstName && touched.firstName && "error"
                        }
                      /> 
                      {errors.firstName && touched.firstName && (
                        <div className="input-feedback">{errors.firstName}</div>
                      )}
                    </div>
                    <div className="input-top">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.lastName && touched.lastName && "error"
                        }
                      />
                      
                      {errors.lastName && touched.lastName && (
                        <div className="input-feedback">{errors.lastName}</div>
                      )}
                    </div>
                  </div>
                  <input
                    id="username"
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
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    placeholder="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.phoneNumber && touched.phoneNumber && "error"
                    }
                  />
                  
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="input-feedback">{errors.phoneNumber}</div>
                  )}

                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Choose a password"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Confirm password"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
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
