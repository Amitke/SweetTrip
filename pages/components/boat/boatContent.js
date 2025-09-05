import React from "react";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const BoatContent = () => {
  return (
    <section className={`${whyChooseStyles.policy} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div
          className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
        >
          <h2 className="text-center mb-5">
            Ganga Boat Ride in Varanasi – Varied Experiences
          </h2>
          <p className="text-center">
           Some of the alternatives for the Ganga boat ride at Varanasi are:
          </p>
          <p className="mt-5">
            <strong>Rowboats</strong>: Traditional and serene, perfect for group travel in threes or fours.
          </p>
          <p className="mt-5">
            <strong>Motorboats</strong>: Quick and perfect for distances to be covered.
          </p>
          <p className="mt-5">
            <strong>Luxury Boats & Cruises</strong>: Economical, guided tour with refreshment on board.
          </p>
          <p className="mt-5">
            All three are worth it, but if you want more traditional and devotional, the local boatman's rowboat.
          </p>
        </div>
      </div>
    </section>
  );
};
export default BoatContent;
