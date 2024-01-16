import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/images/login-img.webp";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { vendorLogin } from "../../model/auth/authAction";
import Preloader from "../../layouts/Preloader/Preloader";
import EyeIcon from "@mui/icons-material/VisibilityOutlined";
import Swal from "sweetalert2";

const Login = () => {
  /// const [rememberUser, setRememberUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handling state with RTK
  const { loading, error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          const loginStatus = await dispatch(vendorLogin(values));
          if (loginStatus.type === "auth/login/fulfilled") {
            Swal.fire({
              text: "Logged in Sucessfully",
              icon: "success",
              iconColor: "#fff",
              toast: true,
              position: "top-right",
              showConfirmButton: false,
              timer: 2000,
              background: "#ff8323",
              color: "#fff",
            });
            console.log("submit!", loginStatus.type);
            navigate("/dashboard");
          } else if (error) {
            Swal.fire({
              text: "Unsucessful Login",
              icon: "error",
              toast: true,
              position: "top-right",
              showConfirmButton: false,
              timer: 2000,
            });
            console.error("Error from Store: ", error);
            navigate("/login");
          }
        } catch (error) {
          console.error("Error Within Component");
        } finally {
          setSubmitting(false);
        }
      }}
      //  Yup validation
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Email is Required"),
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
                <Link to={"/"} className="backArrow">
                  <p className="arrowP">
                    <ArrowBackIosNewIcon />
                    <span>HomePage</span>
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
                      placeholder="Email Address"
                      type="email"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.username && touched.username && "error"}
                    />
                    {errors.username && touched.username && (
                      <div className="input-feedback">{errors.username}</div>
                    )}

                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="*********"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.password && touched.password && "error"}
                    />
                    <EyeIcon
                      className={`eye-icon ${
                        showPassword ? "visible" : "invisible"
                      }`}
                      onClick={handleTogglePassword}
                    ></EyeIcon>

                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}

                    <div className="input-check">
                      <input
                        type="checkbox"
                        name="rememberUser"
                        id="rememberUser"
                      />
                      <label className="remember">Remember Me</label>
                    </div>

                    <button className="personal-form-btn" type="submit">
                      Login
                    </button>

                    {/* <Link className="pwd-link" to="">
                      Forgot Password?
                    </Link> */}
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
