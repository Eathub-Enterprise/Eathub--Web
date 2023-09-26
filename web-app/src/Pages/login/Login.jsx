import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/images/login-img.png";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { vendorLogin } from "../../model/auth/authAction";
import Preloader from "../../layouts/Preloader/Preloader";

const Login = () => {
  /// const [rememberUser, setRememberUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handling state with RTK
  const { loading, error } = useSelector((state) => state.auth);
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
          const loginStatus = await dispatch(vendorLogin(values));
          console.log("submit!", loginStatus);
          navigate("/dashboard");
          if (error) {
            console.error("Error from Store: ", error);
            navigate("/login");
          } else if (loading) {
            return <Preloader />;
          }
        } catch (error) {
          console.error("Error Within Component");
        } finally {
          setSubmitting(false);
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
