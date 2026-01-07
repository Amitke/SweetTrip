import React,{ useMemo } from "react";

const useUniqueSortedCities = (cityArray) => {
  return useMemo(() => {
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
};
export default useUniqueSortedCities;