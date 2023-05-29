import React, { useContext, useEffect, useState } from "react";
import { ChartDataContext } from "../../../../helper/requireAuth";
import Preloader from "../../../../layouts/Preloader/Preloader";
import "./profile.css";
import { Formik } from "formik";
import * as Yup from "yup";
import icon from "../../../../Assets/pngs/profile (1).png";
import icons from "../../../../Assets/pngs/ImgUpload.png";

const Profile = () => {
  const glbData = useContext(ChartDataContext);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    image: "",
    kitchenDescription: "",
  });
  // New inputs
  const [kitchenDescription, setKitchenDescription] = useState("");
  const maxLength = 450;
  const [remainingLength, setRemainingLength] = useState(450);

  const handleChangeDEsc = (event) => {
    // setValue(event.target.value);
    setKitchenDescription(event.target.value);
    setRemainingLength(maxLength - kitchenDescription.length);
  };

  // to update the value % state of an image into a file acceptable to the backend
  const [file, setFile] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // The Method handling that
  const handleImageUpload = (event) => {
    setIsImageUploaded(true);
    setShowImage(true);
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  // Getting Pre-existing data
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        setProfileData({
          username: glbData.username,
          vendorName: glbData.vendorname,
          address: glbData.mainbusinessaddress,
          kitchenNumber: glbData.businessphonenumber,
          emailAddress: glbData.businessemail,
          fullName: "John Doe",
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [glbData]);

  if (loading) {
    <Preloader />;
  }
  const handleChange = (event) => {
    // setValue(event.target.value);
    setKitchenDescription(event.target.value);
    setRemainingLength(maxLength - kitchenDescription.length);
  };
  
>>>>>>> review
  return (
    <Formik
      initialValues={{ profileData }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const formData = new FormData();
        formData.append("username", values.username);
        formData.append("vendorname", values.vendorName);
        formData.append("address", values.address);
        formData.append("kitchenNumber", values.kitchenNumber);
        formData.append("emailAddress", values.emailAddress);
        formData.append("fullName", values.fullName);
        formData.append("image", file);
        formData.append("kitchenDescription", kitchenDescription);
      }}
    >
      {(props) => {
        const { handleChange, handleSubmit, values } = props;
        return (
          <div className="profile-container">
            <form onSubmit={handleSubmit}>
              <div className="profile-head">
                <div className="profile-header">
                  <h1>Welcome {glbData.username}!</h1>
                </div>
                <span className="profile-img-header">
                  <span className="profile-img">
                    {/* <span className="img-container">
                        </span> */}
                    <img
                      src={showImage ? URL.createObjectURL(file) : icon}
                      alt={icon}
                    />
                  </span>
                  <div className="profile-details">
                    <h2>Profile</h2>
                    <p>Update your photo and personal details.</p>
                  </div>
                  <div className="profile-btn">
                    <button id="cancel">Cancel</button>
                    <button id="save">Save</button>
                  </div>
                </span>
              </div>
            </form>
            <form>
              <div className="form-div">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <div className="vertical-line">eathub.com.ng/</div>
                <input
                  type="text"
                  id="username"
                  defaultValue={profileData.username}
                  onChange={handleChange}
                  className="input-field"
                  disabled
                />
              </div>

              <div className="form-div">
                <label htmlFor="website" className="label">
                  Full Name
                </label>
                <div className="vertical-line">First and Last Name</div>
                <input
                  type="text"
                  id="fullName"
                  value={profileData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-div">
                <label htmlFor="photo" className="photo-label">
                  <p>Your Photo</p>
                  <p className="photo-p">
                    This will be displayed on your profile
                  </p>
                </label>
                <div className="labels">
                  <label
                    htmlFor="Image1"
                    className={isImageUploaded ? "uploaded" : ""}
                  >
                    <input
                      id="Image1"
                      name="image"
                      value={values.image}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    ></input>
                    {showImage && (
                      <div className="img-display">
                        {isImageUploaded && (
                          <img src={URL.createObjectURL(file)} alt="food-img" />
                        )}
                        {!isImageUploaded && (
                          <img src={values.image} alt="food-img" />
                        )}
                      </div>
                    )}
                    <label htmlFor="Image1">
                      <img src={icons} alt={icons} className="menu-inputImg" />
                    </label>
                  </label>
                </div>
              </div>
              <h2 className="businessHead">BUSINESS DETAILS</h2>
              <div className="form-div">
                <label htmlFor="vendorName" className="label">
                  Business Name
                </label>
                <div className="vertical-line">eathub.com.ng/</div>
                <input
                  type="text"
                  id="username"
                  defaultValue={profileData.vendorName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="address" className="label">
                  Address
                </label>
                <div className="vertical-line">Block/Plot/No</div>
                <input
                  type="address"
                  id="username"
                  defaultValue={profileData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="kitchenNumber" className="label">
                  Kitchen Number
                </label>
                <div className="vertical-line">(+234)</div>
                <input
                  type="numeric"
                  id="username"
                  defaultValue={profileData.kitchenNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="email" className="label">
                  Email Address
                </label>
                <div className="vertical-line">@gmail,outlook,yahoo</div>
                <input
                  type="email"
                  id="username"
                  defaultValue={profileData.emailAddress}
                  onChange={handleChange}
                />
              </div>

              <div className="kitchen-container">
                <label htmlFor="kitchen-description" className="photo-labels">
                  <p>Kitchen Description</p>
                  <p className="photo-p">Write a short description</p>
                </label>
                <textarea
                  id="kitchen-description"
                  value={kitchenDescription}
                  placeholder="Add a short bio..."
                  maxLength={maxLength}
                  onChange={handleChangeDEsc}
                ></textarea>
                <div>{remainingLength} characters left</div>
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default Profile;
