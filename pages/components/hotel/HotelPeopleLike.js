import React from "react";
import peopleLikeStyles from "@/pages/components/home/peopleLike/peopleLike.module.scss";

const HotelPeopleLike = () => {
  return (
      <section className={`${peopleLikeStyles.peopleLike} pt-10`}>
        <div className="container mx-auto">
          <div className="flex-col justify-center items-center flex pl-4 pr-4 text-center">
            <h2>Why Choose Sweet Trip for Hotel Booking?</h2>
            <p>
              With Sweet Trip, finding the{" "}
              <strong>best places to stay in Varanasi</strong> or{" "}
              <strong>best hotel in Varanasi for family</strong> is on your tip
              of fingers. Our hotels are verified and acknowledged for their
              services, ambiance, cleanliness, quality foods and more.
            </p>
          </div>
          <div className={`flex-row flex ${peopleLikeStyles.flex}`}>
            <div className={`w-1/4 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Easy Booking Process</h3>
              <p>
                Choose your preferred hotel & room in Varanasi and Ayodhya, fill
                in the details, make the payment, and your room is booked.
                Deluxe to Suites, all are available!
              </p>
            </div>
            <div className={`w-1/4 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Competitive Price</h3>
              <p>
                Price would never be a concern when you are booking a hotel in
                Varanasi or Ayodhya. We always ensure to offer you a competitive
                price on hotel booking.
              </p>
            </div>
            <div className={`w-1/4 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Secured Payment Gateway</h3>
              <p>
                Your banking or transaction details will be safe with us.
                Whether you pay through a credit card or UPI or net banking, we
                ensure complete encryption-level security for them.
              </p>
            </div>
            <div className={`w-1/4 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Refund Policy</h3>
              <p>
                Our instant refund policy intends to build trust among our
                customers. Once your query for a refund is resolved, we ensure
                to refund your money in the next 7 working days.
              </p>
            </div>
          </div>
          <div className="flex-row flex">
            <div className="w-full pl-5 mt-10">
              <p>
                <strong>What are you waiting for now?</strong>{" "}
              </p>
              <p className="mt-5">
                Visit Varanasi and Ayodhya with Sweet Trip, we are also a car
                rental service provider. Enjoy your trip and make memorable
                moments with your family and friends.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};
export default HotelPeopleLike;
