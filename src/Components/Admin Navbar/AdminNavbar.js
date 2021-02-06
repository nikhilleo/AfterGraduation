import React, { useState } from "react";
import "./AdminNavbar.css";
import { Link } from "react-router-dom";
import Logo from "../Background/logo_transparent.png";

function AdminNavbar() {
  const handleLogout = () => {
    window.location.reload();
    localStorage.clear();
  };

  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/Admin/tyFAG8sBHkFc2pyZE7jJ47MSuas8496u4389hds98ds9bg">
          <img src={Logo} className="logo1" />
        </Link>
        <ul
          className="nav-links"
          style={{
            transform: Toggle ? "translateX(0px)" : "",
          }}
        >
          {/* <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Job">Job Postings</Link>
          </li> */}
          {/* <li>
            {localStorage.getItem("user") ? (
              <Link onClick={handleLogout}>Log Out</Link>
            ) : (
              <Link to="/Register">
                {localStorage.getItem("user") ? "LogOut" : "Register"}
              </Link>
            )}
          </li> */}
          <li>
              <Link to="/Admin/tyFAG8sBHkFc2pyZE7jJ47MSuas8496u4389hds98ds9bg">Post A Job</Link>
          </li>
          <li>
              <Link to="/Admin/tyFAG8sBHkFc2pyZE7jJ47MSuas8496u4389hds98ds9bg/registered">Registered Students</Link>
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

export default AdminNavbar;
