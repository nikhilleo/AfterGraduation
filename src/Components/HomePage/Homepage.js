import React from "react";
import Background from "./../Background/Background";
import BackgroundReverse from "./../Background Reverse/BackgroundReverse";
import Carousel from "../Carousel/Carousel";
// import Logo from "../Background/logo_transparent.png"
import "./Homepage.css";

function Homepage() {
  return (
    <div className="main">
      <Background />
      <BackgroundReverse />
      <Carousel />
    </div>
  );
}

export default Homepage;
