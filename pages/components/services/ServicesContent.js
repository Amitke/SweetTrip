import React from "react";
import policyStyles from "@/pages/components/policy/policy.module.scss";

const ServicesContent = () => {
  return (
    <section className={`${policyStyles.policy}`}>
      <div className="container mx-auto">
        <div className="flex-col flex pl-4 pr-4">
          <h2 className="mt-5">Sweet Trip – The Best Car Rental Agency in Varanasi for Hassle-Free Travel</h2>
          <p>
            When one travels to a culturally and spiritually vibrant city such as Varanasi, the first two things that come to mind, transportation and stay. Stay is necessary, but good and economic transportation can make your trip worthwhile. One may find it easy to book a good hotel in Varanasi, but finding a <a href="https://sweettrip.in/cab-services">car rental agency in Varanasi</a> providing on-time service, good drivers, and hygienic cars at affordable prices is a task in itself.
          </p>
          <p className="mt-2">
            Enter Sweet Trip, your reliable go-to car rental in Varanasi that provides comfort, safety, and convenience during your journey. Be you travelling around the city's sacred sites or venturing out to neighbouring places, Sweet Trip provides a hassle-free travelling experience through its expert car rental services.
          </p>
          
        </div>
      </div>
    </section>
  );
};
export default ServicesContent;
