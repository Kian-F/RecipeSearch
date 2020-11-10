import React, { useState } from "react";
import Api from "./components/Api";
import Recipes from "./components/containers/Recipe";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("")
  const getInput = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const setInput = (e)=>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={setInput}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={getInput}
        />
        <button className="search-button" type="submit">
          Search
        </button>
        <Api query={query}/>
      </form>
    </div>
  );
}

export default App;
