// Import in your component
import React from "react";
import Image from "next/image";
import rentalVehicleStyles from "./rentalVehicle.module.scss";

const RentalVehicle = ({ vehicleInfo, vehicleTitle }) => {
  return (
    <section className={`${rentalVehicleStyles.rentalVehicle} pt-10 pb-10`}>
      <div className="container mx-auto">
        <div
          className={`flex-col justify-center items-center flex pl-4 pr-4 text-center ${rentalVehicleStyles.flex}`}
        >
          <h2>{vehicleTitle && vehicleTitle?.heading}</h2>
          <p>{vehicleTitle && vehicleTitle?.para}</p>
        </div>
        <div className={`flex-row flex ${rentalVehicleStyles.flex}`}>
          {vehicleInfo &&
            vehicleInfo.length > 0 &&
            vehicleInfo.map((item) => {
              return (
                <div
                  className={`w-1/3 pl-4 pr-4 mt-10 ${rentalVehicleStyles.mobileFullWidth}`}
                  key={item.id}
                >
                  <div className={rentalVehicleStyles.bgWhite}>
                    <h3>{item.carName}</h3>
                    <Image
                      width={360}
                      height={260}
                      src={`/images/${item.image}`}
                      alt={item.alt}
                    />
                    {item.type && (
                      <ul className="list-none flex">
                        {item.type.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    )}
                    {item.desc && <p dangerouslySetInnerHTML={{__html: item.desc}}/>}
                    <a
                      href="tel:+91 7488736844"
                      className={rentalVehicleStyles.primaryButton}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default RentalVehicle;
