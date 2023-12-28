import React from "react";
import "./LandingPage.css";
import HeroSection from "../HeroSection/HeroSection";
import Banner from "../Banner/Banner";
import TopCategoryProducts from "../TopProducts/TopProducts";
import AllProducts from "../AllProducts/AllProducts";
import Footer from "../Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="landing-page-container">
        <HeroSection />
      </div>
      <TopCategoryProducts />
      <AllProducts />
      <Footer />
    </>
  );
}
