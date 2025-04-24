import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import errorStyles from "@/pages/components/error/error.module.scss";

const Error = () => {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].error
      ? getSectionHeader.sectionHeader[0].error
      : getSectionHeader?.error;
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <>
        <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
        <section className="about-content pb-10 mb-10">
          <div className="container mx-auto">
            <div className="flex-col justify-center items-center flex pl-4 pr-4">
              <Image width={758} height={468} src="/images/404.webp" alt="Two temples besides a river- The Ganges with flowers floating near a boat" />
              <h2
                className="text-center mt-5"
              >
                Page not found
              </h2>
              <a
                href="/"
                className={`${errorStyles.primaryButton} mt-5`}
              >
                Go to Home Page
              </a>
            </div>
          </div>
        </section>
      </>
    </>
  );
};
export default Error;
