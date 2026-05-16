import React, { useEffect, useState } from "react";
import StarshipList from "./components/StarshipList/StarshipList";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import * as starshipService from "./services/starshipService";

function App() {
  const [starshipData, setStarshipData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const fetchStarshipData = async () => {
    try {
      const data = await starshipService.indexStarships();
      setStarshipData(data);
      setDisplayedStarships(data);
    } catch (error) {
      console.log("cannot fetch, components error: ", error);
    }
  };

  const handleSearch = (searchTerm) => {
    //convert userInput to lowercase.
    const filteredStarships = starshipData.filter((starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setDisplayedStarships(filteredStarships);
  };

  useEffect(() => {
    fetchStarshipData();
  }, []);

  return (
    <div>
      <h1>Star Wars API</h1>
      <StarshipSearch
        searchStarships={handleSearch}
        displayedStarshipCount={displayedStarships.length}
      />
      <StarshipList appData={displayedStarships} />
    </div>
  );
}

export default App;
