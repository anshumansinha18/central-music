import React from "react";
import "./HeroSection.css";
import Header from "../Header/Header";

export default function HeroSection() {
  return (
    <div
      className="hero-img text-white bg-center bg-cover h-[80vh]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/hero-img.png)`,
      }}
    >
      <Header />
      <HeroText />
    </div>
  );
}

function HeroText() {
  return (
    <div>
      <div>Fullfilling dreams with strings attached</div>
    </div>
  );
}
