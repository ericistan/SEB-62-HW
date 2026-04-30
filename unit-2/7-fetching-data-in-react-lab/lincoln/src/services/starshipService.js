const URL = "https://swapi.info/api/starships/";

const indexStarships = async () => {
  try {
    const res = await fetch(URL);
    if (!res.ok) {
      // Throw an error if we get a response that doesn't
      // hold valid starship data.
      throw new Error("Failed to fetch starships.");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { indexStarships };
