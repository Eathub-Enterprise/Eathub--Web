import React from "react";
import "./SixthSec.css";
import Faq from "../../Assets/images/faq.png";

const SixthSec = () => {


  return (
    <div className="SixthSection">
      <p className="sixP">Want to know <span className="Pcolours">Eathub?</span></p>
      <div className="secondContainer">
        <img src={Faq} alt="A marketplace" />
        <div className="marketContainer">
          <form className="login-inputs">
            <input
              id="Kitchen's_Name"
              name="Kitchen's_Name"
              placeholder="Kitchen's Name"
              type="text"
              className="Kitchen"
            />
            <input
              id="Email"
              name="Kitchen's_Name"
              placeholder="Email Address"
              type="Email"
              className="Kitchen"
            />
            <textarea
              id="Suggestion"
              name="Suggestion"
              placeholder="What do you want to know"
              type="text"
              className="suggest"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SixthSec;
