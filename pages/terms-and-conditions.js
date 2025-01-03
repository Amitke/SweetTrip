import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import policyStyles from "@/pages/components/policy/policy.module.scss";

export default function TermsCondition() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].termsConditions
      ? getSectionHeader.sectionHeader[0].termsConditions
      : getSectionHeader?.error;

  return (
    <>
      <Head>
        <title>Terms & Conditions - Sweet trip</title>
        <meta name="description" content="Terms and Conditions" />
        <link
          rel="canonical"
          href="https://sweettrip.in/terms-and-conditions"
        />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <section className={`${policyStyles.policy} pb-10`}>
          <div className="container mx-auto">
            <div className="flex-col flex pl-4 pr-4">
              <h2 className="mt-10 mb-4">Terms and Conditions</h2>
              <p>
                Most states have released their travel and transport guidelines
                for outbound and inbound travellers with regard to permits,
                passes and other requirements. You are suggested to check all
                guidelines before planning your travel in Varanasi and around,
                for a hassle-free experience.
              </p>
              <h3>Terms of Service</h3>
              <p>
                Sweet Trip is committed to delivering excellence in your travel
                plan and allowing you to experience memorable moments in the
                holy city of Banaras.
              </p>
              <h3>Cabs</h3>
              <p>
                If you are looking to book a clean, sanitized, and
                hygiene-driven cab in Varanasi, there won’t be a better choice
                than Sweet Trip Cabs. To help you find cabs and get an
                unforgettable trip, we are bringing our terms table for you so
                that you can estimate your budget in advance.
              </p>
              <p>1. The booking amount is 20% of the total fare.</p>
              <p>2. Arrival time payment is 70%.</p>
              <p>
                3. The rest of the amount can be paid when you complete your
                journey.
              </p>
              <p>4. Self-drive service is not available.</p>
              <p>5. Rs. 300 for driver night charge (from 9 PM onwards).</p>
              <p>6. Customers will have to pay both sides toll payment.</p>
              <p>
                7. Both side charges will be taken whether the customer returns
                or not.
              </p>
              <p>
                8. Passenger will have to pay Rs. 500 for the next day for the
                range of 200KM when travelling locally. The charges for
                outstation within the area of 250KM for the next day will be Rs.
                1000.
              </p>
              <p className="mt-5">
                We endeavour our best to give you cabs whenever and wherever you
                want across Varanasi. If you have more queries, you can call our
                customer care for better support.
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
