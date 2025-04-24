import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RightPanel from "@/pages/components/tourPackage/RightPanel";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const AyodhyaTourPackage = () => {
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
              Ayodhya Tour Package
            </div>
            <h2 className="mb-2">
              Ayodhya Tour Package{" "}
              <span className="text-sm text-gray-400">2 Days / 4 Nights</span>
            </h2>
          </div>
          <div className="md:flex-row flex-col flex">
            <div
              className={`md:w-3/4 w-full pl-4 pr-4 ${whyChooseStyles.flex}`}
            >
              <Image
                src="/images/ayodhya.webp"
                alt="A heritage structure with two lions on the left and right sides of the entrance, respectively."
                width={850}
                height={408}
                className="mb-5"
              />
              <h3 className="mb-2">
                Day 1: Spiritual Landmarks and Ramayana History
              </h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Ram Janmabhoomi Temple</h5>
              <ul>
                <li>
                  ● Begin your day with a visit to the Ram Janmabhoomi Temple,
                  the site believed to be the birthplace of Lord Rama.
                </li>
                <li>
                  ● Witness the ongoing grandeur of the temple construction and
                  offer your prayers.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Hanuman Garhi Temple</h5>
              <ul>
                <li>
                  ● Visit the iconic Hanuman Garhi Temple, a 10th-century temple
                  dedicated to Lord Hanuman.
                </li>
                <li>
                  ● Climb the 76 steps to enjoy the serene vibes and a panoramic
                  view of Ayodhya.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. Kanak Bhawan Temple</h5>
              <ul>
                <li>
                  ● Visit the Kanak Bhawan Temple, a beautiful shrine dedicated
                  to Lord Rama and Goddess Sita believed to have been gifted to
                  Sita by Kaikeyi.
                </li>
                <li>
                  ● Admire its vibrant architecture and peaceful atmosphere.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">4. Treta Ke Thakur</h5>
              <ul>
                <li>
                  ● Explore Treta Ke Thakur, a temple located near the Sarayu
                  River, which houses idols of Rama, Sita, Lakshmana, Hanuman,
                  and Bharat carved from a single black stone.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. GuitarGhat</h5>
              <ul>
                <li>
                  ● Head to Guptar Ghat, where Lord Rama is believed to have
                  entered the Sarayu River to attain Mahasamadhi.
                </li>
                <li>
                  ● Witness the tranquil sunset and participate in the evening
                  aarti at the ghat.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">6. Sarayu River Cruise</h5>
              <ul>
                <li>
                  ● Take a boat ride along the Sarayu River to soak in the
                  spiritual ambience and picturesque views.
                </li>
              </ul>
              <h3 className="mb-2 mt-5">
                Day 2: Exploring Mythology, Temples, and Local Culture
              </h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Nageshwarnath Temple</h5>
              <ul>
                <li>
                  ● Visit the Nageshwarnath Temple, which is dedicated to Lord
                  Shiva and is believed to have been built by Lord Rama’s son,
                  Kush.
                </li>
                <li>
                  ● This temple is one of the oldest in Ayodhya and a must-visit
                  for history lovers.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Mani Parvat</h5>
              <ul>
                <li>
                  ● Climb Mani Parvat, a hill associated with Ramayana
                  mythology, where Lord Hanuman is believed to have rested while
                  carrying the Sanjeevani herb.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. Choti Chawni (Valmiki Ramayan Bhawan)</h5>
              <ul>
                <li>
                  ● Visit Valmiki Ramayan Bhawan, a beautiful temple and
                  cultural centre dedicated to Valmiki’s Ramayana.
                </li>
                <li>
                  ● Admire the intricate carvings depicting scenes from the
                  Ramayana.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">4. Dashrath Bhawan</h5>
              <ul>
                <li>
                  ● Stop by Dashrath Bhawan, the royal palace where King
                  Dashrath, Lord Rama’s father, is said to have lived.
                </li>
                <li>
                  ● The palace showcases traditional Ramayana-themed murals and
                  architecture.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. Ram Ki Paidi</h5>
              <ul>
                <li>
                  ● Spend your evening at Ram Ki Paidi, a series of ghats along
                  the Sarayu River, popular for its scenic beauty and cultural
                  significance.
                </li>
                <li>
                  ● Participate in the grand Ramayana-themed light and sound
                  show (if available) or enjoy the peaceful evening aarti.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">6. Shopping & Local Food</h5>
              <ul>
                <li>
                  ● Visit Ayodhya’s local bazaars for souvenirs such as
                  Ramayana-themed paintings, idols, and religious artefacts.
                </li>
                <li>
                  ● Try local delicacies like kachori-sabzi, jalebi, and thekua,
                  along with regional sweets like pedas.
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
export default AyodhyaTourPackage;
