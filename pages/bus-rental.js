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
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Bus Rental Service in Varanasi",
                "url": "https://sweettrip.in/bus-rental",
                "description": "Sweet Trip is a one-stop destination for bus booking for marriage, tourist bus booking, private bus booking, minibus booking and bus hire in Varanasi.",
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
                  "@id": "https://sweettrip.in/bus-rental"
                },
                "inLanguage": "en",
                "datePublished": "2025-05-01",
                "dateModified": "2025-07-07",
                "about": {
                  "@type": "Thing",
                  "name": "https://sweettrip.in/bus-rental"
                }
            }),
          }}
        />
        <link rel="canonical" href="https://sweettrip.in/bus-rental" />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I reserve a bus in Varanasi with Sweet Trip?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Book online or call our customer support. Just provide your travel details, date, time, number of passengers, and destination, and we will send you a customised quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are your different bus rental options in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a wide range of buses including luxury coaches, deluxe buses, mini buses, and 40-seaters for group travel in and around Varanasi."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide bus booking for a wedding in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer bus bookings for weddings. Buses can be decorated and scheduled as per your wedding events and preferences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the buses convenient for senior citizens and children?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our buses are spacious and comfortable. Our experienced drivers ensure smooth and safe rides for all passengers, including senior citizens and children."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Am I able to pick up and drop off from different points?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we allow multiple pickup and drop-off points. Just share your route, and we’ll include it in the final quotation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a minimum distance or a minimum rental period?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We generally offer full-day packages or bookings based on a minimum distance (in kilometers). Custom quotes are available on request."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are you offering outstation bus hiring service from Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer both local and outstation bus rentals from Varanasi. Just let us know your destination, and we will arrange the right bus for your trip."
                  }
                }
              ]
            }),
          }}
        />
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
