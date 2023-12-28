import React from "react";
import "./HeroSection.css";
import Header from "../Header/Header";
import HeroSectionContainer from "./HeroSectionContainer";
import HeroText from "./HeroText";
import Banner from "../Banner/Banner";

export default function HeroSection() {
  return (
    <>
      <HeroSectionContainer>
        <Header />
        <HeroText />
      </HeroSectionContainer>
      <Banner />
    </>
  );
}
