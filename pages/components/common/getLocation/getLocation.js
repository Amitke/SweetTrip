import React, { useEffect, useRef } from "react";

const sendLocationToSheet = (dataParam, pageName) => {
  let formData;
  if (!dataParam?.display_name && !pageName) {
    console.log("display_name missing:", dataParam, pageName);
    return;
  }
  if (dataParam && pageName) {
    formData = new URLSearchParams();
    formData.append("address", dataParam.display_name);
    formData.append("addresstype", dataParam.addresstype || "");
    formData.append("pageName", pageName);
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbwIZ6C5hZQKq5E03d5y17av1plkgMrvIZ2PNP6J-bKP2LZW12gbOzrYFYF3rGv4IC6cwQ/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    }
  );
};

const GetLocation = ({ pageName }) => {
  const sentRef = useRef(false); // ⛔ prevent duplicates

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Reverse geocode
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();

        // Send ONLY ONCE
        if (!sentRef.current) {
          sentRef.current = true;
          sendLocationToSheet(data, pageName);
        }
      },
      (err) => {
        console.log("Location permission denied", err);
      },
      { enableHighAccuracy: true }
    );
  }, [pageName]);

  return null; // no UI needed
};

export default GetLocation;
