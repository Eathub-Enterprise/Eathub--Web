// import React from 'react';
import "./footer.css";
import google from "../../Assets/images/Google.webp";
import apple from "../../Assets/images/Apple.png";
// import { Link } from "react-router-dom";
const SUPPORT = [
  {
    id: 1,
    url: "/account",
    name: "Account",
  },
  {
    id: 2,
    url: "/support",
    name: "Support",
  },
  {
    id: 3,
    url: "/feedback",
    name: "Feedback",
  },
];

const LINKS = [
  {
    id: 1,
    url: "about-us",
    name: "About Us",
  },
  {
    id: 2,
    url: "privacy",
    name: "Privacy Policy",
  },
  {
    id: 3,
    url: "terms",
    name: "Terms and Agreement",
  },
];

const BLOGS = [
  {
    id: 1,
    url: "/restaurant",
    name: "Setting Up your Restaurant",
  },
  {
    id: 2,
    url: "/logistics",
    name: "Joining the Logistics Team",
  },
  {
    id: 3,
    url: "/kitchen",
    name: "Starting your Kitchen",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-logo">
            <h1>
              <span style={{ color: "#ffff" }}>Eat</span>
              <span style={{ color: "#FF8323" }}>Hub</span>
            </h1>
            <h5>Coming Soon to these platforms:</h5>
            <div className="link-btn">
              <img src={google} alt={google} />
              <img src={apple} alt={apple} />
            </div>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              {SUPPORT.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              {LINKS.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              {BLOGS.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="footer-bottom-text">
          <p>2023 Eathub</p>
          <p>
            <b>Email Us</b>: officialeathub@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
