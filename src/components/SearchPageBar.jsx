// SearchBar.js
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FaSearch, FaMicrophone, FaCamera, FaTimes } from 'react-icons/fa';
import './SearchPageBar.css';

function SearchPageBar({ defaultQuery = '',theme}) {
  const [querys, setQuerys] = useState(defaultQuery);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');
    if (searchQuery) {
      setQuerys(searchQuery);
    }
  }, [location.search]);

  const handleChange = (e) => {
    setQuerys(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${querys}`);
  };
  const handleClearSearch = () => {
    setQuerys('');
  };

  return (
    <form className="searchPageForm" onSubmit={handleSubmit}>
      <div className="search-Container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={querys}
          onChange={handleChange}
          placeholder="Search Google or type a URL"
          autoFocus 
          className={`search-input ${theme === 'dark' ? 'dark' : 'light'}`}
        />
        <div className="icon-container">
        <FaTimes className="icon cross" onClick={handleClearSearch} />
          <FaMicrophone className="icon microphone" />
          <FaCamera className="icon camera" />
        </div>
      </div>
      {location.pathname !== '/search' && (
        <div className="search-link">
          <button type="submit" className="search-button">Google Search</button>
          <button type="button" className="lucky-button">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default SearchPageBar;
