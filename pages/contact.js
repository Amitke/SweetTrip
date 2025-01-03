import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import contactStyles from "@/pages/components/contact/contact.module.scss";

export default function Contact() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].contact
      ? getSectionHeader.sectionHeader[0].contact
      : getSectionHeader?.error;

  return (
    <>
      <Head>
        <title>Contact US</title>
        <meta name="description" content="Sweet Trip Contact No. 7488736844" />
        <link rel="canonical" href="https://sweettrip.in/contact" />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <section className="pt-10 pb-10">
          <div className="container mx-auto">
            <div className="flex-col justify-center items-center flex pl-4 pr-4">
              <h2 className="text-center mb-3">
                Contact Us
              </h2>
              <p className="mb-10">
                If you have any queries, please fill out the given form to reach
                us.
              </p>
              <div className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full`}>
                <label className={contactStyles.label}>Your Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={contactStyles.formControl}
                />
              </div>
              <div className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full`}>
                <label className={contactStyles.label}>Your Email*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={contactStyles.formControl}
                />
              </div>
              <div className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full`}>
                <label className={contactStyles.label}>Subject*</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={contactStyles.formControl}
                />
              </div>
              <div className={`${contactStyles.formGroup} flex flex-col md:w-1/2 w-full`}>
                <label className={contactStyles.label}>Message*</label>
                <textarea
                  name="message"
                  id="message"
                  className={contactStyles.formControl}
                  cols="3"
                  rows="8"
                ></textarea>
              </div>
              <button type="submit" name="submit" className={contactStyles.primaryButton}>
                Submit
              </button>
            </div>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14424.709124402356!2d82.9930522!3d25.3318315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7d2f954e5312f%3A0x59f8cc6f3cc66ab6!2sSweet%20Trip%20-%20Car%20Rental%20In%20varanasi!5e0!3m2!1sen!2sin!4v1685350135463!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen
          loading="lazy"
          style={{ border: "none",height:"100vh" }}
        ></iframe>
      </>
    </>
  );
}
