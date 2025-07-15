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
        <title>Sweet Trip- Book Hotel, Bus & Car Rental in Varanasi</title>
        <meta
          name="description"
          content="Sweet Trip is a platform where you can make cab booking in Varanasi, get Varanasi cab booking, bus hire in Varanasi, and book the best places to stay in Varanasi."
        />
        <meta
          name="keywords"
          content="Best Cab Service in Varanasi, Varanasi local cab, Varanasi airport cab booking, one-way taxi service in Varanasi contact number, luxury bus on rental, bus booking for marriage, private bus booking, tourist bus booking, mini bus on rent, best places to stay in Varanasi, best hotel in Varanasi for family, hotels for couples in Varanasi, hotels in Ayodhya near Ram Mandir, and hotels near Ram Mandir Ayodhya."
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
