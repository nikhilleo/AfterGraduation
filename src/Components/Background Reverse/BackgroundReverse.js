import React, { useEffect } from "react";
import "./BackgroundReverse.css";
import Logo from "../Background/logo_transparent.png";
import Aos from "aos";
import "aos/dist/aos.css";

function BackgroundReverse() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        className="home__info"
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="1200"
      >
        <div className="back_design1">
          <div className="big_orange"></div>
          {/* <div className="big_orange1"></div> */}
          <div className="small_orange"></div>
          <div className="design_circle_logo">
            <img src={Logo} className="design__logo" alt="" />
          </div>
          <div className="big_blue"></div>
          <div className="mid_blue"></div>
          <div className="small_blue"></div>
          <div className="custom_logo"></div>
        </div>
        <div
          className="info"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-duration="1200"
        >
          <p>
            I <strong>Chetan Kabra</strong> Worked As Assistant Professor In
            Pemraj Sarda College For 7 Years. During This Time , I Taught
            Several Programming Languages Like <br />
            <strong>
              JAVA C C++ VB OracleDB PHP WebTechnologies JAVASCRIPT etc.
            </strong>
          </p>
          <p>
            I Have Completed BCA In 2008 From Ahmednagar College Ahmednagar ,
            And MCA In 2011 From JSPM College Wakad Pune.{" "}
          </p>
          <p>Currently Working As A Backend Developer In MNC In Pune</p>
        </div>
      </div>
    </div>
  );
}

export default BackgroundReverse;
