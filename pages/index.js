import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getAboutUsRecordData } from "@/pages/api/common/aboutUsRecord";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getRentalVehicleData } from "./api/common/rentalVehicle";
import { getPromoData } from "./api/common/promo";
import { getPeopleLikeData } from "./api/home/peopleLike";
import { getFaqData } from "./api/common/faq";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import GoogleReviews from "@/pages/components/common/googleReviews/googleReviews";
import RentalVehicle from "@/pages/components/common/rentalVehicle/rentalVehicle";
import HomeContent from "./components/home/homeContent";
import Promo from "./components/common/promo/promo";
import PeopleLike from "./components/home/peopleLike/peopleLike";
import PopularRoutes from "./components/common/popularRoutes/popularRoutes";
import Faq from "./components/common/faq/faq";
const RentalCommunity = dynamic(
  () => import("./components/common/rentalCommunity/rentalCommunity"),
  { ssr: false }
);

export default function Home() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getAboutUsRecord = useSelector((state) => state.aboutUsRecord);
  const getGoogleReviews = useSelector((state) => state.googleReviews);
  const getRentalVehicle = useSelector((state) => state.rentalVehicle);
  const getPromo = useSelector((state) => state.promo);
  const getPeopleLike = useSelector((state) => state.peopleLike);
  const getFaq = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getAboutUsRecordData());
    dispatch(getGoogleReviewsData());
    dispatch(getRentalVehicleData());
    dispatch(getPromoData());
    dispatch(getPeopleLikeData());
    dispatch(getFaqData());
  }, []);
  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].home
      ? getSectionHeader.sectionHeader[0].home
      : getSectionHeader.error;

  const homeData =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].home;

  const promoData =
    getPromo && getPromo.status && getPromo.promo.home
      ? getPromo.promo.home
      : getPromo?.error;

  const vehicleInfo =
    getRentalVehicle && getRentalVehicle.status
      ? getRentalVehicle.rentalVehicle?.home[0].vehicleInfo
      : getRentalVehicle?.error;

  const vehicleTitle =
    getRentalVehicle && getRentalVehicle.status
      ? getRentalVehicle.rentalVehicle?.home[0].vehicleTitle
      : getRentalVehicle?.error;

  const faqsData = getFaq && getFaq.status ? getFaq?.faq?.home : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
        <title>Top Tour Operator in Varanasi | Sweet Trip India</title>
        <meta
          name="description"
          content="Discover Varanasi with the best tour operator in Varanasi. Sweet Trip offers custom tours, local guides, and unforgettable spiritual journeys. Book your trip today!"
        />
        <meta name="keywords" content="Tour operator in Varanasi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sweet Trip",
              url: "https://sweettrip.in/",
              logo: "https://sweettrip.in/images/logo.svg",
              sameAs: [
                "https://www.instagram.com/sweettrip.in/",
                "https://www.facebook.com/sweettrip.inn",
                "https://www.linkedin.com/company/sweettrip/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7488736844",
                  contactType: "customer service",
                  email: "info@sweettrip.in",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "sweettrip",
              url: "https://sweettrip.in/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://sweettrip.in/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Why is Sweet Trip the best car hire agency in Varanasi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sweet Trip is the most trusted car hire company in Varanasi because of our reasonable prices, experienced drivers, clean vehicles, and simplified reservation procedure. We provide top-notch services to travellers as well as locals of Varanasi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I hire a cab in Varanasi through Sweet Trip?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is convenient and simple to hire your cab rental in Varanasi with Sweet Trip. You may visit our website, place a call to our customer care, or use our 24*7 online booking facility for booking your car, travel date, and destination. Your booking is made instantly, and our customer care is accessible at all times.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are your drivers experienced and reliable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, they are all good, experienced, and courteous drivers. As a reliable car rental agency in Varanasi, we ensure each driver knows the routes within the city, tourist destinations, and traffic rules so your trip is hitch-free and secure.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer outstation cab booking from Varanasi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We have local and outstation taxi bookings in Varanasi. If you are visiting Sarnath, Allahabad, Bodh Gaya, or anywhere else nearby, we have packages customised for you.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What vehicles do you offer with your car rental services in Varanasi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sweet Trip offers a range of vehicles from: ● Sedans for small families or single travellers ● SUVs for comfort and space ● Tempo travellers for group tours Our Varanasi cab rental service ensures that our cars are clean, comfortable, and well- maintained.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I reserve a cab rental in Varanasi for a temple tour and a spiritual tour?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide temple and spiritual tour packages such as Kashi Vishwanath, Sarnath, and Bharat Mata Temple. You can avail these tours at your convenience with on-time pickups and drop-offs by our Varanasi cab rental.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is airport and railway station transfer available in Varanasi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our car rental agency in Varanasi offers instant airport and railway station pickup/drop-off facility. We pick you up on time from your doorstep so that you don't miss your train or flight.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is customer support available in case I have an issue related to my booking?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Sweet Trip’s customer support staff is available at all times to assist you with booking, cancellation, or any other problem. We make every effort to make cab booking in Varanasi as easy and comfortable an experience as possible.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Yes, we do have last-minute bookings, subject to the availability of cars. Our large fleet and response system enable us to deal with urgent travel needs effectively.",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. Sweet Trip is upfront. What you book and what you enjoy is what you pay. No additional cost with our Varanasi cab rentals.",
                  },
                },
              ],
            }),
          }}
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sweet Trip Tours and Travels",
              "image": "https://sweettrip.in/images/logo.svg",
              "@id": "",
              "url": "https://share.google/1zZOsnM6hglqIFGUC",
              "telephone": "074887 36844",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C, 21/30 B-3, Maldahiya Rd, Lohamandi, Chetganj, Varanasi, Uttar Pradesh 221001",
                "addressLocality": "Varanasi",
                "postalCode": "221001",
                "addressCountry": ""
              },
              "sameAs": [
                "https://www.instagram.com/sweettrip.in/",
                "https://www.facebook.com/sweettrip.inn",
                "https://www.linkedin.com/company/sweettrip/"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            }),
          }}
        />
      </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          homeData={homeData}
        />
        <RentalVehicle vehicleInfo={vehicleInfo} vehicleTitle={vehicleTitle} />
        <div className="container mx-auto">
          <div className="md:flex-row flex-col justify-center items-center flex">
            <div className="md:w-1/2 w-full pl-4 pr-4">
              <GoogleReviews getGoogleReviews={getGoogleReviews} />
            </div>
            <div className="md:w-1/2 w-full pl-4 pr-4">
              <AboutUsRecord getAboutUsRecord={getAboutUsRecord} />
            </div>
          </div>
        </div>
        <HomeContent />
        <Promo promoData={promoData} />
        <PeopleLike getPeopleLike={getPeopleLike} />
        <RentalCommunity />
        <Faq faqsData={faqsData} faqsError={faqsError} />
        <PopularRoutes />
      </>
    </>
  );
}
