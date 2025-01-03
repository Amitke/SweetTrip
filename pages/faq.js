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
            <div className="flex-col flex pl-4 pr-4 md:w-1/2 w-full mx-auto">
              <h3>
                <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> How to book rental car
                services?
              </h3>
              <p>
                Book our rental car services through our website. Fill the
                required details and get your request confirmed on your mobile.
              </p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> Do you provide only local
                cab services?
              </h3>
              <p>
                No, we have an extensive fleet of rental cars for local as well
                as outstation tours. You can book as per your requirement.
              </p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> Is there any cancellation
                fees?
              </h3>
              <p>No, we don’t take any cancellation fees.</p>
              <h3>
              <div className={faqStyles.icon}><FontAwesomeIcon icon={faQuestion} /></div> How many cars can be
                booked at a time?
              </h3>
              <p>
                You can book as many cars you want. The prices will vary as per
                the selection of rental car.
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
