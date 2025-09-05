import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCutlery,
  faShip,
  faCar,
  faBuilding,
  faLeaf,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import tourPackageStyles from "./tourPackage.module.scss";

const TopSightSeeing = ({ topSightSeeingInfo }) => {
  return (
    <>
      <section className={`${tourPackageStyles.topSightSeeing} pt-10 pb-10`}>
        <div className="container mx-auto">
          <div className={`flex-col justify-center flex pl-4 pr-4`}>
            <h2 className="mb-5 text-center">
              Explore the Spiritual Heart of India with Sweet Trip – The Premier Tour and Travel Agency in Varanasi
            </h2>
            <p className="mt-5">
             Welcome to Sweet Trip, your trusted travel and tour company in Varanasi, from where your cultural and spiritual odyssey of the holy cities of India begins. Should you want to absorb the rich history and holy experiences of Varanasi, Ayodhya, Prayagraj, and Bodhgaya, then you are on the right platform. We offer full tour packages with car rental, hotel booking, and boat cruises, which are convenient, comfortable, and a meaningful travel experience.
            </p>
            <p className="mt-5">
             Whether it is a day tour package to travel from Varanasi to Ayodhya, or you want to explore the different sides of the Varanasi Bodhgaya tour, or have a customised tour plan between these sacred sites, Sweet Trip promises unbeatable quality and service. Sweet Trip tour packages for a Varanasi tour are designed to cater to pilgrims, spiritual travellers, families, and history enthusiasts to visit India's timelessness in its sacred cities.
            </p>
            <h3 className="mt-5 font-bold">Why Sweet Trip – Best Tour and Travel Agency in Varanasi?</h3>
            <p className="mt-5">As a <a href="https://sweettrip.in/tour-package">top tour and travel agency in Varanasi</a>, Sweet Trip stands out from the crowd because we possess local knowledge, professional service, and an eye for detail. Here's why we've been relied on by thousands of tourists:</p>               
          <p className="mt-5"><strong>One-Stop Travel Solution - </strong> Our tours can be planned entirely as per your travel dates, interests, and budget.</p>
          <p className="mt-2"><strong>Expert Travel Planners - </strong> With sound knowledge of Ayodhya, Prayagraj, Varanasi, and Bodhgaya, we take you to the unseen stories, cultural riches, and spiritual secrets of these cities.</p>
          <p className="mt-2"><strong>24/7 Support - </strong> Relax with our round-the-clock assistance during your journey.</p>
          <p className="mt-5">You are a new traveller or an experienced traveller looking for a more serious spiritual experience. Our Varanasi tour and travel packages render your journey easy and hassle-free.</p>
          <h3 className="mt-5 font-bold">Our Best Varanasi Tour and Travel Services</h3>
          <p>We offer varied, well-balanced <a href="https://sweettrip.in/blog/tour-operator-in-varanasi">tour packages from Varanasi</a> and including major religious and historical places like Ayodhya, Prayagraj, and Bodhgaya. Our most sought-after packages are as follows:</p>
          <h4 className="mt-5 font-bold">One-Day Package Tour from Varanasi to Ayodhya</h4>
          <p>Ayodhya, the birthplace of Lord Rama, is a place to be visited by every devotee. Our one-day package tour offers:</p>
          <p className="mt-5">●	Early morning pick up from Varanasi</p>
          <p>●	Drive a rental car for a smooth ride</p>
          <p>●	Guided tour to Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and the Sarayu River</p>
          <p>●	Return to Varanasi in the evening</p>
          <p className="mt-5">This package suits a spiritually enriching day outing with comfort and ease. Only a professional tour and travel company in Varanasi, like Sweet Trip, can provide.</p>
          <h4 className="mt-5 font-bold">Day Tour from Varanasi to Prayagraj</h4>
          <p>Spend a day at the sacred city of Prayagraj, renowned for the union (Triveni Sangam) of the Ganga, Yamuna, and Saraswati rivers</p>
          <p className="mt-5">●	Morning pick-up from Varanasi</p>
          <p>●	Triveni Sangam, Hanuman Temple, Anand Bhavan, and Allahabad Fort tour</p>
          <p>●	Return to Varanasi in the evening</p>
          <p className="mt-5">This sacred destination is a jewel of our Varanasi holiday packages and travel packages, and we guarantee that you get to experience the spiritual refinement and historical depth of Prayagraj.</p>
           <h4 className="mt-5 font-bold">Varanasi to Bodhgaya Travel Package</h4>
          <p>Bodhgaya is one of those places that changes anyone who has spiritual aspirations. Witness the place where Lord Buddha became enlightened:</p>
          <p className="mt-5">●	Pickup from Varanasi</p>
          <p>●	Drive in a neat, air-conditioned vehicle</p>
          <p>●	Sightseeing the Bodhi Tree, the Mahabodhi Temple, and other Buddhist landmarks</p>
          <p>●	Overnight stay at Bodhgaya if needed</p>
          <p className="mt-5">As your trusted Varanasi tour and travel organiser, we arrange your Bodhgaya tour hassle-free and rewarding.</p>
          <h4 className="mt-5 font-bold">Combo Tour Packages – Varanasi, Bodhgaya, Ayodhya, and Prayagraj</h4>
          <p>●	Discover the best of spiritual India in our combo packages:</p>
          <p>●	Multi-day tour between Varanasi, Bodhgaya, Ayodhya, and Prayagraj</p>
          <p>●	Day excursions in all major cities with local sightseeing</p>
          <p>●	Highly rated stays and expert guides</p>
          <p>●	Flexible duration (3 to 7 days or more)</p>
          <p className="mt-5">These are multi-destination packages ideal for tourists who want to experience India's religious and cultural diversity. Sweet Trip, India's premier tour and travel company in Varanasi, makes all the travel arrangements.</p>
          <h3 className="mt-5 font-bold">Rental Car, Hotel, Boat Ride – Complete Package</h3>
          <p>Luxury service is our package offer that comes with:</p>
           <p className="mt-5"><strong>Rental Cars - </strong> Spotless, well-maintained vehicles at the wheel of experienced local drivers.</p>
          <p><strong>Hotels - </strong> Avail handpicked hotels for comfort, hygiene, and security.</p>
          <p><strong>Boat Rides - </strong> Enjoy the once-in-a-lifetime sunrise boat trip on the Ganga at Varanasi, a timeless and heavenly experience.</p>
          <p className="mt-5">This comprehensive package distinguishes Sweet Trip's travel and tour services in Varanasi. Every aspect is taken care of personally, so you need to take care of your travel only.</p>
          <h3 className="mt-5 font-bold">Customised Tour Packages As You Want Them</h3>
          <p>No two travellers are identical with the same number of objectives or length. This is why our Varanasi travel and tourism packages are tailored to your limit:</p>
          <p className="mt-5">●	Want to stay longer at Bodhgaya for meditation?</p>
          <p>●	Hotel reservations around Kashi Vishwanath Temple?</p>
          <p>●	Luxury car instead of a regular car?</p>
          <p className="mt-5">Just tell us your preferences, and we’ll create a tailor-made tour itinerary just for you. This level of personalisation is what makes us a highly rated tour and travel agency in Varanasi.</p>
          <h3 className="mt-5 font-bold">Embark on a Journey of a Lifetime</h3>
          <p>From the sacred ghats of Varanasi to the spiritual tranquillity of Bodhgaya, from the historical richness of Prayagraj to the divine authority of Ayodhya, they are not tourist places. They are experiences that touch your soul.</p>
          <p className="mt-5">And Sweet Trip to make your experience through these sacred cities smooth, significant, and memorable.</p>
          <p className="mt-5">We are pleased to be a leading travel and tour company in Varanasi, committed to providing the finest tour and travel services in Varanasi for our Indian as well as foreign visitors.</p>
          <h3 className="mt-5 font-bold">Book Your Tour Today</h3>
          <p>If you are prepared to initiate your spiritual journey, get in touch with Sweet Trip immediately. They will plan, book, and organise the most trusted tour and travel agency in Varanasi, so that you may focus on your spiritual journey.</p>
          </div>
          <div
            className={`flex-row flex-wrap flex pl-4 pr-4 ${tourPackageStyles.flex}`}
          >
            {topSightSeeingInfo &&
              topSightSeeingInfo.length > 0 &&
              topSightSeeingInfo.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`w-full mt-10 ${tourPackageStyles.mobileFullWidth}`}
                  >
                    <div className={tourPackageStyles.imageContainer}>
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.alt}
                        width={271}
                        height={481}
                        className="mr-5"
                      />
                      <div
                        className={tourPackageStyles.imageRightContainer}
                      >
                        <h4 className="mb-1">{item.heading}</h4>
                        <h3 className="mb-1">{item.type}</h3>
                        <p className="mb-2">{item.para}</p>
                        <ul className="flex mb-3">
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                          <li className="mr-1">
                            <FontAwesomeIcon icon={faStar} />
                          </li>
                        </ul>
                        <ul className="flex">
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faCutlery} />
                            Meals
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faShip} />
                            Boat Ride
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faCar} />
                            Sightseeing
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faBuilding} />
                            Hotel
                          </li>
                          <li className="flex flex-col mr-3">
                            <FontAwesomeIcon icon={faLeaf} />
                            Tour
                          </li>
                        </ul>
                      </div>
                      <div className={`${tourPackageStyles.buttonWrapper} text-center`}>
                        <h3>Price on call</h3>
                        <h5>Per person</h5>
                        <Link
                          href={item.link}
                          rel="nofollow"
                          className={tourPackageStyles.primaryButton}
                        >
                          Enquiry Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default TopSightSeeing;
