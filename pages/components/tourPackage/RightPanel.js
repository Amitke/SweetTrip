import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faShip,
  faCar,
  faBuilding,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import tourPackageStyles from "./tourPackage.module.scss";

const RightPanel = () => {
  return (
    <>
      <div className={tourPackageStyles.tourIncludes}>
        <h3>Tour includes</h3>
        <ul className="flex">
          <li className="flex flex-col mr-3">
            <FontAwesomeIcon icon={faCutlery} />
            Meals
          </li>
          <li className="flex flex-col mr-3">
            <FontAwesomeIcon icon={faShip} />
            Boat
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
      <div className={tourPackageStyles.tourIncludes}>
        <h3>Feel Free To Call Us</h3>
        <h4>Phone: </h4>
        <h5>
          <Link href="tel:+91 7488736844">+91 7488736844</Link>
        </h5>
        <h4 className="mt-4">Mail Us: </h4>
        <h5>
          <Link href="mailto:info@sweettrip.in">info@sweettrip.in</Link>
        </h5>
      </div>
    </>
  );
};
export default RightPanel;
