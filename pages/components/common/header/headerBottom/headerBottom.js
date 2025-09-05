import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHome,
  faInfo,
  faCar,
  faShip,
  faHotel,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { getHeaderMenu } from "../../../../api/common/menu";
import headerBottomStyles from "./headerBottom.module.scss";

const icons = {
  faHome,
  faInfo,
  faCar,
  faShip,
  faHotel,
  faPhone,
  faBlog,
};

const HeaderBottom = () => {
  const dispatch = useDispatch();
  const getMenuData = useSelector((state) => state.headerMenu);
  const [menuActiveClass, setMenuActiveClass] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  let body;
  if (typeof window !== "undefined") {
    body = document.getElementsByTagName("body")[0];
  }

  useEffect(() => {
    dispatch(getHeaderMenu());
  }, []);

  const handleMenuItem = (id) => {
    setMenuActiveClass(id);
  };

  const handleToggle = () => {
    body.classList.add("openMenu");
    setMobileMenu(!mobileMenu);
  };

  const handleDropShadow = () => {
    body?.classList.remove("openMenu");
    setMobileMenu(false);
  };
  return (
    <section className={headerBottomStyles.headerBottom} id="headerBottom">
      <div className="container mx-auto">
        <div className="flex-row flex">
          <div className={`w-1/5 pl-4 pr-4 ${headerBottomStyles.headerLogo}`}>
            <Link href="/">
              <Image
                src="https://sweettrip.in/images/logo.svg"
                className={headerBottomStyles.mobileLogo}
                alt="Sweet Trip logo"
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div
            className={`w-4/5 pl-4 pr-4 ${headerBottomStyles.headerMenuGroup} ${
              mobileMenu ? headerBottomStyles.openMenu : ""
            }`}
          >
            <div className={headerBottomStyles.headerGroup}>
              <Link
                href="/tour-package"
                className={`${headerBottomStyles.primaryButton} ${headerBottomStyles.tourPackage}`}
              >
                Book Tour Package
              </Link>
              <Link
                href="tel:+91 7488736844"
                className={`${headerBottomStyles.secondaryButton} ${headerBottomStyles.headerPhone}`}
              >
                <FontAwesomeIcon className="mr-1" icon={faPhone} /> +91
                7488736844
              </Link>
              <div onClick={handleToggle} className={headerBottomStyles.toggle}>
                <div className={headerBottomStyles.one}></div>
                <div className={headerBottomStyles.two}></div>
                <div className={headerBottomStyles.three}></div>
              </div>
            </div>
            <ul
              className={`list-none flex flex-row justify-end items-center h-full ${headerBottomStyles.headerMenu}`}
            >
              <Link href="/">
                <Image
                  src="https://sweettrip.in/images/logo.svg"
                  className={headerBottomStyles.logo}
                  alt="Sweet Trip logo"
                  width={500}
                  height={500}
                />
              </Link>
              {getMenuData.status && getMenuData?.menuItem?.length > 0 ? (
                getMenuData.menuItem.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        onClick={() => handleMenuItem(item.id)}
                        href={item.link}
                        className={
                          menuActiveClass === item.id
                            ? headerBottomStyles.active
                            : ""
                        }
                      >
                        <FontAwesomeIcon icon={icons[item.icon]} />
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
              <div
                className={`${headerBottomStyles.headerGroup} ${headerBottomStyles.headerMenuGroup}`}
              >
                <Link
                  href="/tour-package"
                  className={`${headerBottomStyles.primaryButton} ${headerBottomStyles.tourPackage}`}
                >
                  Book Tour Package
                </Link>
                <Link
                  href="tel:+91 7488736844"
                  className={`${headerBottomStyles.secondaryButton} ${headerBottomStyles.headerPhone}`}
                >
                  <FontAwesomeIcon className="mr-1" icon={faPhone} /> +91
                  7488736844
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {mobileMenu && (
        <div
          onClick={handleDropShadow}
          className={headerBottomStyles.dropShadow}
        ></div>
      )}
    </section>
  );
};
export default HeaderBottom;
