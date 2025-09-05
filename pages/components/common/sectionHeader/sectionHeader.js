import React from "react";
import BookingForm from "./../BookingForm/BookingForm";
import sectionHeaderStyles from "./sectionHeader.module.scss";

const SectionHeader = ({
  title,
  para,
  boatBannerClass,
  homeData,
  hotelBannerClass,
  carBannerClass,
  tourPackageClass,
  aboutClass,
  contactClass,
}) => {
  let boatBannerClassName = boatBannerClass ? sectionHeaderStyles.boatBanner : "";
  let hotelBannerClassName = hotelBannerClass
    ? sectionHeaderStyles.hotelBanner
    : "";
  let homeBannerClassName = homeData && sectionHeaderStyles.homeBanner;
  let carBannerClassName = carBannerClass && sectionHeaderStyles.carBanner;
  let tourPackageClassName = tourPackageClass && sectionHeaderStyles.tourPackageBanner;
  let aboutClassName = aboutClass && sectionHeaderStyles.aboutBanner;
  let contactClassName = contactClass && sectionHeaderStyles.contactBanner;
  return (
    <section
      className={`${sectionHeaderStyles.sectionHeader} ${boatBannerClassName} ${hotelBannerClassName} ${homeBannerClassName} ${carBannerClassName} ${tourPackageClassName} ${aboutClassName} ${contactClassName}`}
    >
      <div className="container mx-auto">
        <div
          className={`flex-col justify-center items-center flex text-center ${sectionHeaderStyles.flexRow}`}
        >
          <div className="w-full pl-4 pr-4">
          {
            homeBannerClassName ?
          <>
            <p className="mx-auto">{title}</p>
            {para ? <h1 className="m-auto">{para}</h1> : ""}
            </>:<><h1>{title}</h1>
            {para ? <p className="m-auto">{para}</p> : ""}</>
          }
            {homeData && <BookingForm />}
            {carBannerClass && <BookingForm />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionHeader;
