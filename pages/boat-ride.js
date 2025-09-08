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
import BoatContent from "./components/boat/boatContent";
import BoatHireContent from "./components/boat/boatHireContent";
import Promo from "./components/common/promo/promo";
import BoatBenefit from "./components/boat/boatBenefit";
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import Faq from "./components/common/faq/faq";
import PopularRoutes from "./components/common/popularRoutes/popularRoutes";

export default function BoatRide() {
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
    getSectionHeader.sectionHeader[0].boatRide
      ? getSectionHeader.sectionHeader[0].boatRide
      : getSectionHeader?.error;

  const promoData =
    getPromo && getPromo.status && getPromo.promo.home
      ? getPromo.promo.home
      : getPromo?.error;

  const faqsData =
    getFaq && getFaq.status ? getFaq?.faq?.boatRide : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
        <title>
          
        </title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content=""
        />
        <link rel="canonical" href="https://sweettrip.in/boat-ride" />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Boat Ride in Varanasi",
                "url": "https://sweettrip.in/boat-ride",
                "description": "",
                "publisher": {
                  "@type": "Organization",
                  "name": "Sweet Trip",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sweettrip.in/images/logo.svg"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/boat-ride"
                },
                "inLanguage": "en",
                "datePublished": "2025-05-01",
                "dateModified": "2025-07-07",
                "about": {
                  "@type": "Thing",
                  "name": "https://sweettrip.in/boat-ride"
                }
            }),
          }}
        />
        <link rel="canonical" href="https://sweettrip.in/boat-ride" />
      </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          boatBannerClass={sectionHeader}
        />
        <BoatHireContent />
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
        <BoatContent />
        <Promo promoData={promoData} />
        <BoatBenefit />
        <Faq faqsData={faqsData} faqsError={faqsError} />
        <PopularRoutes />
      </>
    </>
  );
}
