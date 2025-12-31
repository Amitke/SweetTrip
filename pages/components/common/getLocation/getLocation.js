import React, { useState, useEffect } from "react";

const sendLocationToSheet = (dataParam) => {
  if (!dataParam || !dataParam.display_name) {
    console.error("display_name missing:", dataParam);
    return;
  }
  const data = new URLSearchParams();
  data.append("address", dataParam.display_name);
  data.append("addresstype", dataParam.addresstype);

  fetch(
    "https://script.google.com/macros/s/AKfycbyy437y39szJ4-oaM5W2eUeVLkpvQbOHDVeOnbAPRGUXYZ_25ibZ13gr2IQ2xgEv9U8/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    }
  );
};

const GetLocation = () => {
  const [location, setLocation] = useState({
    lat: "",
    lng: "",
  });
  const [data, setData] = useState({});
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng });
      },
      (err) => {
        console.log("Location permission denied");
      }
    );
  }, []);
  useEffect(() => {
    if (location.lat && location.lng) {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [location.lat, location.lng]);
  if (data) sendLocationToSheet(data);
  return <></>;
};
export default GetLocation;
