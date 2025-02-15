import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faBus,
  faCar,
  faBuilding,
  faLeaf,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import tourPackageStyles from "./tourPackage.module.scss";

const TopSightSeeing = ({ topSightSeeingTitle, topSightSeeingInfo }) => {
  return (
    <>
      <section className={`${tourPackageStyles.topSightSeeing} pt-10 pb-10`}>
        <div className="container mx-auto">
          <div className={`flex-col justify-center flex pl-4 pr-4`}>
            <h2 className="mb-5 text-center">
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
                return (
                  <div
                    key={item.id}
                    className={`w-full mt-10 ${tourPackageStyles.mobileFullWidth}`}
                  >
                    <div className={tourPackageStyles.imageContainer}>
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.alt}
                        width={271}
                        height={481}
                        className="mr-5"
                      />
                      <div
                        className={tourPackageStyles.imageRightContainer}
                      >
                        <h4 className="mb-1">{item.heading}</h4>
                        <h3 className="mb-1">{item.type}</h3>
                        <p className="mb-2">{item.para}</p>
                        <ul className="flex mb-3">
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                        <ul className="flex">
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faCutlery} />
                            Meals
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faBus} />
                            Transfer
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faCar} />
                            Sightseeing
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faBuilding} />
                            Hotel
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faLeaf} />
                            Tour
                          </li>
                        </ul>
                      </div>
                      <div className={`${tourPackageStyles.buttonWrapper} text-center`}>
                        <h3>Price on call</h3>
                        <h5>Per person</h5>
                        <Link
                          href={item.link}
                          rel="nofollow"
                          className={tourPackageStyles.primaryButton}
                        >
                          Enquiry Now
                        </Link>
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
