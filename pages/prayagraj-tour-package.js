import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RightPanel from "@/pages/components/tourPackage/RightPanel";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const PrayagrajTourPackage = () => {
  return (
    <>
      <Head>
        <title>Sweet Trip- Tour Packages from Varanasi with 1000 Off!</title>
        <meta
          name="description"
          content="Explore the best deals on Varanasi to Ayodhya tour packages, Varanasi Ayodhya Allahabad tour packages and Varanasi to Bodhgaya tour packages. Get 1000 off on all packages."
        />
        <meta
          name="keywords"
          content="Varanasi to Ayodhya tour package, Varanasi Ayodhya tour package, Varanasi Ayodhya Allahabad tour package, Varanasi Ayodhya Gaya tour package, Varanasi Allahabad Ayodhya tour package, Varanasi Ayodhya Prayagraj, Varanasi Ayodhya Prayagraj tour, Varanasi Ayodhya tour"
        />
        <link rel="canonical" href="https://sweettrip.in/tour-package" />
      </Head>
      <section
        className={`${whyChooseStyles.policy} pt-10 pb-10 border-solid border-t-2`}
      >
        <div className="container mx-auto">
          <div
            className={`flex-col justify-center flex pl-4 pr-4 ${whyChooseStyles.flex}`}
          >
            <div className="flex items-center">
              <Link href="/tour-package" rel="nofollow" className="mr-2">
                Tour Package
              </Link>
              <FontAwesomeIcon icon={faAngleRight} className="mr-2" />
              Prayagraj Tour Package
            </div>
            <h2 className="mb-2">
              Prayagraj Tour Package{" "}
              <span className="text-sm text-gray-400">2 Days / 4 Nights</span>
            </h2>
          </div>
          <div className="md:flex-row flex-col flex">
            <div
              className={`md:w-3/4 w-full pl-4 pr-4 ${whyChooseStyles.flex}`}
            >
              <Image
                src="/images/prayagraj.webp"
                alt="A river called “Sangam” is shown in the background with the Peepa bridge."
                width={850}
                height={408}
                className="mb-5"
              />
              <h3 className="mb-2">Day 1: Explore Spirituality and Heritage</h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Triveni Sangam (Confluence of Rivers)</h5>
              <ul>
                <li>
                  ● Start your day with a visit to the Triveni Sangam, where the
                  Ganga, Yamuna, and mythical Saraswati rivers meet.
                </li>
                <li>
                  ● Take a boat ride to the Sangam point and experience its
                  spiritual significance.
                </li>
                <li>
                  ● Optional: Participate in a morning puja or take a holy dip.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Hanuman Mandir</h5>
              <ul>
                <li>
                  ● Visit the famous Lete Hanuman Mandir, known for its unique
                  reclining statue of Lord Hanuman near the Sangam area.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. Allahabad Fort (Outside View)</h5>
              <ul>
                <li>
                  ● Marvel at the majestic Allahabad Fort, built by Emperor
                  Akbar (entry is restricted as it's under the Army).
                </li>
                <li>
                  ● Don’t miss the Ashoka Pillar located inside the fort
                  premises (visible from outside).
                </li>
              </ul>
              <h5 className="mb-1 mt-3">4. Anand Bhawan</h5>
              <ul>
                <li>
                  ● Explore Anand Bhawan, the ancestral home of the Nehru
                  family, which is now a museum showcasing India’s freedom
                  struggle.
                </li>
                <li>
                  ● Also, visit Swaraj Bhawan, next to it, where Indira Gandhi
                  was born.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. Alopi Devi Mandir</h5>
              <ul>
                <li>
                  ● Visit this unique temple dedicated to Goddess Alopi Devi,
                  believed to be the site of one of the 51 Shakti Peethas.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">6. Khusro Bagh</h5>
              <ul>
                <li>
                  ● End your day at Khusro Bagh, a beautiful Mughal garden and
                  mausoleum complex with stunning Mughal architecture.
                </li>
              </ul>
              <h3 className="mb-2 mt-5">
                Day 2: Culture, Religion, and Local Flavours
              </h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Akshayavat Tree</h5>
              <ul>
                <li>
                  ● Visit the Akshayavat (Immortal Banyan Tree), located inside
                  the Allahabad Fort area. It holds immense religious importance
                  in Hindu mythology.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Mankameshwar Temple</h5>
              <ul>
                <li>
                  ● Stop by this ancient Shiva temple, located near Saraswati
                  Ghat, and enjoy its serene environment.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. All Saints Cathedral (Patthar Girja)</h5>
              <ul>
                <li>
                  ● Visit the grand All Saints Cathedral, a Gothic-style church
                  built during the British era.
                </li>
                <li>
                  ● Known for its stunning stained-glass windows and colonial
                  architecture.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">
                4. Chandra Shekhar Azad Park (Company Garden)
              </h5>
              <ul>
                <li>
                  ● Relax at this historic park, which is dedicated to freedom
                  fighter Chandra Shekhar Azad.
                </li>
                <li>
                  ● The park is a great place to stroll and enjoy some downtime.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. Saraswati Ghat</h5>
              <ul>
                <li>
                  ● Head to Saraswati Ghat for a beautiful sunset view by the
                  Yamuna River.
                </li>
                <li>
                  ● You can witness evening aartis and enjoy the tranquil
                  atmosphere.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">6. Shopping & Local Food</h5>
              <ul>
                <li>
                  ● Explore local bazaars like Chowk and Civil Lines for
                  souvenirs, handicrafts, and religious items.
                </li>
                <li>
                  ● Try local delicacies like kachori-sabzi, jalebi, and street
                  food at Loknath or Civil Lines.
                </li>
              </ul>
            </div>
            <div className="md:w-1/4 w-full pl-4 pr-4">
              <RightPanel />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrayagrajTourPackage;
