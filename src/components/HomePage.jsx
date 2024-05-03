// HomePage.js
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "../App.css";
import LanguageSelector from "./LanguageSelector";

function HomePage({ theme }) {
  return (
    <div className="home-page">
      <Header />
      <SearchBar theme={theme} />
      <LanguageSelector />
      <Footer />
    </div>
  );
}

export default HomePage;
