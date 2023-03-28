import React from "react";
import AboutHeroImg from "../../../Components/AboutHeroImg/AboutHeroImg";
import "./index.css";




const Terms = () => {
  return (
    <div className="TermsPage">
  
      <AboutHeroImg heading="Terms & Agreement" />

      <div className="about-us-container">
        <div className="text-container">
          <h2>Eathub Terms and Conditions</h2>
          <p>
          By using Eathub, an online kitchen that connects customers with vendors who are selling food in Lagos Nigeria, you agree to the following terms and conditions: <br></br>
          <br></br>
- Users must be 18 or older. <br></br>
- Users must use our services for personal, non-commercial purposes only. <br></br>
- Payment must be made to vendors for food purchases. <br></br>
- We are not responsible for food quality, safety, or legality. <br></br>
- Illegal or unauthorized use of our app is prohibited. <br></br>
- All intellectual property rights are owned by us or our licensors. <br></br>
- We are not liable for damages arising from app usage. <br></br>
- We may terminate accounts or suspend access at any time. <br></br>
<br></br>
Please read these terms and conditions carefully before using our web app. By using our web app, you agree to these terms and conditions.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Terms;
