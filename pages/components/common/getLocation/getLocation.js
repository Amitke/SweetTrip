import React, { useState, useEffect } from "react";

const sendLocationToSheet = (dataParam, pageName) => {
  if (!dataParam || !dataParam.display_name) {
    console.log("display_name missing:", dataParam);
    return;
  }
  const data = new URLSearchParams();
  data.append("address", dataParam.display_name);
  data.append("addresstype", dataParam.addresstype);
  data.append("pagename", pageName);

  fetch(
    "https://script.google.com/macros/s/AKfycbwg3-YFFGh-LR4AKHLdolevhPS8PSfYG770aSWO1zvJtcbsAPU46z_ZxP891_C_DUXuKA/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    }
  );
};

const GetLocation = (props) => {
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
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.lng}`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, []);
  useEffect(() => {
    if (data) sendLocationToSheet(data, props.pageName);
  }, [data]);
  return <></>;
};
export default GetLocation;
