import React, { useState } from "react";
import Head from "next/head";
import { validatePhoneNumber } from "@/utils/validatePhoneNumber";
import bookingFormStyles from "./components/common/BookingForm/bookingForm.module.scss";
import cityArray from "./../public/staticJson/cities.json";
import carTypeArray from "./../public/staticJson/carTypes.json";

export default function postYourCar() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [phone, setPhone] = useState("");
  const [carType, setCarType] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhone = (e) => {
    const { value } = e.target;
    const isValidPhone = validatePhoneNumber(value);
    if (isValidPhone) {
      setPhone(value);
      setPhoneError(""); // Clear error message if input is valid
    } else {
      setPhoneError("Enter the valid phone number");
    }
  };

  const submitDriverPost = () => {
    if (!fromCity || !toCity || !phone || !carType) {
      alert("Please enter all required fields.");
      return;
    }
    const data = new URLSearchParams();
    data.append("from", fromCity);
    data.append("to", toCity);
    data.append("phone", phone);
    data.append("carType", carType);
    fetch(
      "https://script.google.com/macros/s/AKfycbxR7oyVxoOTxxAFfJDPcSv4AXPDrR0yI8qoaHG94at2mIbn6hr9jnqDj7vZtkyI-pbKeQ/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    );
    setFromCity("");
    setToCity("");
    setPhone("");
    setCarType("");
    alert(
      "Details Submitted Successfully. Our team will review and activate your listing shortly. Thank you!"
    );
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Post Your Car</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div
        style={{
          background:
            "linear-gradient(127deg, #e5eaff, #e6fcfc 39.23%, #e6fcf7 74.34%, #f5fce6 99.12%)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex-row flex flex-wrap text-center">
            <div className="w-full p-4">
              <h1 className="text-3xl">
                Post Your One-Way Car Availability – Free
              </h1>
              <h2 className="text-2xl mt-3">
                Get direct customers. No commission. No middleman.
              </h2>
              <h3 className="text-xs mt-3">
                100% Free Listing | Direct customer calls & WhatsApp | No
                commission – deal directly
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ background: "#fff" }}
        className={bookingFormStyles.bookingOneWayForm}
      >
        <div className="container mx-auto mt-5 mb-5">
          <div className={bookingFormStyles.postYourCarForm}>
            <h3 className="mt-1 mb-1">
              <strong>Enter Your Details</strong>
            </h3>
            <div className={bookingFormStyles.formWrapper}>
              <div className={`${bookingFormStyles.formGroup}`}>
                <select
                  name="pickupLocation"
                  className={bookingFormStyles.formControl}
                  style={{ "-webkit-appearance": "auto" }}
                  onChange={(e) => setFromCity(e.target.value)}
                >
                  <option>Enter pick up location*</option>
                  {cityArray.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <div className={`${bookingFormStyles.formGroup}`}>
                <select
                  name="dropLocation"
                  className={bookingFormStyles.formControl}
                  style={{ "-webkit-appearance": "auto" }}
                  onChange={(e) => setToCity(e.target.value)}
                >
                  <option>Enter drop location*</option>
                  {cityArray
                    .filter((city) => city !== fromCity)
                    .map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                </select>
              </div>
              <div className={`${bookingFormStyles.formGroup}`}>
                <input
                  type="text"
                  name="mobile"
                  className={bookingFormStyles.formControl}
                  placeholder="Enter mobile number*"
                  onChange={(e) => handlePhone(e)}
                  value={phone}
                  autoComplete="off"
                />
                {phoneError && (
                  <div className="error text-left">{phoneError}</div>
                )}
              </div>
              <div className={`${bookingFormStyles.formGroup}`}>
                <select
                  name="carType"
                  className={bookingFormStyles.formControl}
                  style={{ "-webkit-appearance": "auto" }}
                  onChange={(e) => setCarType(e.target.value)}
                >
                  <option>Enter car type*</option>
                  {carTypeArray.map((car, index) => (
                    <option key={index} value={car}>
                      {car}
                    </option>
                  ))}
                </select>
              </div>
              <button
                name="submit"
                className={bookingFormStyles.primaryButton}
                onClick={submitDriverPost}
              >
                Submit
              </button>
              <p className="mt-3">
                Note: Your listing will be visible after verification
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex-row flex flex-wrap mb-5">
          <div className="w-full pl-4 pr-4">
            <h3 className="font-bold">Important Information</h3>
            <p>• Listing is free of cost</p>
            <p>• Your phone number will be visible to customers</p>
            <p>• We do not take any commission</p>
            <p>• Fake entries will be removed</p>
          </div>
        </div>
      </div>
    </>
  );
}
