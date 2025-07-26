import React from "react";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const BusContent = () => {
  return (
    <section className={`${whyChooseStyles.policy} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div
          className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
        >
          <h2 className="text-center mb-5">
            Wedding, Sightseeing & Group Tour Bus Booking in Varanasi
          </h2>
          <p className="text-center">
            Our bus rental in Varanasi is appropriate for:
          </p>
          <p className="mt-5">
            <strong>Weddings</strong>: Getting wedded in Varanasi? Get your
            guests shifted from the hotel to the destination safely with our
            buses. Opt for a deluxe or luxury bus depending on your needs.
          </p>
          <p className="mt-5">
            <strong>Corporate Tours</strong>: Get your employees or clients to
            our well-organised and professional bus service.
          </p>
          <p className="mt-5">
            <strong>School or College Outings</strong>: Affordable, safe student
            transport with qualified drivers.
          </p>
          <p className="mt-5">
            <strong>Faith Tourism</strong>: Visit places of worship such as
            Kashi Vishwanath Temple, Sarnath, and Ganga Ghats in comfort in
            groups.
          </p>
          <p className="mt-5">
            <strong>Family Tours</strong>: Take the city and the surrounding
            cities with your family members without having to go through the
            hassle of arranging for transport.
          </p>
          <p className="mt-5">
            Our 30-seater and 40-seater buses have ample capacity for everyone
            to travel in one vehicle, so your trip is cosy and unforgettable
          </p>
          <h2 className="mt-5 font-bold">
            Why Sweet Trip for Bus Rental Service in Varanasi?
          </h2>
          <p>
            We provide incomparable service and quality at reasonable prices.
            Here's why Sweet Trip is always a step ahead:
          </p>
          <ol className="mt-3">
            <li>
              <strong>● Affordable Packages:</strong> Honest pricing with no
              hidden costs.
            </li>
            <li className="mt-1">
              <strong>● Well-Maintained Fleet:</strong> Clean, secure, and cosy
              buses for any event.
            </li>
            <li className="mt-1">
              <strong>● Experienced Drivers:</strong> Highly trained drivers
              with complete attention to ensure the safe passage of passengers
              and punctual arrival.
            </li>
            <li className="mt-1">
              <strong>● 24/7 Services:</strong> Our buses are at your service,
              anywhere, any time in Varanasi.
            </li>
            <li className="mt-1">
              {" "}
              <strong>● Flexible Schedules: </strong> Travel as per your
              convenience.
            </li>
            <li className="mt-1">
              <strong>● Safety Measures:</strong> Regular sanitisation and a
              hygienic interior for your comfort.
            </li>
            <li className="mt-1">
              <strong>● Easy Group Travel:</strong> Groups can travel without
              partitioning, so everyone can travel comfortably.
            </li>
            <li className="mt-1">
              <strong>● Doorstep Pickup & Drop:</strong> Multiple pick-up points
              based on the convenience of your group.
            </li>
            <li className="mt-1">
              <strong>● Reliable Customer Care:</strong> Prompt and friendly
              services along the way.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
export default BusContent;
