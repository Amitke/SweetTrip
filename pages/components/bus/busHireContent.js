import React from "react";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const BusHireContent = () => {
  return (
    <section className={`${whyChooseStyles.policy} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div className={`flex-col flex pl-4 pr-4 ${whyChooseStyles.flex}`}>
          <h2 className="mb-5">
            Bus Hire in Varanasi
          </h2>
          <p>We make sure that you always explore Varanasi in the way that you thought and planned. Reach your destination in the most luxurious bus.</p>          
          <p className="mt-5">
            <strong>Luxury Bus: </strong> Get into the most luxurious buses ever with our <strong>luxury bus hire in Varanasi</strong>.
          </p>
          <p className="mt-5">
            <strong>Mini Bus: </strong>. Our <strong>mini bus on rent in Varanasi</strong> allows you to find a comfortable family vehicle.
          </p>
          <p className="mt-5">
            <strong>Deluxe Bus: </strong>Book a deluxe bus if you want to get it at a reasonable price. 
          </p>
        </div>
      </div>
    </section>
  );
};
export default BusHireContent;
