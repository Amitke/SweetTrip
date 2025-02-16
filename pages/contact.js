import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import { validatePhoneNumber } from "@/utils/validatePhoneNumber";
import { validateAlphaNumeric } from "@/utils/validateAlphaNumeric";
import { validateEmail } from "@/utils/validateEmail";
import contactStyles from "@/pages/components/contact/contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [mobileData, setMobileData] = useState("");
  const [emailData, setEmailData] = useState("");
  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [formError, setFormError] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    let timer = setInterval(() => {
      setIsVisibleAlert(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisibleAlert]);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].contact
      ? getSectionHeader.sectionHeader[0].contact
      : getSectionHeader?.error;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const isValid = validateAlphaNumeric(value);
    if (isValid) {
      setFormData({
        ...formData,
        [name]: value,
      });
      setFormError({
        name: "",
        subject: "",
        message: "",
      }); // Clear error message if input is valid
    } else {
      if (name === "name") {
        setFormError({
          name: "Only alphabetic characters are allowed.",
          subject: "",
          message: "",
        });
      }
      if (name === "subject") {
        setFormError({
          subject: "",
          subject: "Only alphabetic characters are allowed.",
          message: "",
        });
      }
      if (name === "message") {
        setFormError({
          subject: "",
          subject: "",
          message: "Only alphabetic characters are allowed.",
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
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmailData(value);
    const isValidEmail = validateEmail(value);
    if (isValidEmail) {
      setEmailError(""); // Clear error message if input is valid
    } else {
      setEmailError("Enter the valid Email id");
    }
  };
  const handleAlertBox = () => {
    setIsVisibleAlert(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name === "") {
      setFormError({
        name: "This is a required field",
        subject: "",
        message: "",
      });
      setPhoneError("");
      setEmailError("");
    } else if (emailData === "") {
      setEmailError("This is a required field");
    }else if (mobileData === "") {
      setPhoneError("This is a required field");
    } else if (formData.subject === "") {
      setFormError({
        name: "",
        subject: "This is a required field",
        message: "",
      });
      setPhoneError("");
      setEmailError("");
    } else if (formData.message === "") {
      setFormError({
        name: "",
        subject: "",
        message: "This is a required field",
      });
      setPhoneError("");
      setEmailError("");
    } else if (
      formData.name !== "" &&
      formData.subject !== "" &&
      formData.message !== "" &&
      mobileData !== ""
    ) {
      setFormError({
        name: "",
        subject: "",
        message: "",
      });
      setEmailError("");
      setPhoneError("");
      setFormData({
        name: "",
        subject: "",
        message: "",
      });
      setEmailData("");
      setMobileData("");
      const requestBody = {
        name: formData.name,
        email: emailData,
        phone: mobileData,
        subject: formData.subject,
        message: formData.message,
      }
      try {
        const response = await fetch("./api/contact/contactEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        });
        if (response.ok && response.status === 200) {
          setStatusMessage("Form has been successfully submitted");
          setIsVisibleAlert(true);
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
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Sweet Trip Contact No. 7488736844" />
        <link rel="canonical" href="https://sweettrip.in/contact" />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} contactClass={sectionHeader}/>
        <section className={`pt-10 pb-10 ${contactStyles.contactPage}`}>
          <div className="container mx-auto">
            <div className="flex-col justify-center items-center flex pl-4 pr-4">
              <h2 className="text-center mb-3">Contact Us</h2>
              <p className="mb-10">
                If you have any queries, please fill out the given form to reach
                us.
              </p>
              {isVisibleAlert ? (
                <div
                  className={`text-left p-4 mb-4 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400 ${
                    isVisibleAlert ? "successBg" : "errorBg"
                  }`}
                >
                  <span className="font-medium">
                    {isVisibleAlert
                      && statusMessage}
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
              <form onSubmit={handleSubmit} className="w-full">
                <div
                  className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full mx-auto`}
                >
                  <label className={contactStyles.label}>Your Name*</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={contactStyles.formControl}
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {formError.name && (
                    <div className="error text-left">{formError.name}</div>
                  )}
                </div>
                <div
                  className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full mx-auto`}
                >
                  <label className={contactStyles.label}>Your Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={contactStyles.formControl}
                    value={emailData}
                    onChange={handleEmail}
                    autoComplete="off"
                  />
                  {emailError && (
                    <div className="error text-left">{emailError}</div>
                  )}
                </div>
                <div
                  className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full mx-auto`}
                >
                  <label className={contactStyles.label}>Your Phone*</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className={contactStyles.formControl}
                    value={mobileData}
                    onChange={handlePhone}
                    autoComplete="off"
                  />
                  {phoneError && (
                    <div className="error text-left">{phoneError}</div>
                  )}
                </div>
                <div
                  className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full mx-auto`}
                >
                  <label className={contactStyles.label}>Subject*</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className={contactStyles.formControl}
                    value={formData.subject}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {formError.subject && (
                    <div className="error text-left">{formError.subject}</div>
                  )}
                </div>
                <div
                  className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full mx-auto`}
                >
                  <label className={contactStyles.label}>Message*</label>
                  <textarea
                    name="message"
                    id="message"
                    className={contactStyles.formControl}
                    cols="3"
                    rows="8"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                  ></textarea>
                  {formError.message && (
                    <div className="error text-left">{formError.message}</div>
                  )}
                </div>
                <button
                  type="submit"
                  name="submit"
                  className={`${contactStyles.primaryButton} mx-auto`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14424.709124402356!2d82.9930522!3d25.3318315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7d2f954e5312f%3A0x59f8cc6f3cc66ab6!2sSweet%20Trip%20-%20Car%20Rental%20In%20varanasi!5e0!3m2!1sen!2sin!4v1685350135463!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen
          loading="lazy"
          style={{ border: "none", height: "100vh" }}
        ></iframe>
      </>
    </>
  );
}
