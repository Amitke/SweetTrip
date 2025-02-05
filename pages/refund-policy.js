import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import policyStyles from "@/pages/components/policy/policy.module.scss";

export default function RefundPolicy() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].refundPolicy
      ? getSectionHeader.sectionHeader[0].refundPolicy
      : getSectionHeader?.error;

  return (
    <>
      <Head>
        <title>Refund & Cancellation Policy - Sweet trip</title>
        <meta name="description" content="Refund & Cancel Policy" />
        <link rel="canonical" href="https://sweettrip.in/refund-policy" />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <section className={`${policyStyles.policy} pb-10 pt-10`}>
          <div className="container mx-auto">
            <div className="flex-col flex pl-4 pr-4">
              <h2 className="mb-4">Booking Policy</h2>
              <p>
                With Sweet Trip, a cab is available for booking for a maximum of
                90 days before the start date of the trip. Also, a cab booking
                can be done 2 hours before the start of the trip. For booking
                cabs, visit our website, <Link href="/">www.sweettrip.in</Link>,
                or call us at{" "}
                <Link href="tel:+91 7488736844">+91-7488736844</Link>. To
                confirm the online cab bookings, a customer needs to provide an
                advance for the trip. The advance amount is based on the trip's
                estimated cost and will be adjusted against the final amount
                payable at the end of the trip. For every confirmed booking, a
                cab or taxi will be allotted 10 hours before the start of the
                trip. For an outstation one-way trip, the car will be allotted 2
                hours before the start of the trip.
              </p>
              <h3>
              No Cancellation, No Refund
              </h3>
              <p>
              A booking is not subject to change or cancellation. Once a booking is made for a certain period, it will be considered final. We don't commit to any refund. You shall have to complete the trip.
              </p>
              <h3>
                Remaining Payments after Advance or Payment at Trip Completion
              </h3>
              <p>
                Before the start of the trip, customers have to pay the advance
                or token amount. Once, Sweet Trip receives the token amount, it
                starts the cab management process and asks for the customer’s
                details for trip confirmation. Once customers have paid the
                advance amount, the remaining amount for the trip is either paid
                to the driver or can be made online payment directly to Sweet
                Trip’s account. All payments made as advance shall be adjusted
                against the final bill. Please call Sweet Trip on{" "}
                <Link href="tel:+91 7488736844">+91-7488736844</Link> or email{" "}
                <Link href="mailto:info@sweettrip.in">info@sweettrip.in</Link>{" "}
                for any clarifications on billing or other things
                before/during/end of the trip.
              </p>
              <p className="mt-5">
                Suppose the trip is for 3 days, then customers need to pay 80%
                of the total amount including advance during the trip. The
                remaining 20% has to be paid at the end of the trip.
              </p>
              <h3>Trip Confirmation</h3>
              <p>
                Your booking will be confirmed either via the given mobile
                number or email ID. For any query either before booking or
                during the trip, customers need to call on the above-given
                number.{" "}
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
