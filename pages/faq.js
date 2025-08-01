import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import faqStyles from "@/pages/components/faq/faq.module.scss";

export default function Faq() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].faq
      ? getSectionHeader.sectionHeader[0].faq
      : getSectionHeader?.error;

  return (
    <>
      <Head>
        <title>FAQ - Sweet trip</title>
        <meta name="description" content="FAQ" />
        <link rel="canonical" href="https://sweettrip.in/faq" />
         <script type="application/ld+json" 
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
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
                    "text": "It is convenient and simple to hire your cab rental in Varanasi with Sweet Trip. You may visit our website, place a call to our customer care, or use our 24*7 online booking facility for booking your car, travel date, and destination. Your booking is made instantly, and our customer care is accessible at all times."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are your drivers experienced and reliable?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, they are all good, experienced, and courteous drivers. As a reliable car rental agency in Varanasi, we ensure each driver knows the routes within the city, tourist destinations, and traffic rules so your trip is hitch-free and secure."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer outstation cab booking from Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We have local and outstation taxi bookings in Varanasi. If you are visiting Sarnath, Allahabad, Bodh Gaya, or anywhere else nearby, we have packages customised for you."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What vehicles do you offer with your car rental services in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweet Trip offers a range of vehicles from: ● Sedans for small families or single travellers ● SUVs for comfort and space ● Tempo travellers for group tours Our Varanasi cab rental service ensures that our cars are clean, comfortable, and well- maintained."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I reserve a cab rental in Varanasi for a temple tour and a spiritual tour?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide temple and spiritual tour packages such as Kashi Vishwanath, Sarnath, and Bharat Mata Temple. You can avail these tours at your convenience with on-time pickups and drop-offs by our Varanasi cab rental."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is airport and railway station transfer available in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our car rental agency in Varanasi offers instant airport and railway station pickup/drop-off facility. We pick you up on time from your doorstep so that you don't miss your train or flight."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is customer support available in case I have an issue related to my booking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Sweet Trip’s customer support staff is available at all times to assist you with booking, cancellation, or any other problem. We make every effort to make cab booking in Varanasi as easy and comfortable an experience as possible."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Yes, we do have last-minute bookings, subject to the availability of cars. Our large fleet and response system enable us to deal with urgent travel needs effectively.",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Sweet Trip is upfront. What you book and what you enjoy is what you pay. No additional cost with our Varanasi cab rentals."
                  }
                }
              ]
          })
        }} />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <section className={`${faqStyles.faq} pb-10`}>
          <div className="container mx-auto">
            <div className="flex-col flex pl-4 pr-4 md:w-3/4 w-full mx-auto">
              <h3>
                <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> What is included in the Varanasi 2-Day Tour Package?
              </h3>
              <p>
              The Varanasi 2-day tour package includes pick-up and drop-off service, hotel booking, sightseeing, local travel, and morning and evening boat rides. You can also customise your package, but a custom package is not subject to change. 
              </p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> Do you provide rental cars in Varanasi and a one-way taxi service in Varanasi?
              </h3>
              <p>
              Yes, we provide a rental car and a one-way taxi service in Varanasi. Our fleet of cabs is available whenever and wherever you need them. You can also book outstation taxis with us. 
              </p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div>Can we cancel a booking and get a refund for that?
              </h3>
              <p>No, Sweet Trip doesn’t allow booking cancellations or provide refund services. Once you have booked your trip or package, ensure to complete it. </p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> How early can I book a trip or tour package?
              </h3>
              <p>
              With Sweet Trip, you can book a trip or a tour package up to 90 days before the trip's start date. 
              </p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> Where can I book a hotel?
              </h3>
              <p>
             You can book hotels in Varanasi and Ayodhya with us. We offer boutique hotels to make your stay comfortable and enjoyable. 
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
