import React, { useEffect, useState } from "react";
import "./profile.css";
import { Formik } from "formik";
import Preloader from "../../../../layouts/Preloader/Preloader";
import icon from "../../../../Assets/pngs/profile (1).png";
import { useUpdateProfileMutation } from "../../../../model/auth/authServices";
import { useGetVendorProfileQuery } from "../../../../model/auth/authServices";
import Swal from "sweetalert2";

const Profile = () => {
  // Getting Profile State with RTK
  let email = JSON.parse(localStorage.getItem("email"));
  const { data, refetch } = useGetVendorProfileQuery(email, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });
  const profile = data?.data?.get_vendor_info;

  // Set up Profile Data
  const [profileData, setProfileData] = useState({});

  // TextArea keyword tracker
  const [businessDescription, setBusinessDescription] = useState("");
  const maxLength = 450;
  const [remainingLength, setRemainingLength] = useState(450);
  const handleChanges = (event) => {
    // setValue(event.target.value);
    setBusinessDescription(event.target.value);
    setRemainingLength(maxLength - businessDescription.length);
  };

  // to update the value % state of an image into a file acceptable to the backend
  const [file, setFile] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // The Method handling image upload
  const handleImageUpload = (event) => {
    console.log(event.target);
    setIsImageUploaded(true);
    setShowImage(true);
    setFile(event.target.files[0]);
    console.log(event.target.files[0], isImageUploaded);
  };

  // handling state with RTK
  const [isLoading, setIsLoading] = useState(false);
  const [updateProfile, { isLoading: isMutating }] = useUpdateProfileMutation();

  // Getting Pre-existing data
  useEffect(() => {
    console.log("Profile: ", profile);
    async function fetchProfileData() {
      setIsLoading(true);
      try {
        if (profile) {
          setProfileData(profile);
        } else {
          setProfileData({});
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchProfileData();
  }, [profile]);

  return profileData ? (
    <Formik
      initialValues={profileData}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const data = {
          business_email: values.email,
          phone_number: values.number,
          business_address: values.address,
          business_address_city: values.address_city,
          business_description: values.business_description,
          image: file,
        };
        const formattedData = {
          uid: profile.uid,
          data: { ...data },
        };
        console.log(formattedData);
        try {
          // call the update endpoint state here
          const response = await updateProfile(formattedData);
          console.log(`Profile Updated Sucessfully`, response);
          Swal.fire({
            text: "Sucessful Update",
            icon: "success",
            iconColor: "#fff",
            toast: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 2000,
            background: "#ff8323",
            color: "#fff",
          });
          await refetch();
        } catch (error) {
          // handle error here
          await error(`Error Updating Profile`, error);
          Swal.fire({
            text: "Unsucessfull Update",
            icon: "error",
            toast: true,
            position: "top-right",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(error);
        }
      }}
    >
      {(props) => {
        const { handleChange, handleSubmit, values } = props;
        return (
          <div className="profile-container">
            <form onSubmit={handleSubmit} className="secForm">
              <div className="profile-head">
                <div className="profile-header">
                  <h1>Welcome {profileData?.fullname}!</h1>
                </div>
                <span className="profile-img-header">
                  <div className="profile-img">
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
                              <img
                                src={URL.createObjectURL(file)}
                                alt="food-img"
                              />
                            )}
                            {!isImageUploaded && (
                              <img src={values.image} alt="food-img" />
                            )}
                          </div>
                        )}
                        <label htmlFor="Image1">
                          <img
                            src={icon}
                            alt={icon}
                            className="menu-inputImg"
                          />
                        </label>
                      </label>
                    </div>
                  </div>

                  <div className="profile-details">
                    <h2>Profile</h2>
                    <p>Update your photo and personal details.</p>
                  </div>
                  <div className="profile-btn">
                    <button id="cancel">Cancel</button>
                    <button type="submit" id="save">
                      {isLoading ? "Update" : <Preloader />}
                    </button>
                  </div>
                </span>
              </div>
              <div className="form-div">
                <label htmlFor="fullName" className="label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  disabled={true}
                  defaultValue={profileData?.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="vendorName" className="label">
                  Business Name
                </label>
                <input
                  type="text"
                  id="vendorName"
                  disabled={true}
                  defaultValue={profileData?.business_name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="address" className="label">
                  Address
                </label>
                <div className="col">
                  <input
                    type="address"
                    id="address"
                    defaultValue={profileData?.business_address}
                    onChange={handleChange}
                  />
                  <input
                    type="address"
                    id="address_city"
                    defaultValue={profileData?.business_address_city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-div">
                <label htmlFor="kitchenNumber" className="label">
                  Kitchen Number
                </label>

                <input
                  type="numeric"
                  id="number"
                  defaultValue={profileData?.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="form-div">
                <label htmlFor="email" className="label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={profileData?.business_email}
                  onChange={handleChange}
                />
              </div>

              <div className="kitchen-container">
                <label htmlFor="business_description" className="photo-labels">
                  <p>Business Description</p>
                  <p className="photo-p">Write a short description</p>
                </label>
                <textarea
                  id="business_description"
                  defaultValue={profile?.business_description}
                  placeholder="Add a short bio..."
                  maxLength={maxLength}
                  onChange={handleChange}
                ></textarea>
                {/* <div>{remainingLength} characters left</div> */}
              </div>
            </form>
          </div>
        );
      }}
    </Formik>
  ) : (
    <Preloader />
  );
};

export default Profile;
