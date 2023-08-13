import React from "react";
import "./index.css";
import PrivacyHeroImg from "../../../Components/PrivacyHeroImg/PrivacyHeroImg";

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPage">
      <PrivacyHeroImg heading="Privacy Policy" />

      <div className="about-us-container">
        <div className="text-container">
          <h2>Privacy Policy for Eathub</h2>
          <p>
            At Eathub, we are committed to protecting the privacy of our
            customers and vendors. This Privacy Policy outlines the types of
            personal information we collect, how we use it, and the measures we
            take to keep your information safe.
          </p>

          <h2>Personal Information We Collect</h2>
          <p>
            We collect personal information when you use our web app, including
            your name, email address, phone number, and location. We may also
            collect information about your device, browser, and IP address.
          </p>

          <h2>How We Use Your Personal Information</h2>
          <p>
            We use your personal information to provide you with our services,
            including connecting you with vendors who are selling food in Lagos
            Nigeria. We may also use your information to communicate with you
            about our services, to improve our web app, and to prevent fraud and
            abuse.
          </p>

          <h2>How We Protect Your Personal Information</h2>
          <p>
            We take measures to protect your personal information from
            unauthorized access, alteration, or disclosure. We use encryption
            technology to secure your data, and we regularly review our security
            practices to ensure that we are providing the best possible
            protection for your information.
          </p>

          <h2>Disclosure of Personal Information</h2>
          <p>
            We do not sell or rent your personal information to third parties.
            We may disclose your information to our vendors in order to provide
            you with our services, or to comply with legal requirements.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@eathub.com. By using our web app, you agree to the
            terms of this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
