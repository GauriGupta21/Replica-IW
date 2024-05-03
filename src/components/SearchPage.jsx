// SearchPage.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResult from "../components/SearchResult";
import allahabadData from "../data/allahabadData";
import AdComponents from "../components/AdComponents";
import SearchPageBar from "./SearchPageBar";
import allahabadImageData from "../data/allahabadImageData";
import "../components/SearchPage.css";
import "../components/SearchPageBar.css";
import "../components/ImageTab.css";
import PeopleAlsoAskSection from "../components/PeopleAlsoAskSection";
import peopleAlsoAskData from "../data/peopleAlsoAskData";
import AdditionalInfo from "../components/AdditionalInfo";

function SearchPage({ theme }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  const [activeTab, setActiveTab] = useState("web");
  const filteredResults = allahabadData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  const renderResults = () => {
    switch (activeTab) {
      case "web":
        return (
          <div>
            <PeopleAlsoAskSection data={peopleAlsoAskData}  />
            {filteredResults.map((result, index) => (
              <SearchResult key={index} {...result} type="text" theme={theme} />
            ))}
          </div>
        );

      case "image":
        return (
          <div className="image-results-container">
            {allahabadImageData.map((image, index) => (
              <div key={index} className="image-result">
                <img src={image.imageUrl} alt={image.title} />
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };
  const adData = {
    link: "https://example.com",
    imageUrl: "https://via.placeholder.com/150",
    title: "Allahabad Darshan",
    description: "Tourist Places To Vist In Handy Price",
  };
  return (
    <div className={`searchContainer ${theme}`}>
      <div className="search-page">
        <header className={`header searchHeader ${theme}`}>
          <img
            style={{ width: "100px", marginLeft: "67px" }}
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="Google"
          />
        </header>
        <SearchPageBar theme={theme} />
      </div>
      <div className={`search-tabs ${theme}`}>
        <button
          className={activeTab === "web" ? "active" : ""}
          onClick={() => setActiveTab("web")}
        >
          Web
        </button>
        <button
          className={activeTab === "image" ? "active" : ""}
          onClick={() => setActiveTab("image")}
        >
          Images
        </button>
      </div>

      {activeTab !== "image" && (
        <div className={`ad-container ${theme}`}>
          <AdComponents adData={adData} />
          <AdComponents adData={adData} />
          <AdComponents adData={adData} />
          <AdComponents adData={adData} />
        </div>
      )}

      <div className={`search-results ${theme}`}>
        {renderResults()}
        {activeTab !== "image" && <AdditionalInfo />}

      </div>
    </div>
  );
}

export default SearchPage;
