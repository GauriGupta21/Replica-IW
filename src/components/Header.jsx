// Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../App.css";

function Header({ theme }) {
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";

  if (isSearchPage) {
    return null; // Return null if it's the search page
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-items">
          <li
            className={`navbar-item ${
              theme === "dark" ? "dark-link" : "light-link"
            }`}
          >
            <Link to="/" className="link">
              Gmail
            </Link>
          </li>
          <li
            className={`navbar-item ${
              theme === "dark" ? "dark-link" : "light-link"
            }`}
          >
            <Link to="/images" className="link">
              Images
            </Link>
          </li>
          <li
            className={`navbar-item ${
              theme === "dark" ? "dark-link" : "light-link"
            }`}
          >
            <Link to="/lab" className="link">
              Lab
            </Link>
          </li>

          <li className="navbar-item">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-icon"
            />
          </li>
        </ul>
      </nav>
      <header className="header">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
      </header>
    </>
  );
}

export default Header;
