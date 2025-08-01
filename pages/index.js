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

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.home : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
        <title>Top Tour Operator in Varanasi | Sweet Trip India</title>
        <meta
          name="description"
          content="Discover Varanasi with the best tour operator in Varanasi. Sweet Trip offers custom tours, local guides, and unforgettable spiritual journeys. Book your trip today!"
        />
        <meta
          name="keywords"
          content="Tour operator in Varanasi"
        />
        <script type="application/ld+json" 
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sweet Trip",
            "url": "https://sweettrip.in/",
            "logo": "https://sweettrip.in/images/logo.svg",
            "sameAs": [
              "https://www.instagram.com/sweettrip.in/",
              "https://www.facebook.com/sweettrip.inn",
              "https://www.linkedin.com/company/sweettrip/"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-7488736844",
                "contactType": "customer service",
                "email": "info@sweettrip.in",
                "areaServed": "IN",
                "availableLanguage": [
                  "en",
                  "hi"
                ]
              }
            ]
          })
        }} />
        <script type="application/ld+json" 
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "sweettrip",
              "url": "https://sweettrip.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sweettrip.in/{search_term_string}",
                "query-input": "required name=search_term_string"
              }
          })
        }} />
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
