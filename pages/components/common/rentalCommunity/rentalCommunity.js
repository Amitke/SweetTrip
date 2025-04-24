import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rentalCommunityStyles from "@/pages/components/common/rentalCommunity/rentalCommunity.module.scss";

const RentalCommunity = () => {
  return (
    <section className={rentalCommunityStyles.rentalCommunity}>
      <div className="container mx-auto">
        <div
          className={`flex-row items-center flex ${rentalCommunityStyles.flex}`}
        >
          <div className="w-full text-center pl-4 pr-4">
            <h2 data-aos="fade-up">Join Our Tour & Travel Community</h2>
            <p data-aos="fade-up">
              Join Our Socials for Excellent Tips and Guidance
            </p>
            <div className={rentalCommunityStyles.communityBoxWrap}>
              <a href="https://www.instagram.com/sweettrip.in/" target="_blank" rel="noopener noreferrer">
                <div className={rentalCommunityStyles.icon}>
                  <i className={rentalCommunityStyles.faInstagram}>
                    <FontAwesomeIcon
                      icon={[
                        "fab",
                        "faInstagram".toLowerCase().replace("fa", ""),
                      ]}
                    />
                  </i>
                </div>
                <div className={rentalCommunityStyles.numbersWrap}>
                  <h5>Instagram</h5>
                </div>
                <Image
                  width={12}
                  height={12}
                  src="/images/right-up.svg"
                  alt="A crowd on the bank of a river- The Ganges. Many people are on a boat in the river."
                />
              </a>
              <a href="https://www.facebook.com/sweettrip.inn" target="_blank" rel="noopener noreferrer">
                <div className={rentalCommunityStyles.icon}>
                  <i className={rentalCommunityStyles.faFacebook}>
                    <FontAwesomeIcon
                      icon={[
                        "fab",
                        "faFacebook".toLowerCase().replace("fa", ""),
                      ]}
                    />
                  </i>
                </div>
                <div className={rentalCommunityStyles.numbersWrap}>
                  <h5>Facebook</h5>
                </div>
                <Image
                  width={12}
                  height={12}
                  src="/images/right-up.svg"
                  alt="A crowd on the bank of a river- The Ganges. Many people are on a boat in the river."
                />
              </a>
              <a href="https://www.linkedin.com/company/sweettrip/" target="_blank" rel="noopener noreferrer">
                <div className={rentalCommunityStyles.icon}>
                  <i className={rentalCommunityStyles.faTwitter}>
                    <FontAwesomeIcon
                      icon={[
                        "fab",
                        "faLinkedin".toLowerCase().replace("fa", ""),
                      ]}
                    />
                  </i>
                </div>
                <div className={rentalCommunityStyles.numbersWrap}>
                  <h5>Linkedin</h5>
                </div>
                <Image
                  width={12}
                  height={12}
                  src="/images/right-up.svg"
                  alt="A crowd on the bank of a river- The Ganges. Many people are on a boat in the river."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RentalCommunity;
