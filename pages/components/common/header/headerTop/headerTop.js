import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import headerTopStyles from "./headerTop.module.scss";

const HeaderTop = () => {
  return (
    <section className={headerTopStyles.headerTop}>
      <div className="container mx-auto">
        <div className="flex-row flex">
          <div className={`w-1/5 pl-4 pr-4 ${headerTopStyles.headerSocial}`}>
            <ul className={`flex flex-row ${headerTopStyles.headerList}`}>
              <li className="mr-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/_sweettrip"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://in.pinterest.com/sweet_trip/"
                >
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sweettrip.inn"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="mr-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/sweettrip.in/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`w-5/6 pl-4 pr-4 ${headerTopStyles.headerContact}`}>
            <ul
              className={`list-none flex flex-row justify-end ${headerTopStyles.headerList}`}
            >
              <li className="mr-4">Need Help ?</li>
              <li className="mr-5">
                <a href="mailto:info@sweettrip.in">
                  <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
                  info@sweettrip.in
                </a>
              </li>
              <li className="mr-5">
                <a href="tel:+91 7488736844">
                  <FontAwesomeIcon className="mr-1" icon={faPhone} /> +91
                  7488736844
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTop;
