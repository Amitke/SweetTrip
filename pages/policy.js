import React, { useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import policyStyles from "@/pages/components/policy/policy.module.scss";

export default function Policy() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].policy
      ? getSectionHeader.sectionHeader[0].policy
      : getSectionHeader?.error;

  return (
    <>
      <Head>
        <title>Privacy & Policy - Sweet trip</title>
        <meta name="description" content="Privacy & Policy" />
        <link rel="canonical" href="https://sweettrip.in/policy" />
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <section className={`${policyStyles.policy} pb-10`}>
          <div className="container mx-auto">
            <div className="flex-col flex pl-4 pr-4">
            <h3>Privacy Policy</h3>
            <p>
              Respects customer privacy and understands the need to protect the
              personally identified information or PII (any information by which
              you can be identified, such as name, email id, address, and contact
              number) you share with us. We would like to ascertain our customers
              that we follow proper PII safety standards when it comes to
              safeguarding your privacy on our websites or mobile apps (if any).
              There are times when we may ask for customer information like PII.
              We intend to inform our customers before we share your details and
              also why we are doing this. Generally, you will have an opinion not
              to share your information, and in the future, you can “opt-out” of
              certain uses of your information. If you select not to give the
              information we request, you can still visit the website of Sweet
              Trip, but you may be unable to access some particular offers,
              options, and services.
            </p>
            <p className="mt-5">
              Sweet Trip will not trade, sell or disclose your information to
              third parties collected for the registration on our website, or use
              of any online service without taking the consent of the customer.
              Sweet Trip will take proper protection steps to safeguard the
              information you share with us. We have executed cutting-edge
              technology and security features as well as strict guidelines to
              protect the privacy of customers’ personally identifiable
              information from unauthorized access and improper use or disclosure.
            </p>
            <p className="mt-5">
              Sweet Trip will keep enhancing its security features and procedures
              as soon as any new cybersecurity technology comes in. If we change
              our privacy policy in future, it will be available on our website
              with the given amendments. You should access our privacy policy
              continuously to ensure you understand the ongoing policies. Please
              reference the policy in your email subject line and we will try to
              respond to all reasonable concerns. Thank you for using Sweet Trip,
              if you have any doubts/queries, please write to us at
            </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
