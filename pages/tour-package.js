import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getRentalVehicleData } from "./api/common/rentalVehicle";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getTopSightSeeingData } from "./api/common/topSightSeeing";
import { getFaqData } from "./api/common/faq";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import { getAboutUsRecordData } from "@/pages/api/common/aboutUsRecord";
import RentalVehicle from "@/pages/components/common/rentalVehicle/rentalVehicle";
import TourPackageContent from "@/pages/components/tourPackage/TourPackageContent";
import TopSightSeeing from "@/pages/components/tourPackage/TopSightSeeing";
import Faq from "./components/common/faq/faq";
const RentalCommunity = dynamic(
  () => import("./components/common/rentalCommunity/rentalCommunity"),
  { ssr: false }
);

export default function HotelBooking() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getRentalVehicle = useSelector((state) => state.rentalVehicle);
  const getTopSightSeeing = useSelector((state) => state.topSightSeeing);
  const getFaq = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getGoogleReviewsData());
    dispatch(getAboutUsRecordData());
    dispatch(getRentalVehicleData());
    dispatch(getTopSightSeeingData());
    dispatch(getFaqData());
  }, []);
  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].tourPackage
      ? getSectionHeader.sectionHeader[0].tourPackage
      : getSectionHeader?.error;

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.hotelBooking : getFaq?.error;
  const faqsError = getFaq?.error;

  const vehicleInfo =
    getRentalVehicle && getRentalVehicle.status
      ? getRentalVehicle.rentalVehicle?.home[0].vehicleInfo
      : getRentalVehicle?.error;

  const vehicleTitle =
    getRentalVehicle && getRentalVehicle.status
      ? getRentalVehicle.rentalVehicle?.home[0].vehicleTitle
      : getRentalVehicle?.error;

  const topSightSeeingInfo =
    getTopSightSeeing && getTopSightSeeing.status
      ? getTopSightSeeing.topSightSeeing?.topSightSeeing[0].topSightSeeingInfo
      : getTopSightSeeing?.error;

  const topSightSeeingTitle =
    getTopSightSeeing && getTopSightSeeing.status
      ? getTopSightSeeing.topSightSeeing?.topSightSeeing[0].topSightSeeingTitle
      : getTopSightSeeing?.error;
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
          tourPackageClass={sectionHeader}
        />
        <RentalVehicle vehicleInfo={vehicleInfo} vehicleTitle={vehicleTitle} />
        <TopSightSeeing topSightSeeingInfo={topSightSeeingInfo} topSightSeeingTitle={topSightSeeingTitle}/>
        <TourPackageContent />
        <RentalCommunity />
        <Faq faqsData={faqsData} faqsError={faqsError} />
      </>
    </>
  );
}
