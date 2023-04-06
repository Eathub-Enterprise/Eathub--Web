import React, { useContext, useState } from "react";
import { ChartDataContext } from "../../../../helper/requireAuth";
import "./profile.css";
import { Formik } from "formik";
import * as Yup from "yup";
import icon from "../../../../Assets/pngs/profile.png";

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
  const [website, setWebsite] = useState("");
  const [photo, setPhoto] = useState("");
  const [kitchenDescription, setKitchenDescription] = useState("");

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
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>

              <div className="form-div">
                <label htmlFor="website" className="label">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </div>

              <div className="form-div">
                <label htmlFor="photo" className="photo-label">
                  <p>Your Photo</p>
                  <p className="photo-p">
                    This will be displayed on your profile
                  </p>
                </label>
                <input
                  type="file"
                  id="photo"
                  onChange={(event) => setPhoto(event.target.files[0])}
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
