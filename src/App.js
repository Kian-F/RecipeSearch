import React, { useState } from "react";
import Api from "./components/Api";
import Recipes from "./components/containers/Recipe";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const getSearchQuery = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={getSearchQuery}
        />
        <button className="search-button" type="submit">
          Search
        </button>
        <Api />
      </form>
    </div>
  );
}

export default App;
