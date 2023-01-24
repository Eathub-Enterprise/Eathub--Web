// import React from 'react';
import "./footer.css";
import google from "../../Assets/images/Google.png";
import apple from "../../Assets/images/Apple.png";

const SUPPORT = [
  {
    url: "/account",
    name: "Account",
  },
  {
    url: "/support",
    name: "Support",
  },
  {
    url: "/feedback",
    name: "Feedback",
  },
];

const LINKS = [
  {
    url: "/aboutus",
    name: "About Us"
  },
  {
    url: "/privacy",
    name: "Privacy Policy"
  },
  {
    url:"/terms",
    name: "Terms and Agreement"
  }
];

const BLOGS = [
  {
    url: "/restaurant",
    name: "Setting Up your Restaurant"
  },
  {
    url: "/logistics",
    name: "Joining the Logistics Team"
  },
  {
    url:"/kitchen",
    name: "Starting your Kitchen"
  }
]

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
              {SUPPORT.map((link) => (
                <li key={link}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Links</h4>
            <ul>
              {LINKS.map((link) => (
                <li key={link.url}>
                  <a href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              {BLOGS.map((link) => (
                <li key={link}>
                  <a href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
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
