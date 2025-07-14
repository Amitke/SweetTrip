import React from "react";
import peopleLikeStyles from "@/pages/components/home/peopleLike/peopleLike.module.scss";

const CabServicesPeopleLike = () => {
  return (
      <section className={`${peopleLikeStyles.peopleLike} pt-10 pb-10`}>
        <div className="container mx-auto">
          <div className="flex-col justify-center items-center flex pl-4 pr-4 text-center">
            <h2>Why Choose Sweet Trip – Your Go-To Car Rental Agency in Varanasi?</h2>
            <p>
              Sweet Trip is not an ordinary travel agency. We are a professional <a href="https://sweettrip.in/blog/cab-service-in-varanasi">cab booking agency in Varanasi</a> with a mission to provide authentic, clean, and comfortable cabs in the hands of skilled drivers. These are the reasons that make tourists from all around the globe book cabs with us for Varanasi cab booking:
            </p>
          </div>
          <div className={`flex-row flex ${peopleLikeStyles.flex}`}>
            <div className={`w-1/3 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Reasonable Cost</h3>
              <p>
                Get access to the lowest cost available in the market without making any compromise on quality and service.
              </p>
            </div>
            <div className={`w-1/3 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Large Car Fleet</h3>
              <p>
                Whether you're single, a couple, or an extended family, we have the right car for you.
              </p>
            </div>
            <div className={`w-1/3 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Easy Online Booking</h3>
              <p>
                Our easy and secure 24/7 online reservation system lets you book a taxi anywhere, at home or abroad, while in Varanasi.
              </p>
            </div>
            <div className={`w-1/3 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Welcoming and Knowledgeable Drivers</h3>
              <p>
                Our drivers are not just experienced but polite and well-versed in the local road system and tourist places.
              </p>
            </div>
            <div className={`w-1/3 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Flexible Car Rental Options</h3>
              <p>
                Select hourly, day, or outstation packages as per your convenience.
              </p>
            </div>
            <div className={`w-1/3 pl-10 pr-4 mt-10 ${peopleLikeStyles.circle}`}>
              <h3>Customer Care</h3>
              <p>
                Our friendly staff is present to help you with enquiry or booking issues at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};
export default CabServicesPeopleLike;
