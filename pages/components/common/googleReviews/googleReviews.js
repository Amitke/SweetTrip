// Import in your component
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import googleReviewsStyles from "./googleReviews.module.scss";

const GoogleReviews = ({ getGoogleReviews }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
            infinite: true,
        }
    },
    ]
  };

  return (
    <section className={`${googleReviewsStyles.googleReview} pt-12`}>
      <div className="container mx-auto">
        <div className="flex-col justify-center items-center flex pl-4 pr-4 text-center">
          <h2>Customer Reviews</h2>
          <p>What our customers say about us</p>
        </div>
        <div className="flex-row items-center flex mt-5">
          <div className="w-full">
            <div className="flex flex-row mx-auto justify-center">
              <Slider {...settings}>
                {getGoogleReviews?.status &&
                  getGoogleReviews.googleReviews.length > 0 &&
                  getGoogleReviews.googleReviews.map((item) => {
                    return (
                      <div className={googleReviewsStyles.bgWhite} key={item.id}>
                        <ul className={googleReviewsStyles.testimonialStar}>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                        <p>{item.para}</p>
                        <div
                          className={`${googleReviewsStyles.customerName} ${googleReviewsStyles.blue}`}
                        >
                          {item.firstLetter}
                        </div>
                        <h4>
                          {item.name}
                          <Image
                            width={15}
                            height={15}
                            src="/images/blue-tick.svg"
                            alt="tick"
                          />
                        </h4>
                        <Image
                          className={googleReviewsStyles.googleImage}
                          src="/images/google.svg"
                          alt="google"
                          width={75}
                          height={31}
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
