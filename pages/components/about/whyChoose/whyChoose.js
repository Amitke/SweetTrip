import React from "react";
import Image from "next/image";
import Link from "next/link";
import whyChooseStyles from "./whyChoose.module.scss";

const WhyChoose = () => {
  return (
    <section className={`${whyChooseStyles.whyChoose} pt-10 pb-10`}>
      <div className="container mx-auto text-center">
        <div className="flex-col justify-center items-center flex pl-4 pr-4">
          <h2>Why Choose Sweet Trip?</h2>
          <p>
            Choosing the right travel partner can make all the difference, and
            Sweet Trip is dedicated to offering an unparalleled travel
            experience.
          </p>
        </div>
        <div className="flex-row flex flex-wrap">
          <div
            className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
          >
            <Image
              src="/images/reliable-icon.webp"
              alt="On the left, A girl carrying a backpack. In the right, trolleys are available."
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3 className="font-bold">Reliable & Comfortable Travel </h3>
            <p className="text-sm">
              Well-maintained cars with experienced drivers
            </p>
          </div>
          <div
            className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
          >
            <Image
              src="/images/packages-icon.webp"
              alt="On the left, A girl carrying a backpack. In the right, trolleys are available."
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3 className="font-bold">Customised Packages </h3>
            <p className="text-sm">
              Tailored itineraries for an immersive experience.
            </p>
          </div>
          <div
            className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
          >
            <Image
              src="/images/price-icon.webp"
              alt="A bus with the logo of Sweet Trip is on the right side. In the background, there is a mountain and palm trees."
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3 className="font-bold">Affordable & Transparent Pricing </h3>
            <p className="text-sm">No hidden costs, just great value.</p>
          </div>
          <div
            className={`w-1/4 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}
          >
            <Image
              src="/images/expertise-icon.webp"
              alt="On the left, A man is standing with his luggage. On the right, a car is waiting for that man. Behind the car, a mobile with a map sign is there."
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3 className="font-bold">Local Expertise </h3>
            <p className="text-sm">
              Deep knowledge of destinations for an enriched journey.
            </p>
          </div>
        </div>
        <div className="flex-row flex flex-wrap text-left">
          <div className="w-full pl-4 pr-4 mt-10">
            <p>
              Sweet Trip is a one-stop destination in Varanasi for successful
              tour experience. To ensure, we keep providing you with quality
              services, we are on a mission and envisioned our future as
              follows.
            </p>
            <h3 className="mt-5 font-bold">Our Vision</h3>
            <p>
              To be the most trusted and preferred travel service provider in
              Varanasi and beyond, offering reliable, comfortable, and
              customer-centric experiences that make every journey memorable.
            </p>
            <h3 className="mt-5 font-bold">Our Mission</h3>
            <ul>
              <li>
                ● To simplify travel with seamless and high-quality services.
              </li>
              <li>
                ● To provide safe, comfortable, and efficient transportation for
                all travellers.
              </li>
              <li>
                ● To enhance the travel experience by offering personalised tour
                packages and local expertise.
              </li>
              <li>● We aim to expand to more cities across India.</li>
            </ul>
            <p className="mt-5">
              At Sweet Trip, we don't just take you from one place to another;
              we bring your travel dreams to life. Whether you are searching for
              the best boat ride in Varanasi, exploring the best places to stay
              in Varanasi, or planning an unforgettable{" "}
              <strong>
                <Link href="/varanasi-tour-package">
                  Varanasi 2-day tour package
                </Link>
              </strong>
              , we make sure every trip is a sweet and seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
