import React, { useContext, useState } from "react";
import { ChartDataContext } from "../../../../helper/requireAuth";
import "./profile.css";
import { Formik } from "formik";
import * as Yup from "yup";
import icon from "../../../../Assets/pngs/profile.png";
import icons from "../../../../Assets/pngs/ImgUpload.png";

const Profile = () => {
  const glbData = useContext(ChartDataContext);

  // to update the value % state of an image into a file acceptable to the backend
  const [file, setFile] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  // The Method handling that
  const handleImageUpload = (event) => {
    setIsImageUploaded(true);
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  };
  const [username, setUsername] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [kitchenNumber, setKitchenNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState("");
  const [kitchenDescription, setKitchenDescription] = useState("");
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Use a regular expression to remove any non-numeric characters
    const numericValue = inputValue.replace(/\D/g, "");
    setKitchenNumber(numericValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to the server for processing
    // ...
  };

  //
  const maxLength = 450;
  const [remainingLength, setRemainingLength] = useState(450);

  const handleChange = (event) => {
    // setValue(event.target.value);
    setKitchenDescription(event.target.value);
    setRemainingLength(maxLength - kitchenDescription.length);
  };
  
  return (
    <Formik>
      {(props) => {
        return (
          <div className="profile-container">
            <form>
              <div className="profile-head">
                <div className="profile-header">
                  <h1>Welcome {glbData.username}!</h1>
                </div>
                <span className="profile-img-header">
                  {/* remember to make this container circled */}
                  <span className="profile-img">
                    {/* <span className="img-container">

                        </span> */}
                    <img src={icon} alt={icon} />
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
            <form onSubmit={handleSubmit}>
              <div className="form-div">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <div className="vertical-line">eathub.com.ng/</div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="input-field"
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
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
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
                    {/* sucessful display fix needs to be better */}
                    <input
                      id="Image1"
                      name="image"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                    ></input>
                    <label htmlFor="Image1">
                      <img src={icons} alt={icons} className="menu-inputImg" />
                    </label>
                  </label>
                </div>
              </div>
              <h2 className="businessHead">BUSINESS DETAILS</h2>
              <div className="form-div">
                <label htmlFor="businessName" className="label">
                  Business Name
                </label>
                <div className="vertical-line">eathub.com.ng/</div>
                <input
                  type="text"
                  id="username"
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
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
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
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
                  value={kitchenNumber}
                  onChange={handleInputChange}
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
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
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
                  onChange={handleChange}
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
