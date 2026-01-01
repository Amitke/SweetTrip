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
import GetLocation from "./components/common/getLocation/getLocation";
import cityArray from "./../public/staticJson/cities.json";


const sortedCities = [...cityArray].sort((a, b) =>
  a.localeCompare(b)
);

export default function oneWayTaxi() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [cars, setCars] = useState([]);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(false);
  const [noData, setNoData] = useState("");
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

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.oneWayTaxi : getFaq?.error;
  const faqsError = getFaq?.error;

  useEffect(() => {
    setCars(oneWayData);
  }, [oneWayData]);

  const handleFindDrivers = () => {
    if (!fromCity || !toCity) {
      alert("Please select pickup and drop location");
      return;
    }
    if (cars.length > 0) {
      setCars(oneWayData);
      const filtered = cars?.filter(
        (car) =>
          car?.from?.toString().trim().toLowerCase() ===
            fromCity.trim().toLowerCase() &&
          car?.to?.toString().trim().toLowerCase() ===
            toCity.trim().toLowerCase() && car?.status === "Active"
      );
      if (filtered?.length === 0) {
        setNoData("No drivers found for the selected route");
      } else {
        setStatus(true);
        setResults(filtered);
      }
    }
  };
  const handleBack = () => {
    setStatus(false);
    setFromCity("");
    setToCity("");
    setNoData("");
  };
  return (
    <>
      <Head>
        <title>Book One Way Taxi Online | One Way Drop Taxi</title>
        <meta
          name="description"
          content="Book a one way taxi service with zero commission. Get direct driver number for instant booking, fair pricing, and reliable one way drop taxi travel."
        />
        <meta
          name="keywords"
          content="One Way Taxi, one way drop taxi, One Way Taxi Service, Sweet Trip"
        />
        <link rel="canonical" href="https://sweettrip.in/one-way-taxi" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Book One Way Taxi Online | One Way Drop Taxi"
        />
        <meta
          property="og:description"
          content="Book a one way taxi service with zero commission. Get direct driver number for instant booking, fair pricing, and reliable one way drop taxi travel."
        />
        <meta property="og:url" content="https://sweettrip.in/one-way-taxi" />
        <meta
          property="og:image"
          content="https://sweettrip.in/images/logo.svg"
        />
        <meta property="og:site_name" content="SweetTrip" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Book One Way Taxi Online | One Way Drop Taxi"
        />
        <meta
          name="twitter:description"
          content="Book a one way taxi service with zero commission. Get direct driver number for instant booking, fair pricing, and reliable one way drop taxi travel."
        />
        <meta
          name="twitter:image"
          content="https://sweettrip.in/images/logo.svg"
        />
        <meta name="twitter:url" content="https://sweettrip.in/one-way-taxi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "One Way Taxi Service",
              description:
                "Book a one way taxi service with zero commission. Get direct driver number for instant booking, fair pricing, and reliable one way drop taxi travel.",
              url: "https://sweettrip.in/one-way-taxi",
              provider: {
                "@type": "Organization",
                name: "SweetTrip",
                url: "https://sweettrip.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sweettrip.in/images/logo.svg",
                },
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              serviceType: "One Way Drop Taxi",
            }),
          }}
        />
      </Head>
      <GetLocation pageName="oneWayTaxi"/>
      {status && (
        <div
          className="container mx-auto"
          style={{ backgroundColor: "#201e53" }}
        >
          {" "}
          <div className="flex-row flex flex-wrap p-4">
            <button
              onClick={handleBack}
              className={bookingFormStyles.secondaryButton}
            >
              Back
            </button>
          </div>
        </div>
      )}
      {status === false && (
        <div className={bookingFormStyles.bookingOneWayForm}>
          <div className="container mx-auto">
            <h2 className="text-center">
              No Middleman | Direct Driver Contact | <span>0% Commission</span>
            </h2>
            <h3 className="mt-1 mb-1 text-center">
              <strong>One Way Taxi Service</strong>
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
                  {sortedCities.map((location, index) => (
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
                  {sortedCities
                    .filter((city) => city !== fromCity)
                    .map((location, index) => (
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
          <p className="text-center"><strong>For reference, please inform the driver that their contact was shared through Sweet Trip.</strong></p>
        </div>
      )}
      <div className="container mx-auto">
        {status && (
          <div className="pl-4 pr-4 mt-5">
            {fromCity} - {toCity}
          </div>
        )}
        <div className="flex-row flex flex-wrap">
          {status ? (
            results?.map((car, index) => (
              <div key={index} className={`w-1/4 pl-4 pr-4 mt-5 text-center ${bookingFormStyles.mobileWidth}`}>
                <div className={bookingFormStyles.bookingOneWaySearchResult}>
                  <h3 className="font-bold">
                    {car.carType}
                  </h3>
                  <Image
                    src="/images/small-car.webp"
                    alt="On the left, A girl carrying a backpack. In the right, trolleys are available."
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
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
                    className={bookingFormStyles.primaryButton}
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
              </div>
            ))
          ) : (
            <div className="w-full pl-4 pr-4 text-center mt-3 error">{noData}</div>
          )}
        </div>
      </div>
      <section className={`${whyChooseStyles.policy} pt-10 pb-10`}>
        <div className="container mx-auto">
          <div
            className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
          >
            <h1 className="text-3xl text-center mb-5">
              One Way Taxi Service by Sweet Trip – Simple, Affordable & Direct
            </h1>
            <p className="text-center">
              <a href="https://sweettrip.in/">Sweet Trip</a> offers you a better way to travel with our dependable
              <a href="https://sweettrip.in/one-way-taxi"> one-way taxi service</a> that is aimed at removing the unnecessary
              expenses, mediators, and planning of booking a taxi. Whether you
              want to visit for business or with your family members, drop off
              at the airport, or initiate an inter-city trip with taxi booking.
            </p>
            <p className="mt-2">
              It differs from a conventional taxi service, where high commission
              costs and booking charges are involved. Sweet Trip is a platform
              for information where travellers meet drivers. It provides
              fairness in costs, good communication, and flexibility. If you are
              looking for one-way drop taxi services at low costs that involve
              direct communication with the driver, Sweet Trip is ideal.
            </p>
            <h2 className="font-bold mt-3">What Is A One Way Taxi?</h2>
            <p>
              One-way taxi enables you to go from your pick-up point to your
              destination point without having to pay additional fees for
              returning. In normal taxis, you will need to pay fees associated
              with coming back home, making your journey very costly. One-way
              drop taxis offered by Sweet Trips charge you nothing but the
              distance you travelled.
            </p>
            <p className="mt-2">
              This makes Sweet Trip's One Way Taxi Service particularly useful
              to:
            </p>
            <p>● Intercity travel</p>
            <p>● Airport Transfers</p>
            <p>● Relocations</p>
            <p>● Business trips</p>
            <p>● Family visits</p>
            <p>● Emergency Travel</p>
          </div>
        </div>
      </section>
      <section className={`${whyChooseStyles.whyChoose} pb-10`}>
        <div className="container mx-auto text-center">
          <div className="flex-col justify-center items-center flex pl-4 pr-4">
            <h2>How Does It Work?</h2>
            <p>
              Sweet Trip has a very straightforward and transparent process that
              gives you control over your experience.
            </p>
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
              <h3 className="font-bold">Search Your Route </h3>
              <p className="text-sm">
                You start by inputting your pickup and drop-off points on the
                Sweet Trip website. When you search for your route, the system
                displays drivers who are operating on that route. This makes it
                easy for you to find a one-way taxi quickly.
              </p>
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
              <h3 className="font-bold">Choose Your Driver</h3>
              <p className="text-sm">
                After analyzing the routes, you can browse through the available
                drivers. This provides you with different options that you can
                choose based on your needs. The benefits include accessing the
                cheapest one-way taxi services.
              </p>
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
              <h3 className="font-bold">Call or WhatsApp Directly</h3>
              <p className="text-sm">
                Sweet Trip permits direct contact with the driver, and you can
                telephone or WhatsApp the driver directly to communicate
                regarding the cost, pickup time, car, and requirements. There is
                no intermediary in this regard.
              </p>
            </div>
            <p className="mt-5 pl-4 pr-4">
              Disclaimer: Sweet Trip is an information platform that brings
              customers and independent drivers together for the provision of
              one-way taxi transport. Sweet Trip does not render transport
              services and therefore does not operate as an intermediary in the
              booking or payment processes. Communication, the process of
              determining the cost, booking, payment, and all activities
              pertaining to the transport process are conducted directly between
              the customer and the driver. Sweet Trip does not take any
              liability for the cost, performance, delay, cancellation, or
              disputes that may arise from the journey.
            </p>
          </div>
        </div>
      </section>
      <RentalCommunity />
      <section className={`${whyChooseStyles.whyChoose} pt-10 pb-10`}>
        <div className="container mx-auto text-center">
          <div className="flex-col justify-center items-center flex pl-4 pr-4">
            <h2>Why Sweet Trip Provide One Way Taxi Service</h2>
            <p>
              Sweet Trip came into existence to address the largest problems
              associated with travelling, such as high commissions, fees, and a
              lack of effective communication. The reasons why many customers
              choose Sweet Trip for the “One Way Taxi Service” are as follows:
            </p>
          </div>
          <div className="flex-row flex flex-wrap">
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">0% Commission</h3>
              <p className="text-sm">
                Sweet Trip doesn't charge any commission to either drivers or
                clients. Compared to other platforms, Sweet Trip ensures that
                there are no higher costs involved because of commission fees.
                So whatever you negotiate from the driver is exactly what you
                pay, and Sweet Trip is actually the cheapest way to go via
                one-way drop taxis.
              </p>
            </div>
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">Direct driver contact</h3>
              <p className="text-sm">
                With Sweet Trip, you meet the drivers personally. There is no
                miscommunication and delay in the coordination of the trip. By
                personally getting in touch with the drivers, you can be better
                catered to in your travel requirements.
              </p>
            </div>
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">Cheapest one-way options</h3>
              <p className="text-sm">
                Sweet Trip has no commission fees, making it offer the lowest
                one-way taxi services. This is because drivers can enjoy 100% of
                the money they receive because there are no commission fees.
              </p>
            </div>
            <div
              className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
            >
              <h3 className="font-bold">No booking fees</h3>
              <p className="text-sm">
                Sweet Trip does not charge any fees to book. You can search
                routes, communicate with drivers, and confirm your journey
                without incurring any fees. Thus, Sweet Trip emerges as a
                trustworthy one-way taxi service provider.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${whyChooseStyles.policy}`}>
        <div className="container mx-auto">
          <div
            className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
          >
            <h2 className="text-center mb-5">
              Advantages of Selecting Sweet Trip One-Way Taxi
            </h2>
            <p>● Reimbursed only for one-way journey</p>
            <p>● There are no extra fees </p>
            <p>● Quick driver pairing</p>
            <p>● Suitable for long-distance routes as well as urban routes</p>
            <p>● Simple and user-friendly platform</p>
            <p>● Flexible payment directly to the driver</p>
            <p className="mt-2">
              Whether it is a short journey from one city to another or a longer
              one, Sweet Trip makes sure you have a comfortable, economical, and
              worry-free experience.
            </p>
            <h2 className="mt-3">
              Who Can Use Sweet Trip One-Way Taxi?
            </h2>
            <p>Sweet Trip's one-way taxi service is ideal for:</p>
            <p className="mt-2">● Business travelers</p>
            <p>● Families and groups</p>
            <p>● Visitors</p>
            <p>● Students</p>
            <p>● Elderly citizens</p>
            <p>● Travelers alone</p>
            <p className="mt-2">
              All those requiring an efficient and effective one-way taxi drop
              without having to incur return fees can greatly benefit from Sweet
              Trip.
            </p>
            <h2 className="mt-3">
              Book Your One-Way Taxi From Sweet Trip Now
            </h2>
            <p>
              If you need a trusted, inexpensive, and transparent one-way taxi
              service, Sweet Trip is here with you as your trusted travel
              companion. No middlemen, save your hard-earned money, and
              experience a tension-free journey with direct contact with your
              driver. Search your route, select your driver, and travel with
              Sweet Trip.
            </p>
          </div>
        </div>
      </section>

      <Faq faqsData={faqsData} faqsError={faqsError} />
    </>
  );
}
