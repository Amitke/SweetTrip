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
import BusContent from "./components/bus/busContent";
import BusHireContent from "./components/bus/busHireContent";
import Promo from "./components/common/promo/promo";
import BusBenefit from "./components/bus/busBenefit";
import BookingForm from "./components/common/BookingForm/BookingForm";
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import Faq from "./components/common/faq/faq";
import PopularRoutes from "./components/common/popularRoutes/popularRoutes";

export default function BusRental() {
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
    getSectionHeader.sectionHeader[0].busRental
      ? getSectionHeader.sectionHeader[0].busRental
      : getSectionHeader?.error;

  const promoData =
    getPromo && getPromo.status && getPromo.promo.home
      ? getPromo.promo.home
      : getPromo?.error;

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.busBooking : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
        <title>
          Sweet Trip- Hire buses on rent for all occasions in Varanasi
        </title>
        <meta
          name="description"
          content="Sweet Trip is a one-stop destination for bus booking for marriage, tourist bus booking, private bus booking, minibus booking and bus hire in Varanasi. "
        />
        <meta
          name="keywords"
          content="bus hire in varanasi, bus on rent in varanasi, luxury bus on rental, bus booking for marriage, private bus booking, tourist bus booking, mini bus on rent"
        />
        <link rel="canonical" href="https://sweettrip.in/bus-rental" />
      </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          busBannerClass={sectionHeader}
        />
        <div className="container mx-auto mt-10">
          <div className="flex-row justify-center items-center flex">
            <div className="w-full pl-4 pr-4">
              <BookingForm />
            </div>
          </div>
        </div>
        <BusHireContent />
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
        <BusContent />
        <Promo promoData={promoData} />
        <BusBenefit />
        <Faq faqsData={faqsData} faqsError={faqsError} />
        <PopularRoutes />
      </>
    </>
  );
}
