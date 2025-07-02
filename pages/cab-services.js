import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getPromoData } from "./api/common/promo";
import { getAboutUsRecordData } from "@/pages/api/common/aboutUsRecord";
import { getFaqData } from "./api/common/faq";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import GoogleReviews from "@/pages/components/common/googleReviews/googleReviews";
import Faq from "./components/common/faq/faq";
import Promo from "./components/common/promo/promo";
import ServicesContent from "./components/services/ServicesContent";
import BookingForm from "./components/common/BookingForm/BookingForm";
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import PopularRoutes from "./components/common/popularRoutes/popularRoutes";

export default function cabServices() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getGoogleReviews = useSelector((state) => state.googleReviews);
  const getPromo = useSelector((state) => state.promo);
  const getAboutUsRecord = useSelector((state) => state.aboutUsRecord);
  const getFaq = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getGoogleReviewsData());
    dispatch(getPromoData());
    dispatch(getAboutUsRecordData());
    dispatch(getFaqData());
  }, []);
  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].carService
      ? getSectionHeader.sectionHeader[0].carService
      : getSectionHeader?.error;

  const promoData =
    getPromo && getPromo.status && getPromo.promo.home
      ? getPromo.promo.home
      : getPromo?.error;

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.cabServices : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
       <title>Car Rental & Cab Hire in Varanasi | Sweet Trip</title>
        <meta name="description" content="Book reliable cab hire in Varanasi with Sweet Trip.
         Affordable car rental agency for local, outstation, and airport transfers. Safe, clean & on-time
          service." />
        <link rel="canonical" href="https://sweettrip.in/cab-services" />

        <meta
          name="keywords"
          content="cab hire in varanasi, cab in varanasi, varanasi cab booking, Best Cab Service in Varanasi, varanasi local cab, varanasi airport cab booking, book cab varanasi, best one way taxi service in Varanasi, one way taxi service in Varanasi contact number"
        />
        <meta property="og:title" content="Car Rental & Cab Hire in Varanasi | Sweet Trip" />
          <meta property="og:description" content="Book reliable cab hire in Varanasi with Sweet Trip.
          Affordable car rental agency for local, outstation, and airport transfers. Safe, clean & on-time
          service." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sweettrip.in/cab-services" />
          <meta property="og:image" content="https://sweettrip.in/images/logo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Car Rental & Cab Hire in Varanasi | Sweet Trip" />
          <meta name="twitter:description" content="Book reliable cab hire in Varanasi with Sweet Trip.
          Affordable car rental agency for local, outstation, and airport transfers. Safe, clean & on-time
          service." />
          <meta name="twitter:image" content="https://sweettrip.in/images/logo.svg" />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Car Rental & Cab Hire in Varanasi | Sweet Trip",
                  "url": "https://sweettrip.in/cab-services",
                  "description": "Book reliable cab hire in Varanasi with Sweet Trip. Affordable car rental agency for local, outstation, and airport transfers. Safe, clean & on-time service."
                }),
            }}
  />
       </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          carBannerClass={sectionHeader}
        />
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
        <ServicesContent />
        <Promo promoData={promoData} />
        <Faq faqsData={faqsData} faqsError={faqsError} />
        <PopularRoutes />
      </>
    </>
  );
}
