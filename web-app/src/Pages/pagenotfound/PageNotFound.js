import React from "react";
import pagenotfoundImage from "../../Assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import "./pagenotfound.scss";

const PageNotFound = () => {
  return (
      <div className="pagenotfoundPage">
          <div className="pagenotfound">
            <img
              src={pagenotfoundImage}
              
              alt="not found"
            ></img>
            <h1>This page you are looking for does not exist </h1>
            <Link to="/"><button className="btn-return">Return to Home </button></Link>
          </div>
      </div>
  );
};

export default PageNotFound;
