import React, { useState, useEffect } from "react";

const sendLocationToSheet = async (lat, lng) => {
  const data = new URLSearchParams();
  data.append("latitude", lat);
  data.append("longitude", lng);
  data.append("source", "page_load");

  await fetch("https://script.google.com/macros/s/AKfycbyy437y39szJ4-oaM5W2eUeVLkpvQbOHDVeOnbAPRGUXYZ_25ibZ13gr2IQ2xgEv9U8/exec", {
    method: "POST",
    body: data,
  });
};

const GetLocation = () => {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });

  const [error, setError] = useState("");
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLocation({ lat, lng });

        // 👉 send to sheet immediately
        sendLocationToSheet(lat, lng);
      },
      (err) => {
        setError("Location permission denied");
      }
    );
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
    </div>
  );
};
export default GetLocation;
