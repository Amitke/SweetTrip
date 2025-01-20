import React from "react";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const TourPackageContent = () => {
  return (
    <>
      <section className={`${whyChooseStyles.policy} pt-10 pb-10`}>
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
              Whether you are looking for
              <strong>
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
          </div>
        </div>
      </section>
    </>
  );
};
export default TourPackageContent;
