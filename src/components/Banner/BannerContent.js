import React from "react";
import "./Banner.css";

export default function BannerContent() {
  return (
    <div className="flex justify-center items-center p-[20px] text-center w-[50%] mx-auto">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="text-3xl font-bold">FREE GUITAR LESSONS!</div>
        <div className="text-xl">
          Purchase any guitar over $499.99 and recieve a one-hour guitar lesson
          free.
        </div>
        <button className="learn-more-btn rounded-sm">Learn More</button>
      </div>
    </div>
  );
}
