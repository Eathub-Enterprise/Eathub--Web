// import React from 'react';
import "./footer.css";
import google from '../../Assets/images/Google.png';
import apple from '../../Assets/images/Apple.png';


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="footer-logo">
          <h1>
            <span style={{ color: "#ffff" }}>Eat</span>
            <span style={{ color: "#FF8323" }}>Hub</span>
          </h1>
          <div className="link-btn">
          <img src={google} alt={google} />
          <img src={apple} alt={apple} />
          </div>
        </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="account">Account</a>
              </li>
              <li>
                <a href="support">Support Center</a>
              </li>
              <li>
                <a href="feed">Feedback</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="about">About Us</a>
              </li>
              <li>
                <a href="privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="terms">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="add">Adding your restuarant</a>
              </li>
              <li>
                <a href="delivery">Joining our delivery service</a>
              </li>
              <li>
                <a href="kitchen">Starting Your Kitchen</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-text">
          <p>2022 Eathub</p>
          <p>eathublagos@gmail.com</p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
