import React, { useState, useEffect } from "react";

const sendLocationToSheet = async (lat, lng, address) => {
  const data = new URLSearchParams();
  data.append("latitude", lat);
  data.append("longitude", lng);
  data.append("address", address);

  await fetch(
    "https://script.google.com/macros/s/AKfycbyy437y39szJ4-oaM5W2eUeVLkpvQbOHDVeOnbAPRGUXYZ_25ibZ13gr2IQ2xgEv9U8/exec",
    {
      method: "POST",
      body: data,
    }
  );
};

const GetLocation = () => {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });
  const [address, setAddress] = useState("");
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
        console.log("Latitude:", lat, "Longitude:", lng);

        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`
        )
          .then((res) => res.json())
          .then((data) => {
            setAddress(data.display_name);
          });
        setLocation({ lat, lng });
        sendLocationToSheet(lat, lng, address);
      },
      (err) => {
        setError("Location permission denied");
      }
    );
    console.log("address:", address);
  }, []);
  return <div>{error && <p>{error}</p>}</div>;
};
export default GetLocation;
