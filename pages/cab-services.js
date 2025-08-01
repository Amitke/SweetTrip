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
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import PopularRoutes from "./components/common/popularRoutes/popularRoutes";
import CabServicesPeopleLike from "./components/services/CabServicesPeopleLike";
import ServicesContentOther from "./components/services/ServicesContentOther";

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
        <title>
          Car Rental & Cab Hire in Varanasi | Sweet Trip
        </title>
        <meta
          name="description"
          content="Book reliable cab hire in Varanasi with Sweet Trip. Affordable car rental agency for local, outstation, and airport transfers. Safe, clean & on-time service."
        />
        <meta
          name="keywords"
          content="Car rental agency in Varanasi, Cab hire in Varanasi"
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
        <CabServicesPeopleLike />
        <Promo promoData={promoData} />
        <ServicesContentOther/>
        <Faq faqsData={faqsData} faqsError={faqsError} />
        <PopularRoutes />
      </>
    </>
  );
}
