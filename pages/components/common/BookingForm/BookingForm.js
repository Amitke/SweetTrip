import React, { useEffect, useState } from "react";
import { validatePhoneNumber } from "@/utils/validatePhoneNumber";
import { validateAlphaNumeric } from "@/utils/validateAlphaNumeric";
import bookingFormStyles from "./bookingForm.module.scss";

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
  });
  const [mobileData, setMobileData] = useState("");
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [formError, setFormError] = useState({
    pickupLocation: "",
    dropLocation: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [selectedDate, setSelectedDate] = useState(today);
  const [statusMessage, setStatusMessage] = useState("");
  const [rootSelected, setRootSelected] = useState({
    outstation: true,
    local: false,
    airport: false,
  });
  const [rootHeading, setRootHeading] = useState("Outstation");

  useEffect(() => {
    let timer = setInterval(() => {
      setIsVisibleAlert(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisibleAlert]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validateAlphaNumeric(value);
    if (isValid) {
      setFormData({
        ...formData,
        [name]: value,
      });
      setFormError({
        pickupLocation: "",
        dropLocation: "",
      }); // Clear error message if input is valid
    } else {
      if (name === "pickupLocation") {
        setFormError({
          pickupLocation: "Only alphabetic characters are allowed.",
          dropLocation: "",
        });
      }
      if (name === "dropLocation") {
        setFormError({
          pickupLocation: "",
          dropLocation: "Only alphabetic characters are allowed.",
        });
      }
    }
  };
  const handlePhone = (e) => {
    const { value } = e.target;
    const isValidPhone = validatePhoneNumber(value);
    if (isValidPhone) {
      setMobileData(value);
      setPhoneError(""); // Clear error message if input is valid
    } else {
      setPhoneError("Enter the valid phone number");
    }
  };

  const handleDate = (e) => {
    const value = e.target.value;
    setSelectedDate(value);
  };
  const handleAlertBox = () => {
    setIsVisibleAlert(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.pickupLocation === "") {
      setFormError({
        pickupLocation: "This is a required field",
        dropLocation: "",
      });
      setPhoneError("");
      setIsVisibleAlert(false);
    } else if (formData.dropLocation === "") {
      setFormError({
        pickupLocation: "",
        dropLocation: "This is a required field",
      });
      setPhoneError("");
      setIsVisibleAlert(false);
    } else if (mobileData === "") {
      setPhoneError("This is a required field");
      setIsVisibleAlert(false);
    } else if (
      formData.pickupLocation !== "" &&
      formData.dropLocation !== "" &&
      mobileData !== "" &&
      selectedDate !== ""
    ) {
      setFormError({
        pickupLocation: "",
        dropLocation: "",
      });
      setPhoneError("");
      const requestBody = {
        rootHeading: rootHeading,
        pickupLocation: formData.pickupLocation,
        dropLocation: formData.dropLocation,
        date: selectedDate,
        mobile: mobileData,
      };
      try {
        const response = await fetch("./../../../api/bookACar/bookACarEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
        if (response.ok && response.status === 200) {
          setStatusMessage("Form has been successfully submitted");
          setIsVisibleAlert(true);
          setFormData({
            pickupLocation: "",
            dropLocation: "",
          });
          setSelectedDate(today);
          setMobileData("");
        } else {
          setStatusMessage(response.statusText);
          setIsVisibleAlert(true);
        }
      } catch (error) {
        setStatusMessage(response.statusText);
        setIsVisibleAlert(true);
      }
    }
  };
  const handleRoot = (event) => {
    if (event === "outstation") {
      setRootSelected({
        outstation:true,
        local:false,
        airport:false
      });
      setRootHeading("Outstation");
    } else if (event === "local") {
      setRootSelected({
        outstation:false,
        local:true,
        airport:false
      });
      setRootHeading("Local Taxi");
    } else if (event === "airport") {
      setRootSelected({
        outstation:false,
        local:false,
        airport:true
      });
      setRootHeading("Airport");
    }
  };
  return (
    <form className={bookingFormStyles.bookingForm} onSubmit={handleSubmit}>
      <div className={bookingFormStyles.buttonGroupWrapper}>
        <button className={rootSelected.outstation && bookingFormStyles.selected} onClick={() => handleRoot("outstation")}>Outstation</button>
        <button className={rootSelected.local && bookingFormStyles.selected}  onClick={() => handleRoot("local")}>Local Taxi</button>
        <button className={rootSelected.airport && bookingFormStyles.selected} onClick={() => handleRoot("airport")}>Airport Rides</button>
      </div>
      <h2 className="mt-1 mb-1">Book Your Vehicles for <span>{rootHeading}</span> Now!</h2>
      {isVisibleAlert ? (
        <div
          className={`text-left p-4 mb-4 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400 ${
            isVisibleAlert ? "successBg" : "errorBg"
          }`}
        >
          <span className="font-medium">{isVisibleAlert && statusMessage}</span>
          <button
            onClick={handleAlertBox}
            type="button"
            className="float-right ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={bookingFormStyles.formWrapper}>
        <div className={`${bookingFormStyles.formGroup}`}>
          <input
            type="text"
            name="pickupLocation"
            className={bookingFormStyles.formControl}
            placeholder="Enter pick up location*"
            onChange={(e) => handleChange(e)}
            value={formData.pickupLocation}
            autoComplete="off"
          />
          {formError.pickupLocation && (
            <div className="error text-left">{formError.pickupLocation}</div>
          )}
        </div>
        <div className={`${bookingFormStyles.formGroup}`}>
          <input
            type="text"
            name="dropLocation"
            className={bookingFormStyles.formControl}
            placeholder="Enter drop location*"
            onChange={(e) => handleChange(e)}
            value={formData.dropLocation}
            autoComplete="off"
          />
          {formError.dropLocation && (
            <div className="error text-left">{formError.dropLocation}</div>
          )}
        </div>
        <div className={`${bookingFormStyles.formGroup}`}>
          <input
            type="date"
            name="date"
            className={bookingFormStyles.formControl}
            placeholder="dd-mm-yyyy"
            onChange={(e) => handleDate(e)}
            value={selectedDate}
            autoComplete="off"
            min={today}
          />
        </div>
        <div className={`${bookingFormStyles.formGroup}`}>
          <input
            type="text"
            name="mobile"
            className={bookingFormStyles.formControl}
            placeholder="Enter mobile number*"
            onChange={(e) => handlePhone(e)}
            value={mobileData}
            autoComplete="off"
          />
          {phoneError && <div className="error text-left">{phoneError}</div>}
        </div>
        <button
          type="submit"
          name="submit"
          className={bookingFormStyles.primaryButton}
        >
          Send
        </button>
      </div>
    </form>
  );
};
export default BookingForm;
