import React from "react";
import policyStyles from "@/pages/components/policy/policy.module.scss";

const BusBenefit = () => {
  return (
    <section className={`${policyStyles.policy} pb-10`}>
      <div className="container mx-auto">
        <div className="flex-col flex pl-4 pr-4">
          <h2 className="mt-2">Perfect For Any Occasion</h2>
          <p>
           Whether you are on your spiritual retreat, study tour, or luxury wedding, our bus rental service in Varanasi is the answer. We have mini buses for small groups, luxury and deluxe buses for a luxury tour experience. Our services cater to all needs.
          </p>
          <p className="mt-2">Our buses are leased for:</p>
          <ol>
            <li className="mt-1">●	Spiritual and pilgrimage tours</li>
            <li className="mt-1">●	Destination we className="mt-1"ddings and weddings</li>
            <li className="mt-1">●	Corporate activities and team-building activities</li>
            <li className="mt-1">●	Pick-up and drop-off from railway stations and airports</li>
            <li className="mt-1">●	City tours of the surrounding city</li>
            <li className="mt-1">●	Tour packages by Varanasi to outstations</li>
          </ol>
          <h2>Contact Us for the Best Bus Rental Prices in Varanasi</h2>
          <p>Planning your holiday? Let your holiday to Sweet Trip be with the finest bus rental service in Varanasi. We guarantee timely service, comfort, and an experience to cherish.</p>
          <p className="mt-3">Call Now: <a href="tel: +91 7488736844"> +91 7488736844</a></p>
          <p>Visit: <a href="https://www.sweettrip.in">www.sweettrip.in</a></p>
          <p>Email: <a href="mailto:info@sweettrip.in">info@sweettrip.in</a></p>
        </div>
      </div>
    </section>
  );
};
export default BusBenefit;
