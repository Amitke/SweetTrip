import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getRentalVehicleData } from "./api/common/rentalVehicle";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getTopSightSeeingData } from "./api/common/topSightSeeing";
import { getFaqData } from "./api/common/faq";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import { getAboutUsRecordData } from "@/pages/api/common/aboutUsRecord";
import TopSightSeeing from "@/pages/components/tourPackage/TopSightSeeing";
import Faq from "./components/common/faq/faq";

export default function HotelBooking() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
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
    getFaq && getFaq.status ? getFaq?.faq?.tourPackage : getFaq?.error;
  const faqsError = getFaq?.error;

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
      <title> Top Tour and Travel Agency in Varanasi | SweetTrip </title>
        
        <meta name = "description"
        content = "Explore the best deals on Varanasi to Ayodhya tour packages, Varanasi Ayodhya Allahabad tour packages and Varanasi to Bodhgaya tour packages.Get 1000 off on all packages." />
        < link rel = "canonical" href = "https://sweettrip.in/tour-package" />
        <meta property="og:title" content="Top Tour and Travel Agency in Varanasi | SweetTrip"/>
        <meta property="og:description" content="Explore the best deals on Varanasi to Ayodhya tour
                  packages, Varanasi Ayodhya Allahabad tour packages and Varanasi to Bodhgaya tour
                  packages. Get 1000 off on all packages." />
        <meta
          name="keywords"
          content="Varanasi to Ayodhya tour package, Varanasi Ayodhya tour package, Varanasi Ayodhya Allahabad tour package, Varanasi Ayodhya Gaya tour package, Varanasi Allahabad Ayodhya tour package, Varanasi Ayodhya Prayagraj, Varanasi Ayodhya Prayagraj tour, Varanasi Ayodhya tour"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sweettrip.in/tour-package" />
        <meta property="og:image" content="https://sweettrip.in/images/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Tour and Travel Agency in Varanasi | SweetTrip"/>
        <meta name="twitter:description" content="Explore the best deals on Varanasi to Ayodhya tour
        packages, Varanasi Ayodhya Allahabad tour packages and Varanasi to Bodhgaya tour
        packages. Get 1000 off on all packages." />
        <meta name="twitter:image" content="https://sweettrip.in/images/logo.svg" />
            < script
            type = "application/ld+json"
            dangerouslySetInnerHTML = {
              {
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Top Tour and Travel Agency in Varanasi | SweetTrip",
                  "url": "https://sweettrip.in/tour-package",
                  "description": "Explore the best deals on Varanasi to Ayodhya tour packages, Varanasi Ayodhya Allahabad tour packages and Varanasi to Bodhgaya tour packages.Get 1000 off on all packages."
                }),
              }
            }
            />
        <link rel="canonical" href="https://sweettrip.in/tour-package" />
      </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          tourPackageClass={sectionHeader}
        />
        <TopSightSeeing topSightSeeingInfo={topSightSeeingInfo} topSightSeeingTitle={topSightSeeingTitle}/>
        <Faq faqsData={faqsData} faqsError={faqsError} />
      </>
    </>
  );
}
