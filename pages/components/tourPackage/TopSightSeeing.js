import React from "react";
import Image from "next/image";
import tourPackageStyles from "./tourPackage.module.scss";

const TopSightSeeing = ({ topSightSeeingTitle, topSightSeeingInfo }) => {
  return (
    <>
      <section className={`${tourPackageStyles.topSightSeeing} pt-10 pb-10`}>
        <div className="container mx-auto">
          <div className={`flex-col justify-center flex pl-4 pr-4 text-center`}>
            <h2 className="mb-5">
              {topSightSeeingTitle && topSightSeeingTitle?.heading}
            </h2>
            <p>{topSightSeeingTitle && topSightSeeingTitle?.paraOne}</p>
            <p className="mt-5">{topSightSeeingTitle && topSightSeeingTitle?.paraSecond}</p>
            <p className="mt-5">{topSightSeeingTitle && topSightSeeingTitle?.paraThird}</p>
          </div>
          <div className={`flex-row flex-wrap flex pl-4 pr-4 ${tourPackageStyles.flex}`}>
            {topSightSeeingInfo &&
              topSightSeeingInfo.length > 0 &&
              topSightSeeingInfo.map((item) => {
                return (
                  <div className={`w-1/2 pl-4 pr-4 mt-10 ${tourPackageStyles.mobileFullWidth}`}>
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
                        <p className="mb-5">
                          {item.para}
                        </p>
                        <a
                          rel="nofollow"
                          href="tel:+91 7488736844"
                          className={tourPackageStyles.primaryButton}
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default TopSightSeeing;
