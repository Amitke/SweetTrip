import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getFooterMenu } from "../../../../api/common/menu";
import { getContactData } from "./../../../../api/common/contact";
import footerTopStyles from "./footerTop.module.scss";

const FooterTop = () => {
  const dispatch = useDispatch();
  const getMenuData = useSelector((state) => state.footerMenu);
  const getContactInfo = useSelector((state) => state.contactData);

  useEffect(() => {
    dispatch(getFooterMenu());
    dispatch(getContactData());
  }, []);

  return (
    <section className={footerTopStyles.footerTop}>
      <div className="container mx-auto">
        <div className={`flex-row flex ${footerTopStyles.flexRow}`}>
          <div className={`w-1/3 pl-4 pr-4 ${footerTopStyles.mobileFullWidth}`}>
            <Link href="/">
              <Image
                src="https://sweettrip.in/images/logo.svg"
                alt="Sweet Trip logo"
                width={500}
                height={500}
              />
            </Link>
            <p>
            We are a leading Tour Operator in Varanasi, providing reliable travel services in Prayagraj, Ayodhya, and nearby destinations. From cabs to hotels and boat rides, we make every trip seamless.
            </p>
          </div>
          <div className={`w-1/3 pl-4 pr-4 ${footerTopStyles.mobileFullWidth}`}>
            <h3>Company</h3>
            <ul className="list-none">
              {getMenuData.status && getMenuData?.menuItem?.length > 0 ? (
                getMenuData.menuItem.slice(0,3).map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        {item.linkText}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>
                  <Link href="#">{getMenuData.error}</Link>
                </li>
              )}
            </ul>
          </div>
          <div className={`w-1/3 pl-4 pr-4 ${footerTopStyles.mobileFullWidth}`}>
            <h3>Our Policy</h3>
            <ul className="list-none">
              {getMenuData.status && getMenuData?.menuItem?.length > 0 ? (
                getMenuData.menuItem.slice(3,6).map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <FontAwesomeIcon icon={faAngleRight} />
                        {item.linkText}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li>
                  <Link href="#">{getMenuData.error}</Link>
                </li>
              )}
            </ul>
          </div>
          <div className={`w-1/3 pl-4 pr-4 ${footerTopStyles.mobileFullWidth}`}>
            <h3>Connects</h3>
            <ul className="list-none">
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  href={`mailto:${
                    getContactInfo.status &&
                    getContactInfo.contactInfo.length > 0
                      ? getContactInfo.contactInfo[0].email
                      : getContactInfo.error
                  }`}
                >
                  {getContactInfo.status &&
                  getContactInfo.contactInfo.length > 0
                    ? getContactInfo.contactInfo[0].email
                    : getContactInfo.error}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a
                  href={`tel:${
                    getContactInfo.status &&
                    getContactInfo.contactInfo.length > 0
                      ? getContactInfo.contactInfo[0].phone
                      : getContactInfo.error
                  }`}
                >
                  {getContactInfo.status &&
                  getContactInfo.contactInfo.length > 0
                    ? getContactInfo.contactInfo[0].phone
                    : getContactInfo.error}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterTop;
