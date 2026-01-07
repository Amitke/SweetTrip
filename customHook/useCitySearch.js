import React,{ useMemo,useState } from "react";

export const useCitySearch = (cityArray) => {
  const [query, setQuery] = useState("");

  // 1️⃣ Duplicate remove (City + State) + Sort
  const uniqueSortedCities = useMemo(() => {
    if (!Array.isArray(cityArray)) return [];

    const map = new Map();

    cityArray.forEach(city => {
      if (city?.City && city?.State) {
        const key = `${city.City}-${city.State}`;
        map.set(key, city);
      }
    });

    return Array.from(map.values()).sort((a, b) =>
      a.City.localeCompare(b.City)
    );
  }, [cityArray]);

  // 2️⃣ Search filter (Top 10 only)
  const filteredCities = useMemo(() => {
    if (!query) return [];
    return uniqueSortedCities
      .filter(c =>
        `${c.City} ${c.State}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
  }, [query, uniqueSortedCities]);

  return {
    query,
    setQuery,
    filteredCities
  };
};