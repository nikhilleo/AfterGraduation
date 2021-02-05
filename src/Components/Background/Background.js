import React from "react";
import "./Background.css";
import Logo from "../Background/logo_transparent.png";

function Background() {
  return (
    <div className="back_custom">
      <div className="back_design" data-aos="fade-up">
        <div className="big_orange"></div>
        <div className="small_orange"></div>
        <div className="design_circle_logo">
          <img src={Logo} className="design__logo" alt="" />
        </div>
        <div className="big_blue"></div>
        <div className="mid_blue"></div>
        <div className="small_blue"></div>
        <div className="custom_logo"></div>
      </div>
      <div className="back_info" data-aos="fade-down">
        <h3>Explore Yourself !</h3>
        <h4>
          With The JAVA Master Class Beginner To Expert In Full Stack
          Developement
        </h4>
        <div className="quote">
          <div className="vertical__quote"></div>
          <p>
            "The most important single aspect of software development is to be
            clear about what you are trying to build." - Bjarne Stroustrup
          </p>
        </div>
      </div>
    </div>
  );
}

export default Background;
