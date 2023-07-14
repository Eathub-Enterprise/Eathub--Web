import React from "react";
import Navbar from "../layouts/Navbar/Navbar";
import FirstSection from '../Components/FirstSec/FirstSec'
import SecondSection from '../Components/SecondSec/SecondSec'
import ThirdSection from '../Components/ThirdSec/ThirdSec'
import FourthSection from '../Components/FourthSec/FourthSec'
import FifthSection from '../Components/FifthSec/FifthSec'
import SixthSection from '../Components/SixthSec/SixthSec'
import Footer from "../layouts/Footer/Footer.jsx";
import './HomePage.css'
export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection /> 
      <Footer />
    </div>
  );
}
