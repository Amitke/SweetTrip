import React, { useEffect } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getPromoData } from "./api/common/promo";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import AboutContent from "./components/about/aboutContent";
import Promo from "./components/common/promo/promo";
import WhyChoose from "./components/about/whyChoose/whyChoose";
const RentalCommunity = dynamic(() => import('./components/common/rentalCommunity/rentalCommunity'), { ssr: false });

export default function About() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getGoogleReviews = useSelector((state) => state.googleReviews);
  const getPromo = useSelector((state) => state.promo);

  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getGoogleReviewsData());
    dispatch(getPromoData());
  }, []);
  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].about
      ? getSectionHeader.sectionHeader[0].about
      : getSectionHeader?.error;
  
  const promoData = getPromo && getPromo.status && getPromo.promo.home ? getPromo.promo.home : getPromo?.error;
  return (
    <>
      <Head>
        <title>About US - Sweet trip</title>
        <meta name="description" content="About US" />
        <link rel="canonical" href="https://sweettrip.in/about" />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <AboutContent />
        <Promo promoData={promoData} />
        <WhyChoose />
        <RentalCommunity />
      </>
    </>
  );
}