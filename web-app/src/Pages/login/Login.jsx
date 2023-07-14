import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import authService from "../../services/auth/authService";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/images/login-img.png";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@mui/material";
import { openSnackbar, closeSnackbar } from "../../Redux/actions";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ReactComponent as EyeIcon } from "../../Assets/pngs/eyepass.svg";


const Login = () => {
  // const [rememberUser, setRememberUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { open, message, duration } = useSelector((state) => state.snackbar);

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          console.log("Submit");
          const loginStatus = await authService.vendorLogin(
            values.username,
            values.password
          );
          if (loginStatus) {
            dispatch(openSnackbar("Login successful!", 50));
            navigate("/dashboard");
            localStorage.setItem("login", values.username);
          } else {
            dispatch(openSnackbar("Login failed. Please try again.", 3000));
          }
        } catch (error) {
          console.log("Error", error);
        } finally {
          // setTimeout(() => {
          //   window.location.reload();
          // }, 10000);
        }
      }}
      //  Yup validation
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username is Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Minimum of eight characters")
          .matches(/(?=.*[0-9])/, "Must contain a number."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <div className="login">
            <div className="login-container">
              <aside className="login-left">
                <Link to={"/signup"} className="backArrow">
                  <p className="arrowP">
                    <ArrowBackIosNewIcon />
                    <span>Sign up</span>
                  </p>
                </Link>
                <main>
                  <h1>
                    Dear Vendor!
                    <br />
                    Welcome Back
                  </h1>
                  <h5>Enter your login details below</h5>

                  <form className="login-input" onSubmit={handleSubmit}>
                    <input
                      id="login-username"
                      name="username"
                      placeholder="Username"
                      type="text"
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
                      placeholder="*********"
                      type={passwordShown ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password && "error"}
                    />
                    {/* <EyeIcon
                        onClick={() => setPasswordShown(!passwordShown)}
                        className={passwordShown ? "hide" : ""}
                      /> */}
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}

                    <div className="input-check">
                      <input
                        type="checkbox"
                        name="rememberUser"
                        id="rememberUser"
                      />
                      <label>Remember Me</label>
                    </div>

                    <button className="personal-form-btn" type="submit">
                      Login
                    </button>

                    <Link className="pwd-link" to="">
                      Forgot Password?
                    </Link>
                    <Snackbar
                      open={open}
                      message={message}
                      autoHideDuration={duration}
                      onClose={handleClose}
                    />
                  </form>
                </main>
              </aside>
              <aside className="login-right">
                <img loading="lazy" src={img} alt={img} />
              </aside>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
