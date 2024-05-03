// SearchBar.js
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { FaSearch, FaMicrophone, FaCamera, FaTimes } from "react-icons/fa"; // Import the search icon
import "./SearchBar.css";

function SearchBar({ defaultQuery = "", theme }) {
  const [query, setQuery] = useState(defaultQuery);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("q");
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location.search]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${query}`);
  };

  const handleLuckyClick = () => {
    console.log("hi");
  };
  const handleClearSearch = () => {
    setQuery("");
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search Google or type a URL"
          autoFocus
          className="search-input"
        />
        <div className="icon-container">
          <FaTimes className="icon cross" onClick={handleClearSearch} />
          <FaMicrophone className="icon microphone" />
          <FaCamera className="icon camera" />
        </div>
      </div>
      {location.pathname !== "/search" && (
        <div className="search-link">
          <button type="submit" className="search-button">
            Google Search
          </button>
          <button
            type="button"
            className="lucky-button"
            onClick={handleLuckyClick}
          >
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
