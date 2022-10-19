import { Formik } from "formik";
import * as Yup from "yup";

const BusinessForm = () => {
  return (
    <Formik
      initialValues={{
        businessName: "",
        businessAddress: "",
        businessMail: "",
        businessNumber: "",
        businessDescription: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Sign Up Success", values);
          setSubmitting(false);
        });
      }}
      // Yup Validation
      validationSchema={Yup.object().shape({
        businessName: Yup.string().required("Business Name is Required"),
        businessAddress: Yup.string().required("Business Address is Required"),
        businessNumber: Yup.number().required("Business Number is Required"),
        businessMail: Yup.string()
          .email()
          .required("Business Mail is Required"),
        businessDescription: Yup.string().required(
          "Business Description is Required"
        ),
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
                  Kindly fill the form below to sign up
                </p>
              </header>
              <div className="personal-form-input">
                <form onSubmit={handleSubmit}>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    placeholder="Business Name"
                    value={values.businessName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.businessName && touched.businessName && "error"
                    }
                  />
                  {errors.businessName && touched.businessName && (
                    <div className="input-feedback">{errors.businessName}</div>
                  )}
                  <input
                    id="businessAddress"
                    name="businessAddress"
                    type="text"
                    placeholder="Business Address"
                    value={values.businessAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.businessAddress &&
                      touched.businessAddress &&
                      "error"
                    }
                  />

                  {errors.businessAddress && touched.businessAddress && (
                    <div className="input-feedback">
                      {errors.businessAddress}
                    </div>
                  )}

                  <input
                    id="businessNumber"
                    name="businessNumber"
                    type="number"
                    placeholder="Business Number"
                    value={values.businessNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.businessNumber && touched.businessNumber && "error"
                    }
                  />

                  {errors.businessNumber && touched.businessNumber && (
                    <div className="input-feedback">
                      {errors.businessNumber}
                    </div>
                  )}

                  <input
                    id="businessMail"
                    name="businessMail"
                    type="text"
                    placeholder="Business Mail"
                    value={values.businessMail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.businessMail && touched.businessMail && "error"
                    }
                  />

                  {errors.businessMail && touched.businessMail && (
                    <div className="input-feedback">{errors.businessMail}</div>
                  )}

                  <input
                    id="businessDescription"
                    name="businessDescription"
                    type="text"
                    placeholder="Business Description"
                    value={values.businessDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.businessDescription &&
                      touched.businessDescription &&
                      "error"
                    }
                  />

                  {errors.businessDescription &&
                    touched.businessDescription && (
                      <div className="input-feedback">
                        {errors.businessDescription}
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

export default BusinessForm;
