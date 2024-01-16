import React, { useState, useEffect } from "react";
import icon from "../../Assets/pngs/ImgUpload.png";
import "./index.css";

// ImageUploader component
const ImageUploader = ({ onImageUpload, imageUrl, header }) => {
  const [file, setFile] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

  const handleImageUpload = (event) => {
    setIsImageUploaded(true);
    setShowImage(true);
    setFile(event.target.files[0]);
    onImageUpload(event.target.files[0]);
  };

  useEffect(() => {
    setShowImage(isImageUploaded);
  }, [isImageUploaded]);

  return (
    <div className="shared-input-img">
      <h4>{header}</h4>
      <div className="shared-labels">
        {isImageUploaded && (
          <div className="img-display">
            <img
              src={URL.createObjectURL(file)}
              alt="shared-img"
              onClick={() => {
                setIsImageUploaded(false);
                setShowImage(false);
                setFile(null);
                onImageUpload(null);
              }}
              style={{
                cursor: "pointer",
                maxWidth: "128px",
                maxHeight: "128px",
              }}
            />
          </div>
        )}
        {!isImageUploaded && (
          <>
            <label htmlFor="Image1">
              <img src={icon} alt={icon} className="shared-inputImg" />
            </label>
            <input
              id="Image1"
              name="business_image"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
