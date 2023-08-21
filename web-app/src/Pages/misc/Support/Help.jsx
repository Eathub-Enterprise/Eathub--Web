import React from "react";
import supportImage from "../../../Assets/images/undermain.png";

import { Link } from "react-router-dom";
import "./sitemaintenance.css";

const Support = () => {
  return (
    
          <div className="maintainPage">
            <img
              src={supportImage}
              loading='lazy'
              alt="not found"
            ></img>
            <h1>Hang On! We are under maintenance <br></br>
             We’re preparing to serve you better </h1>
            
            <Link to="/"><button className="btn-rtn">Return to Home </button></Link>
          </div>
     
  );
};

export default Support;
