import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import RightPanel from "@/pages/components/tourPackage/RightPanel";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const VaranasiTourPackage = () => {
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
              Varanasi Tour Package
            </div>
            <h2 className="mb-2">
              Varanasi Tour Package{" "}
              <span className="text-sm text-gray-400">2 Days / 4 Nights</span>
            </h2>
          </div>
          <div className="md:flex-row flex-col flex">
            <div className={`md:w-3/4 w-full pl-4 pr-4 ${whyChooseStyles.flex}`}>
              <Image
                src="/images/varanasi.webp"
                alt="The front side of the old Varanasi junction"
                width={850}
                height={408}
                className="mb-5"
              />
              <h3 className="mb-2">Day 1: Spiritual and Cultural Immersion</h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Subah-e-Banaras at Assi Ghat</h5>
              <ul>
                <li>
                  ● Start your day early with Subah-e-Banaras, a serene morning
                  ritual at Assi Ghat that includes yoga, classical music, and
                  Vedic chanting.
                </li>
                <li>
                  ● Witness the sunrise over the Ganga River, creating a magical
                  atmosphere.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Boat Ride on the Ganga River</h5>
              <ul>
                <li>
                  ● Take a boat ride from Assi Ghat to Dashashwamedh Ghat.
                </li>
                <li>
                  ● View the iconic ghats and observe daily life along the
                  riverbanks.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">3. Kashi Vishwanath Temple</h5>
              <ul>
                <li>
                  ● Visit the sacred Kashi Vishwanath Temple, dedicated to Lord
                  Shiva, one of the 12 Jyotirlingas.
                </li>
                <li>
                  ● Explore the new Kashi Vishwanath Corridor, which beautifully
                  connects the temple to the Ganga River.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">4. Banaras Hindu University (BHU)</h5>
              <ul>
                <li>
                  ● Visit the sprawling BHU campus and the serene New Vishwanath
                  Temple, located inside the campus.
                </li>
                <li>
                  ● Enjoy the peaceful ambience and learn about the university’s
                  historical significance.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">
                5. Durga Mandir and Tulsi Manas Mandir
              </h5>
              <ul>
                <li>
                  ● Visit Durga Mandir, a vibrant red temple dedicated to
                  Goddess Durga.
                </li>
                <li>
                  ● Explore Tulsi Manas Mandir, where the Ramcharitmanas were
                  written, showcasing engraved verses from the text.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">6. Ganga Aarti at Dashashwamedh Ghat</h5>
              <ul>
                <li>
                  ● Witness the grand Ganga Aarti, a mesmerising ritual
                  performed every evening at Dashashwamedh Ghat.
                </li>
                <li>
                  ● Arrive early to secure a good viewing spot, or watch from a
                  boat for a unique experience.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">7. Explore Local Markets</h5>
              <ul>
                <li>
                  ● Stroll through Vishwanath Gali and Thatheri Bazaar for
                  Banarasi silk sarees, wooden toys, and handicrafts.
                </li>
                <li>
                  ● Don’t forget to try the famous Banarasi paan and street food
                  like kachori-sabzi and jalebi.
                </li>
              </ul>
              <h3 className="mb-2 mt-5">
                Day 2: Exploring Ancient History and Local Life
              </h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Sarnath</h5>
              <ul>
                <li>
                  ● Take a short drive to Sarnath, the site where Buddha gave
                  his first sermon.
                </li>
                <li>
                  ● Visit the Dhamek Stupa, Chaukhandi Stupa, and the Sarnath
                  Museum, which houses an exquisite collection of Buddhist
                  artefacts, including the famous Lion Capital of Ashoka.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Mulagandha Kuti Vihar</h5>
              <ul>
                <li>
                  ● Explore this modern Buddhist temple in Sarnath, adorned with
                  stunning frescoes and peaceful surroundings.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. Manikarnika Ghat</h5>
              <ul>
                <li>
                  ● Return to Varanasi and visit Manikarnika Ghat, one of the
                  holiest cremation sites for Hindus.
                </li>
                <li>
                  ● Observe the rituals with respect, gaining insight into
                  Varanasi's spiritual essence.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">4. Ramnagar Fort</h5>
              <ul>
                <li>
                  ● Cross the Ganga to visit Ramnagar Fort, the 17th-century
                  residence of the Maharaja of Varanasi.
                </li>
                <li>
                  ● Explore the museum showcasing vintage cars, royal artefacts,
                  and ancient manuscripts.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. Bharat Mata Temple</h5>
              <ul>
                <li>
                  ● Visit the unique Bharat Mata Temple, which features a
                  detailed relief map of India carved in marble instead of
                  idols.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">6. Sunset at Assi Ghat</h5>
              <ul>
                <li>
                  ● End your day with a peaceful evening at Assi Ghat, enjoying
                  the sunset and a quiet moment by the Ganga.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">7. Local Food Delights</h5>
              <ul>
                <li>
                  ● Relish authentic Banarasi dishes like baati chokha, malaiyo
                  (winter delicacy), and tamatar chaat at local eateries.
                </li>
              </ul>
            </div>
            <div className="md:w-1/4 w-full pl-4 pr-4">
              <RightPanel/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default VaranasiTourPackage;
