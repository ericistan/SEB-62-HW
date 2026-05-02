export const fetchLanguages = async () => {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,languages",
    );
    if (!res.ok) {
      throw new Error("Failed to fetch languages.");
    }
    const data = await res.json();
    const languagesMap = {};
    data.forEach((country) => {
      if (country.languages) {
        Object.entries(country.languages).forEach(([code, name]) => {
          if (!languagesMap[code]) {
            languagesMap[code] = name;
          }
        });
      }
    });

    const languagesArray = Object.entries(languagesMap).map(
      ([code, name], index) => ({
        id: index + 1,
        code: code,
        name: name,
      }),
    );

    console.log("API returned:", data);
    return languagesArray;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export default {
  fetchLanguages,
};
