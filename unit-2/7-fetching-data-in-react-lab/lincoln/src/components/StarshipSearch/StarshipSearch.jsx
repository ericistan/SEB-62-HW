import React, { useState } from "react";

const StarshipSearch = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchStarships(searchInput);
    setPrevSearchTerm(searchInput);
    setSearchInput("");
  };

  const handleShowAllStarships = () => {
    props.searchStarships("");
    setPrevSearchTerm("");
  };

  return (
    <div>
      <p>Results shown: {props.displayedStarshipCount}</p>
      <p>
        Previous search input:{" "}
        {prevSearchTerm ? prevSearchTerm : "Search for a starship by name."}
      </p>
      {prevSearchTerm ? (
        <button type="button" onClick={handleShowAllStarships}>
          Show all starships
        </button>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship-search">Search starships</label>
        <input
          id="starship-search"
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default StarshipSearch;
