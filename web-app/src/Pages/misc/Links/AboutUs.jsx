import React from "react";
import AboutHeroImg from "../../../Components/AboutHeroImg/AboutHeroImg";
// import Navbar from "../../../layouts/Navbar/Navbar";
import "./index.css";

const AboutUs = () => {
  return (
    <div className="aboutPage">
      {/* <Navbar /> */}
      <AboutHeroImg heading="About EatHub" />

      <div className="about-us-container">
        <div className="text-container">
          <h2>WHO ARE WE ?</h2>
          <p>
            Eathub is an online kitchen that connects customers with vendors who
            are selling food in Lagos <br></br>
            Nigeria. Users can place their order from anywhere in Nigeria with
            at least 30 minutes delivery time and a maximum delivery time of 1
            hour. They can also get notifications when their order is ready for
            pickup and free home delivery, as well as recipes for the dishes
            they have ordered on Eathub. Customers will benefit from receiving
            fast, reliable service and healthy, fresh food delivered right to
            their door.
          </p>
          <h2>HOW WAS EATHUB FOUNDED</h2>
          <p>
            <span> ABATI: </span> In 2021, while stuck in a lagos traffic for over an hour and
            there wasn't anyone hawking something I could eat, and then the idea
            of ordering food at that spot and getting it within 20-30minutes
            came to me. I realised there are few services providing that, but a
            whole of people want this food delivery service to be made more so
            as to meet their immediate needs. That was what birthed the idea of
            Eathub ; a food delivery service where users(YOU) can order food
            from a food vendor of their choice at an affordable rate and get it
            in no time. A group of incredibly skilled youths came together to
            make this possible, they worked tirelessly and did good enough to
            have come up with this FOOD SERVICE to make life more comfortable
            for you reading this rightnow.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
