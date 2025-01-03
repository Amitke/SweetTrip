import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBookingDetails } from "@/pages/api/common/bookACar";
import { validatePhoneNumber } from "@/utils/validatePhoneNumber";
import { validateAlphaNumeric } from "@/utils/validateAlphaNumeric";
import bookingFormStyles from "./bookingForm.module.scss";

const BookingForm = () => {
  const dispatch = useDispatch();
  const getBookCarData = useSelector((state) => state.bookCarData);

  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
  });
  const [mobileData, setMobileData] = useState("");
  const [isVisibleAlert, setIsVisibleAlert] = useState(true);
  const [formError, setFormError] = useState({
    pickupLocation: "",
    dropLocation: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [dateError, setDateError] = useState("");

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
    const currentDate = new Date();
    const inputDate = new Date(value);
    if (inputDate < currentDate) {
      setDateError("The selected date cannot be in the past.");
    } else {
      setDateError(""); // Clear the error message if valid
    }
  };
  const handleAlertBox = () => {
    setIsVisibleAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.pickupLocation === "") {
      setFormError({
        pickupLocation: "This is a required field",
        dropLocation: "",
      });
      setDateError("");
      setPhoneError("");
      setIsVisibleAlert(true);
    } else if (formData.dropLocation === "") {
      setFormError({
        pickupLocation: "",
        dropLocation: "This is a required field",
      });
      setDateError("");
      setPhoneError("");
      setIsVisibleAlert(true);
    } else if (selectedDate === "") {
      setDateError("This is a required field");
      setIsVisibleAlert(true);
    } else if (mobileData === "") {
      setPhoneError("This is a required field");
      setIsVisibleAlert(true);
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
      setDateError("");
      setPhoneError("");
      dispatch(
        postBookingDetails({
          pickupLocation: formData.pickupLocation,
          dropLocation: formData.dropLocation,
          date: selectedDate,
          mobile: mobileData,
        })
      );
      setFormData({
        pickupLocation: "",
        dropLocation: "",
      });
      setSelectedDate("");
      setMobileData("");
      setIsVisibleAlert(true);
    }
  };
  return (
    <form className={bookingFormStyles.bookingForm} onSubmit={handleSubmit}>
      <h2 className="mb-3">Book Your Car Now!</h2>
      {getBookCarData.bookData && isVisibleAlert ? (
        <div
          className={`text-left p-4 mb-4 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400 ${
            getBookCarData.bookData?.ok ? "successBg" : "errorBg"
          }`}
        >
          <span className="font-medium">
            {getBookCarData.bookData?.ok
              ? "Form has been successfully submitted"
              : "Bad Request"}
          </span>
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
            autocomplete="off"
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
            autocomplete="off"
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
            value={selectedDate || "2025-01-31"}
            autocomplete="off"
          />
          {dateError && <div className="error text-left">{dateError}</div>}
        </div>
        <div className={`${bookingFormStyles.formGroup}`}>
          <input
            type="text"
            name="mobile"
            className={bookingFormStyles.formControl}
            placeholder="Enter mobile number*"
            onChange={(e) => handlePhone(e)}
            value={mobileData}
            autocomplete="off"
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
