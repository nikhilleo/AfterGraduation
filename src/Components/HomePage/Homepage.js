import React from 'react'
import Background from "./../Background/Background"
import Logo from "../Background/logo_transparent.png"
import "./Homepage.css"

function Homepage() {
    return (
        <div className="main">
                <Background/>
            <div className="home__info">
                <div className="back_design">
                    <div className="big_orange"></div>
                    {/* <div className="big_orange1"></div> */}
                    <div className="small_orange"></div>
                    <div className="design_circle_logo">
                        <img src={Logo} className="design__logo" alt=""/>
                    </div>
                    <div className="big_blue"></div>
                    <div className="mid_blue"></div>
                    <div className="small_blue"></div>
                    <div className="custom_logo"></div>
                </div>
                <div className="info">
                    <p>I Chetan Kabra Worked As Assistant Professor In Pemraj Sarda College For 7 Years. During This Time , I Taught Several Programming Languages Like <br/>JAVA C C++ VB OracleDB PHP HTML CSS JAVASCRIPT etc.</p>
                    <p>I Have Completed BCA In 2008 From Ahmednagar College Ahmednagar , And MCA In 2011 From JSPM College Wakad Pune. </p>
                    <p>Currently Working As A Backend Developer In MNC In Pune</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage
