import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getOneWayData } from "@/pages/api/common/oneWay";
import { getFaqData } from "./api/common/faq";
import Faq from "./components/common/faq/faq";
import bookingFormStyles from "./components/common/BookingForm/bookingForm.module.scss";
import whyChooseStyles from "./components/about/whyChoose/whyChoose.module.scss";
const RentalCommunity = dynamic(
  () => import("./components/common/rentalCommunity/rentalCommunity"),
  { ssr: false }
);

const cityArray = ["Varanasi", "Prayagraj", "Ayodhya"];

export default function oneWayTaxi() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [cars, setCars] = useState([]);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const getOneWay = useSelector((state) => state.oneWay);
  const getFaq = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(getOneWayData());
    dispatch(getFaqData());
  }, []);
  const oneWayData =
    getOneWay && getOneWay?.status && getOneWay?.oneWayData
      ? getOneWay?.oneWayData
      : getOneWay?.error;

  const faqsData = getFaq && getFaq.status ? getFaq?.faq?.home : getFaq?.error;
  const faqsError = getFaq?.error;

  useEffect(() => {
    setCars(oneWayData);
  }, [oneWayData]);

  const handleFindDrivers = () => {
    if(cars.length > 0)setCars(oneWayData);
    if (!fromCity || !toCity) {
      alert("Please select pickup and drop location");
      return;
    }
    if (cars.length > 0) {
      setStatus(true);
      const filtered = cars?.filter(
        (car) =>
          car?.from?.toString().trim().toLowerCase() ===
            fromCity.trim().toLowerCase() &&
          car?.to?.toString().trim().toLowerCase() ===
            toCity.trim().toLowerCase()
      );
      setResults(filtered);
    }
  };
  const handleBack = () => {
    setStatus(false);
  }
  return (
    <>
      <Head>
        <title>One-Way Taxi Service | Affordable & Reliable Cabs</title>
        <meta
          name="description"
          content="Book a one-way taxi for a safe, comfortable, and affordable ride. Enjoy reliable cab service with professional drivers and hassle-free travel across major routes."
        />
        <meta
          name="keywords"
          content="One-way taxi service, One-way cab booking, Drop Taxi Service, sweet Trip"
        />
        <link rel="canonical" href="https://sweettrip.in/one-way-taxi" />
      </Head>
      {status &&<div className="container mx-auto mt-5 pl-4 pr-4"> <p><button onClick={handleBack} className={bookingFormStyles.primaryButton}>Back</button></p></div>}
      {status === false && (
        <div className={bookingFormStyles.bookingOneWayForm}>
          <div className="container mx-auto">
            <h3 className="text-center">
              <strong>
                No Middleman | Direct Driver Contact |{" "}
                <span>0% Commission</span>
              </strong>
            </h3>
            <h2 className="mt-1 mb-1 text-center">
              One Way Taxi <span>Service</span>
            </h2>
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
                  {cityArray.filter(city => city !== fromCity).map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
              <button
                name="submit"
                className={bookingFormStyles.primaryButton}
                onClick={handleFindDrivers}
              >
                Find Drivers
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto">
        <div className="flex-row flex flex-wrap">
          {status
            ? results?.map((car, index) => (
                <div
                  key={index}
                  className={`w-1/4 pl-4 pr-4 mt-10 text-center ${bookingFormStyles.bookingOneWaySearchResult}`}
                >
                  <Image
                    src="/images/small-car.webp"
                    alt="On the left, A girl carrying a backpack. In the right, trolleys are available."
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                  <h3 className="mb-3">
                    <strong>{car.carType}</strong>
                  </h3>
                  <div
                    className={`${bookingFormStyles.icon} mb-3 d-inline-block`}
                  >
                    <a href={`tel:+91${car.phone}`}>
                      <FontAwesomeIcon icon={faPhone} /> {`+91 ${car.phone}`}
                    </a>
                  </div>

                  <a
                    href={`https://wa.me/91${car.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className={bookingFormStyles.secondaryButton}
                  >
                    <div className={bookingFormStyles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>{" "}
                    whatsApp
                  </a>
                </div>
              ))
            : ""}
        </div>
      </div>
      <section className={`${whyChooseStyles.whyChoose} pt-10 pb-10`}>
        <div className="container mx-auto text-center">
          <div className="flex-col justify-center items-center flex pl-4 pr-4">
            <h2>How It Works</h2>
          </div>
          <div className="flex-row flex flex-wrap">
            <div
              className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <Image
                src="/images/expertise-icon.webp"
                alt="On the left, A man is standing with his luggage. On the right, a car is waiting for that man. Behind the car, a mobile with a map sign is there."
                width={70}
                height={70}
                className="mx-auto mb-5"
              />
              <h3 className="font-bold">Search your route </h3>
              <p className="text-sm">Lorem</p>
            </div>
            <div
              className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <Image
                src="/images/packages-icon.webp"
                alt="On the left, A girl carrying a backpack. In the right, trolleys are available."
                width={70}
                height={70}
                className="mx-auto mb-5"
              />
              <h3 className="font-bold">Choose a driver</h3>
              <p className="text-sm">Lorem</p>
            </div>
            <div
              className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <Image
                src="/images/reliable-icon.webp"
                alt="On the left, A girl carrying a backpack. In the right, trolleys are available."
                width={70}
                height={70}
                className="mx-auto mb-5"
              />
              <h3 className="font-bold">Call or WhatsApp directly </h3>
              <p className="text-sm">Lorem</p>
            </div>
          </div>
        </div>
      </section>
      <RentalCommunity />
      <section className={`${whyChooseStyles.whyChoose} pt-10 pb-10`}>
        <div className="container mx-auto text-center">
          <div className="flex-col justify-center items-center flex pl-4 pr-4">
            <h2>Why Sweet Trip Provide One Way Taxi Service</h2>
          </div>
          <div className="flex-row flex flex-wrap">
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">0% Commission</h3>
              <p className="text-sm">Lorem</p>
            </div>
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">Direct driver contact</h3>
              <p className="text-sm">Lorem</p>
            </div>
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">Cheapest one-way options</h3>
              <p className="text-sm">Lorem</p>
            </div>
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">No booking fees</h3>
              <p className="text-sm">Lorem</p>
            </div>
          </div>
          <p className="mt-5">
            Disclaimer: Sweet Trip sirf ek information platform hai. Payment,
            booking aur journey driver aur customer ke beech directly hoti hai.
          </p>
        </div>
      </section>
      <Faq faqsData={faqsData} faqsError={faqsError} />
    </>
  );
}
