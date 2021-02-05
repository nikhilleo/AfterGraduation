import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Background/logo_transparent.png";

function Navbar() {
  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <nav>
        <img src={Logo} className="logo" />
        <ul
          className="nav-links"
          style={{
            transform: Toggle ? "translateX(0px)" : "",
          }}
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Job Postings</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
        <i
          onClick={() => setToggle(!Toggle)}
          className="fas fa-bars burger"
        ></i>
      </nav>
    </div>
  );
}

export default Navbar;
