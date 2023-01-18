import React from 'react';
import Navbar from '../layouts/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import InfoHero from '../Components/Infohero/InfoHero';
import ShopHero from '../Components/ShopHero/ShopHero';
import ShowHero from '../Components/ShowcaseHero/ShowHero';
import DeliveryHero from '../Components/DeliveryHero/DeliveryHero';
import DownloadHero from '../Components/DownloadHero/DownloadHero';
import Membership from '../Components/Membership/Membership';
import Footer  from '../layouts/Footer/Footer.jsx';


export default function Homepage() {

  return (
    <div className="homepage">
        <Navbar />
        <Hero />
        <InfoHero />
        <ShopHero />
        <ShowHero />
        <DeliveryHero />
        <DownloadHero />
        <Membership />
        <Footer />
    </div>
  )
}
