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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "The Best Car Rental Agency in Varanasi for Hassle-Free Travel",
              "url": "https://sweettrip.in/cab-services",
              "description": "Book reliable cab hire in Varanasi with Sweet Trip. Affordable car rental agency for local, outstation, and airport transfers. Safe, clean & on-time service.",
              "publisher": {
                "@type": "Organization",
                "name": "Sweet Trip",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://sweettrip.in/images/logo.svg"
                }
              },
              "inLanguage": "en",
              "datePublished": "2025-01-01",
              "dateModified": "2025-01-10"
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why is Sweet Trip the best car hire agency in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweet Trip is the most trusted car hire company in Varanasi because of our reasonable prices, experienced drivers, clean vehicles, and simplified reservation procedure. We provide top-notch services to travellers as well as locals of Varanasi."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I hire a cab in Varanasi through Sweet Trip?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is convenient and simple to hire your cab rental in Varanasi with Sweet Trip. You may visit our website, call our customer care, or use our 24x7 online booking facility. Your booking is made instantly, and customer support is always available."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are your drivers experienced and reliable?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all our drivers are experienced, courteous, and well-trained. They know the city routes, tourist destinations, and traffic rules to ensure a safe and smooth journey."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer outstation cab booking from Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer both local and outstation cab bookings. Whether you're visiting Sarnath, Allahabad, Bodh Gaya, or nearby destinations, we have tailored packages for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What vehicles do you offer with your car rental services in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer a wide range of vehicles including sedans for small families, SUVs for extra comfort, and tempo travellers for groups. All our vehicles are clean, comfortable, and well-maintained."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I reserve a cab rental in Varanasi for a temple tour and a spiritual tour?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide spiritual tour packages to destinations like Kashi Vishwanath, Sarnath, and Bharat Mata Temple, with on-time pickups and drop-offs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is airport and railway station transfer available in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide instant airport and railway station pickup and drop-off services. Our punctual service ensures you don’t miss your train or flight."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is customer support available in case I have an issue related to my booking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our customer support team is available 24x7 to help with bookings, cancellations, or any other issues you may face."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I book your car rental agency in Varanasi on short notice?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we accept last-minute bookings depending on vehicle availability. Our large fleet allows us to cater to urgent travel needs efficiently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you have any additional cab rental costs in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, we are transparent with our pricing. What you see is what you pay. There are no hidden or additional charges."
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
