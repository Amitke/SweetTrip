import React from "react";
import sectionHeaderStyles from "./sectionHeader.module.scss";

const SectionHeader = ({
  title,
  para,
  busBannerClass,
  homeData,
  hotelBannerClass,
  carBannerClass,
}) => {
  let busBannerClassName = busBannerClass ? sectionHeaderStyles.busBanner : "";
  let hotelBannerClassName = hotelBannerClass
    ? sectionHeaderStyles.hotelBanner
    : "";
  let homeBannerClassName = homeData && sectionHeaderStyles.homeBanner;
  let carBannerClassName = carBannerClass && sectionHeaderStyles.carBanner;
  return (
    <section
      className={`${sectionHeaderStyles.sectionHeader} ${busBannerClassName} ${hotelBannerClassName} ${homeBannerClassName} ${carBannerClassName}`}
    >
      <div className="container mx-auto">
        <div
          className={`flex-col justify-center items-center flex text-center ${sectionHeaderStyles.flexRow}`}
        >
          <div className="w-full pl-4 pr-4">
            <h1>{title}</h1>
            {para ? <p className="m-auto">{para}</p> : ""}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionHeader;
