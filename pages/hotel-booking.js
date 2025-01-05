import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getFaqData } from "./api/common/faq";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import GoogleReviews from "@/pages/components/common/googleReviews/googleReviews";
import { getAboutUsRecordData } from "@/pages/api/common/aboutUsRecord";
import HotelContent from "./components/hotel/HotelContent";
import HotelPeopleLike from "./components/hotel/HotelPeopleLike";
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import Faq from "./components/common/faq/faq";
const RentalCommunity = dynamic(
  () => import("./components/common/rentalCommunity/rentalCommunity"),
  { ssr: false }
);

export default function HotelBooking() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getGoogleReviews = useSelector((state) => state.googleReviews);
  const getAboutUsRecord = useSelector((state) => state.aboutUsRecord);
  const getFaq = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getGoogleReviewsData());
    dispatch(getAboutUsRecordData());
    dispatch(getFaqData());
  }, []);
  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].hotelBooking
      ? getSectionHeader.sectionHeader[0].hotelBooking
      : getSectionHeader?.error;

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.hotelBooking : getFaq?.error;
  const faqsError = getFaq?.error;

  return (
    <>
      <Head>
        <title>Sweet Trip- Best Places to Stay in Varanasi & Ayodhya</title>
        <meta
          name="description"
          content="Want the best places to stay in Varanasi and Ayodhya or looking for family hotels in Varanasi, look no further! Book hotels at both places with Sweet Trip."
        />
        <meta
          name="keywords"
          content="family hotels in varanasi, low budget hotels in Varanasi, best places to stay in varanasi, best hotel in varanasi for family, hotels for couples in varanasi, hotels in ayodhya near ram mandir, hotels near ram mandir ayodhya, hotels near ayodhya ram mandir,hotel booking in ayodhya,    cheap hotels in ayodhya, best hotel in varanasi for family"
        />
        <link rel="canonical" href="https://sweettrip.in/hotel-booking" />
      </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          hotelBannerClass={sectionHeader}
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
        <HotelContent />
        <RentalCommunity />
        <HotelPeopleLike />
        <Faq faqsData={faqsData} faqsError={faqsError} />
      </>
    </>
  );
}
