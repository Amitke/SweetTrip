import React from "react";
import { openWhatsApp } from "./../../../utils/openWhatsApp";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";
import hotelBookingStyles from "./hotel.module.scss";

const HotelContent = () => {
  return (
    <>
      <section className={`${whyChooseStyles.policy} pt-10`}>
        <div className="container mx-auto">
          <div
            className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
          >
            <h2 className="text-center mb-5">
              Where to Stay in Varanasi & Ayodhya?
            </h2>
            <p>Let’s stretch this question further!</p>
            <p className="mt-5">
              Are you looking for your family? Are you a couple? Arriving in a
              group?
            </p>
            <p className="mt-5">
              Now locations- looking for a hotel near ghats ear Kashi Vishwanath
              Temple in Varanasi or hotels near Ram Mandir in Ayodhya?
            </p>
            <p className="mt-5">
              Sweet Trip eases your brainstorming for booking the best hotels in
              Varanasi and Ayoydhya. These are two major locations where
              travelling remains throughout the year, and therefore, you must
              get a platform that streamlines your hotel hunt.
            </p>
            <p className="mt-5">
              Whether you are looking for{" "}
              <strong>
                {" "}
                family hotels in Varanasi or hotels for couples in Varanasi
              </strong>
              , we get you both. Our hotels in Varanasi provide a family
              environment and make visitors feel safe and warm inside the
              premises. With us, you can book hotels near ghats and temples as
              well as at distant places like Sarnath.
            </p>
            <h3 className="mt-5">
              <strong>Top Tourist Places in Varanasi</strong>
            </h3>
            <ol type="1">
              <li>● Kashi Vishwanath Temple</li>
              <li>● Sarnath</li>
              <li>● Manikarnika Ghat</li>
              <li>● Dashwamedh Ghat</li>
              <li>● Banaras Hindu University</li>
            </ol>
          </div>
        </div>
      </section>
      <section className={`${hotelBookingStyles.hotelBooking} pb-10`}>
        <div className="container mx-auto">
          <div
            className={`flex-row items-center flex ${hotelBookingStyles.flexRow}`}
          >
            <div
              className={`w-1/2 pl-4 pr-4 pt-10 ${hotelBookingStyles.mobileWidth}`}
            >
              <div className={hotelBookingStyles.hotelBookingContainer}>
                <div className={hotelBookingStyles.frontPart}>
                  <div className={hotelBookingStyles.content}>
                    <h3>Amber Palace</h3>
                    <p>
                      Welcome to Amber Palace! Our luxury rooms are at your
                      service. Stay in comfort and enjoy the vibrance of
                      Ayodhya.
                    </p>
                    <a
                      rel="nofollow"
                      onClick={openWhatsApp}
                      href="javascript:void(0)"
                      className={hotelBookingStyles.primaryButton}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-1/2 pl-4 pr-4 pt-10 ${hotelBookingStyles.mobileWidth}`}
            >
              <div className={hotelBookingStyles.hotelBookingContainer}>
                <div className={hotelBookingStyles.frontPart}>
                  <div className={hotelBookingStyles.content}>
                    <h3>R.K. Guest House</h3>
                    <p>
                      R.K. Guest House serves you with accommodation with
                      seating areas. Luxury Rooms near Varanasi Ghats!
                    </p>
                    <a
                      rel="nofollow"
                      onClick={openWhatsApp}
                      href="javascript:void(0)"
                      className={hotelBookingStyles.primaryButton}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${whyChooseStyles.policy} pb-10`}>
        <div className="container mx-auto">
          <div
            className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
          >
            <h2 className="text-center mb-5">
              Ayodhya- From the Lenses of Sweet Trip
            </h2>
            <p>
              Sweet Trip takes pride in serving you with the best stays and
              hotels in the home of Ram Lalla. Though Ayodhya is known for Ram
              Janmbhoomi (the birthplace of Lord Ram), the city offers endless
              tourist spots and locations to make your trip unforgettable. If
              you want to take a tour of all these places, you should book good
              from
              <strong>hotels in Ayodhya near Ram Mandir</strong>. Once your stay
              job is done, you can take a breath of life.
            </p>
            <h3 className="mt-5">
              <strong>Top 3 Destinations in Ayodhya</strong>
            </h3>
            <p>
              Saryu Ghat, Ram Janmbhoomi, and Hanuman Gadhi are some of the
              major attractions in Ayodhya.
            </p>
            <h3 className="mt-5">
              <strong>Most Loved Places in Ayodhya</strong>
            </h3>
            <p>
              Ramkot Ayodhya, Queen Huh Memorial Park and Jain Shrine Ayodhya
              are the most loved places in the city.
            </p>
            <h3 className="mt-5">
              <strong>Other Tourist Spots in Ayodhya</strong>
            </h3>
            <ol type="1">
              <li>● Company Garden</li>
              <li>● Surya Stambh</li>
              <li>● Lata Mangeshkar Chowk</li>
              <li>● Sita Ki Rasoi</li>
              <li>● Shri Vaidehi Vallabh Kunj</li>
              <li>● Shri Nageshwar Nath Mandir Ayodhya Trust</li>
              <li>● Raja Mandir</li>
              <li>● Raj Dwar Mandir</li>
              <li>● Naya Ghat</li>
              <li>● Moti Mahal</li>
              <li>● Janki Mahal</li>
              <li>● Guptar Ghat</li>
              <li>● Chhoti Chawani</li>
              <li>● Chhoti & Badi Devkali Mandir</li>
              <li>● Mani Parvat</li>
              <li>● Ram Katha Park</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};
export default HotelContent;
