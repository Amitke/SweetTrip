import React from "react";
import Image from "next/image";
import whyChooseStyles from "./whyChoose.module.scss";

const WhyChoose = () => {
  return (
    <section className={`${whyChooseStyles.whyChoose} pt-10 pb-10`}>
      <div className="container mx-auto text-center">
        <div className="flex-col justify-center items-center flex pl-4 pr-4">
          <h2>Why should you choose us?</h2>
          <p>Look why people want to travel with us</p>
        </div>
        <div className="flex-row flex flex-wrap">
          <div className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}>
            <Image
              src="/images/about-icon1.png"
              alt="Trusted Agency"
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3>Trusted Agency</h3>
            <p>
              We are a trusted agency, and we don’t say this, it’s our customers
              who give their reviews this way. You can entrust on the
              availability of the best affordable price across the city,
              customer support and much more. Our customers are always 100%
              satisfied.
            </p>
          </div>
          <div className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}>
            <Image
              src="/images/about-icon2.png"
              alt="Easier & Faster Booking"
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3>Easier & Faster Booking</h3>
            <p>
              Get the best deals by choosing our rental car services. We offer
              easier and faster rental car booking services. You can book your
              desired car online at the best available price across the city.
              Our rental cars will easily accommodate in your trip budget.
            </p>
          </div>
          <div className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}>
            <Image
              src="/images/about-icon3.png"
              alt="Fleet of Rental Cars"
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3>Fleet of Rental Cars</h3>
            <p>
              Choose car/s as per your requirements from our fleet of rental
              cars. We also provide personal driver for your entire tour. Visit
              Varanasi with enthusiasm and devotion in our luxurious or economic
              cars, whatever you choose. You also have your choice of pickup
              location.
            </p>
          </div>
          <div className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}>
            <Image
              src="/images/about-icon4.png"
              alt="Well-Behaved Cabbies"
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3>Well-Behaved Cabbies</h3>
            <p>
              When you visit a pilgrimage city and book a rental car, the first
              thing comes is the behaviour of the cabbie. Our drivers are true
              professionals and very well behaved.
            </p>
          </div>
          <div className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}>
            <Image
              src="/images/about-icon5.png"
              alt="Vision"
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3>Vision</h3>
            <p>
              Through our rental car agency, we want to give the best travel
              experience to our customers and make their trip memorable forever.
            </p>
          </div>
          <div className={`w-1/3 pl-4 pr-4 mt-10 ${whyChooseStyles.fullWidthMobile}`}>
            <Image
              src="/images/about-icon6.png"
              alt="Mission"
              width={70}
              height={70}
              className="mx-auto mb-5"
            />
            <h3>Mission</h3>
            <p>
              We want to stay ahead when it comes to provide the best customer
              experience in terms of cars, customer support, and price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;
