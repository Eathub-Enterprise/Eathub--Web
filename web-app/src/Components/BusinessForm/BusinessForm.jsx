import { Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import authService from "../../services/auth/authService";

const BusinessForm = (e) => {
  const navigate = useNavigate();

  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  return (
    <Formik
      initialValues={{
        vendor_name: "",
        address: "",
        business_email: "",
        business_phonenumber: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const value = {
          ...values,
          ...user,
        };

        try {
          await authService.vendorSignUp(value).then(
            (response) => {
              console.log("it Worked!", value);
              navigate("/login");
            },
            (error) => {
              console.log("it Failed!", error);
            }
          );
        } catch (err) {
          console.log(err);
        }
      }}
      // Yup Validation
      validationSchema={Yup.object().shape({
        vendor_name: Yup.string().required("Business Name is Required"),
        address: Yup.string().required("Business Address is Required"),
        business_phonenumber: Yup.number().required(
          "Business Number is Required"
        ),
        business_email: Yup.string()
          .email()
          .required("Business Mail is Required"),
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
                <h1>Business Registration</h1>
                <p className="header-text">
                  Kindly complete registeration
                </p>
              </header>
              <div className="personal-form-input">
                <form onSubmit={handleSubmit}>
                  <input
                    id="vendor_name"
                    name="vendor_name"
                    type="text"
                    placeholder="Business Name"
                    value={values.vendor_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.vendor_name && touched.vendor_name && "error"
                    }
                  />
                  {errors.vendor_name && touched.vendor_name && (
                    <div className="input-feedback">{errors.vendor_name}</div>
                  )}
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Business Address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.address && touched.address && "error"}
                  />

                  {errors.address && touched.address && (
                    <div className="input-feedback">{errors.address}</div>
                  )}

                  <input
                    id="business_phonenumber"
                    name="business_phonenumber"
                    type="digits"
                    placeholder="Business Number"
                    value={values.business_phonenumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.business_phonenumber &&
                      touched.business_phonenumber &&
                      "error"
                    }
                  />

                  {errors.business_phonenumber &&
                    touched.business_phonenumber && (
                      <div className="input-feedback">
                        {errors.business_phonenumber}
                      </div>
                    )}

                  <input
                    id="business_email"
                    name="business_email"
                    type="text"
                    placeholder="Business Mail"
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
