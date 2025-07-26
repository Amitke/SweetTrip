import React from "react";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const BusHireContent = () => {
  return (
    <section className={`${whyChooseStyles.policy} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div className={`flex-col flex pl-4 pr-4 ${whyChooseStyles.flex}`}>
          <h1 className="mb-5">
            Bus Rental Service in Varanasi
          </h1>
          <p><strong>Comfortable, Convenient & Customised Travel Solutions with Sweet Trip</strong></p>
          <p>Whatever be the reason of traveling to the sacred city Varanasi, where you travel to, our bus hiring service in Varanasi is such that your travel experience is hassle-free and problem-free. We at Sweet Trip make your journey as you would expect it to be, be it planning or execution.</p>  
          <p className="mt-5">We understand the uniqueness and specialness of your trip to Varanasi. For this reason, we have different vehicles such as luxury buses, mini buses, and deluxe coaches to suit different requirements so that you travel in style and in complete comfort and safety.</p>        
          <h2 className="font-bold mt-5">Types of Buses Available for Hire in Varanasi</h2>
          <h3 className="mt-2">Luxury Bus Rental in Varanasi</h3>
          <p>Welcome to high-end travel. Our luxury buses are the perfect choice for corporate tours, VIP visitors, wedding parties, or upscale group tours. Fitted with trendy interiors, expansive leg room, better air-conditioning, and entertainment equipment, these buses provide maximum comfort during travel. Opt for this if you prefer a unique and high-end experience.</p>
          <h3 className="mt-4">Mini Bus on Rent in Varanasi</h3>
          <p>Looking for a comfortable and hassle-free travel facility for small groups? Our Varanasi mini bus rental is the right solution for family holidays, corporate events, or local festivals. It can carry a maximum of 18–25 people in comfort and comes equipped with all the necessary amenities such as air conditioners, cushioned seats, and ample room for baggage.</p>
          <h3 className="mt-4">Deluxe Bus Rental in Varanasi</h3>
          <p>The ideal blend of comfort and budget. Our luxury buses are perfect for pilgrimage tours, school tours, or economic family tour packages. Get all the desired amenities such as reclining seats, air conditioning, comfortable space, and expert drivers at an unimaginably affordable price.</p>
          <h2 className="mt-5 font-bold">Booking Bus Service in Varanasi is Now Easier Than Ever</h2>
          <p>With Sweet Trip, booking bus rental services in Varanasi is now at your fingertips. Our website enables you to:</p>
          <ol className="mt-2">
          <li>●	Compare and book operator prices</li>
            <li>●	Arrange the buses in order of type: AC, Non-AC, Sleeper, Seater</li>
            <li>●	Choose your pickup and drop-off points</li>
            <li>●	Change the trip duration and route according to your needs</li>
            <li>●	Get a package price with no extra cost.</li>
          </ol>
          <p className="mt-2">Be it a city tour, a wedding function, or a pilgrimage tour package, we provide transparency, flexibility, and immediate service.</p>
        </div>
      </div>
    </section>
  );
};
export default BusHireContent;
