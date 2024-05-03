// SearchResult.js
import React from "react";
import { FaGoogle } from "react-icons/fa";
import "../components/SearchResult.css"; // Import SearchResult.css
import "../components/ToggleButton.css"; // Import ToggleButton.css

function SearchResult({ title, url, description, theme, type }) {
  const textClass = theme === "light" ? "text-light" : "text-dark"; // Determine text color class based on theme
  const resultStyle = {
    paddingLeft: type === "text" ? "150px" : "0", // Adjust the padding as needed
  };

  return (
    <div className={`search-result ${textClass}`} style={resultStyle}>
      <FaGoogle className="logo-icon" />
      <a className={`text ${textClass}`} href={url}>
        <h3>{title}</h3>
      </a>
      <div className="descImg">
        <p className={`text ${textClass}`}>{description}</p>
        <div className="image-info">
          <img
            style={{ width: "100px", height: "100px" }}
            src="https://via.placeholder.com/150"
            alt="Prayagraj"
          />
        </div>
      </div>
      Visit: <a href={url}>{url}</a>
    </div>
  );
}

export default SearchResult;
