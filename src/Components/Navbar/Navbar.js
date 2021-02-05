import React, { useState } from "react";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Background/logo_transparent.png";

function Navbar() {
  const handleLogout = () => {
    var txt;
    window.location.reload();
    localStorage.clear();
  };

  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/">
          <img src={Logo} className="logo" />
        </Link>
        <ul
          className="nav-links"
          style={{
            transform: Toggle ? "translateX(0px)" : "",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Job">Job Postings</Link>
          </li>
          <li>
            {localStorage.getItem("user") ? (
              <Link onClick={handleLogout}>Log Out</Link>
            ) : (
              <Link to="/Register">
                {localStorage.getItem("user") ? "LogOut" : "Register"}
              </Link>
            )}
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
