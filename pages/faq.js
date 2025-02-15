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
