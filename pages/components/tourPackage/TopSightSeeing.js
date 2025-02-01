import React, { useRef } from "react";
import Image from "next/image";
import TourPackageContent from "@/pages/components/tourPackage/TourPackageContent";
import tourPackageStyles from "./tourPackage.module.scss";

const TopSightSeeing = ({ topSightSeeingTitle, topSightSeeingInfo }) => {
  let tourPackage;
  const varanasi = useRef(null);
  const ayodhya = useRef(null);
  const prayagraj = useRef(null);
  const bodhgaya = useRef(null);

  const scrollToPackageSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  console.log(tourPackage,'tourPackage')
  return (
    <>
      <section className={`${tourPackageStyles.topSightSeeing} pt-10 pb-10`}>
        <div className="container mx-auto">
          <div className={`flex-col justify-center flex pl-4 pr-4 text-center`}>
            <h2 className="mb-5">
              {topSightSeeingTitle && topSightSeeingTitle?.heading}
            </h2>
            <p>{topSightSeeingTitle && topSightSeeingTitle?.paraOne}</p>
            <p className="mt-5">
              {topSightSeeingTitle && topSightSeeingTitle?.paraSecond}
            </p>
            <p className="mt-5">
              {topSightSeeingTitle && topSightSeeingTitle?.paraThird}
            </p>
          </div>
          <div
            className={`flex-row flex-wrap flex pl-4 pr-4 ${tourPackageStyles.flex}`}
          >
            {topSightSeeingInfo &&
              topSightSeeingInfo.length > 0 &&
              topSightSeeingInfo.map((item) => {
                if (item.alt === "varanasi") {
                  tourPackage = varanasi;
                } else if (item.alt === "ayodhya") {
                  tourPackage = prayagraj;
                }else if (item.alt === "prayagraj") {
                  tourPackage = ayodhya;
                }else if (item.alt === "bodhgaya") {
                  tourPackage = bodhgaya;
                }
                return (
                  <div
                    className={`w-1/2 pl-4 pr-4 mt-10 ${tourPackageStyles.mobileFullWidth}`}
                  >
                    <div className={`${tourPackageStyles.imageContainer}`}>
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.alt}
                        width={271}
                        height={481}
                        className="mr-5"
                      />
                      <div
                        className={`${tourPackageStyles.imageRightContainer}`}
                      >
                        <h4 className="mb-1">{item.heading}</h4>
                        <h3 className="mb-2">{item.type}</h3>
                        <p className="mb-5">{item.para}</p>
                        <button
                          rel="nofollow"
                          className={tourPackageStyles.primaryButton}
                          onClick={() =>
                            scrollToPackageSection(tourPackage)
                          }
                        >
                          Enquiry Now
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <TourPackageContent tourPackage={tourPackage} />
    </>
  );
};
export default TopSightSeeing;
