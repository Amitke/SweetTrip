// Import in your component
import React from "react";
import Image from "next/image";
import promoStyles from "./promo.module.scss";

const Promo = ({ promoData }) => {
  return (
    <section className={promoStyles.promo}>
      <div className="container mx-auto mb-10">
        <div className={`flex-row items-center flex ${promoStyles.flex}`}>
          <div className="w-full pl-4 pr-4 pt-10">
            <div className={`${promoStyles.promoBoxLeft}`}>
              <h2>{promoData?.heading}</h2>
              <p className="mt-5">{promoData?.para}</p>
              <a
                href="tel:+91 7488736844"
                className={`${promoStyles.secondaryButton} mt-8`}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
