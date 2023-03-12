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
          </div>
        );
      }}
    </Formik>
  );
};

export default Profile;
