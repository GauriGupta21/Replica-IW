// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import "./App.css";
import "./components/ToggleButton.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <Router>
      <ThemeProvider>
        <div className={`App ${theme}`}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" render={() => <SearchPage theme={theme} />} />
          </Switch>
          <button onClick={toggleTheme} className={`theme-toggler ${theme}`}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
