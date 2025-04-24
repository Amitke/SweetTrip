import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RightPanel from "@/pages/components/tourPackage/RightPanel";
import whyChooseStyles from "@/pages/components/about/whyChoose/whyChoose.module.scss";

const BodhgayaTourPackage = () => {
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
              Bodhgaya Tour Package
            </div>
            <h2 className="mb-2">
              Bodhgaya Tour Package{" "}
              <span className="text-sm text-gray-400">2 Days / 4 Nights</span>
            </h2>
          </div>
          <div className="md:flex-row flex-col flex">
            <div
              className={`md:w-3/4 w-full pl-4 pr-4 ${whyChooseStyles.flex}`}
            >
              <Image
                src="/images/bodhgaya.webp"
                alt="A statue of Lord Buddha in sitting position is shown."
                width={850}
                height={408}
                className="mb-5"
              />
              <h3 className="mb-2">
                Day 1: Exploring the Heart of Spirituality
              </h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Mahabodhi Temple</h5>
              <ul>
                <li>
                  ● Begin your day with a visit to the Mahabodhi Temple, a
                  UNESCO World Heritage Site.
                </li>
                <li>
                  ● Witness the Bodhi Tree, the sacred tree under which Buddha
                  attained enlightenment.
                </li>
                <li>
                  ● Spend time meditating and soaking in the serene atmosphere.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Animesh Lochan Chaitya</h5>
              <ul>
                <li>
                  ● Walk around the temple complex to the Animesh Lochan
                  Chaitya, where Buddha meditated after enlightenment.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. Great Buddha Statue</h5>
              <ul>
                <li>
                  ● Visit the towering Great Buddha Statue, a 25-meter tall
                  statue in meditation posture, surrounded by smaller statues of
                  Buddha's disciples.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">4. Vishnupad Temple</h5>
              <ul>
                <li>
                  ● Visit this ancient temple in Gaya, which is dedicated to
                  Lord Vishnu and houses a sacred footprint believed to be of
                  Vishnu himself.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. Thai Monastery</h5>
              <ul>
                <li>
                  ● Explore the Thai Monastery, known for its unique
                  architecture and peaceful surroundings.
                </li>
                <li>
                  ● Enjoy an evening stroll around the monastery gardens and
                  observe Buddhist monks in prayer.
                </li>
              </ul>
              <h5 className="mb-1 mt-3">6. Meditation and Evening Aarti</h5>
              <ul>
                <li>
                  ● Return to the Mahabodhi Temple for evening meditation and
                  the mesmerising Aarti (prayer ceremony) under the Bodhi Tree.
                </li>
              </ul>
              <h3 className="mb-2 mt-5">
                Day 2: Explore Cultural and Spiritual Diversity
              </h3>
              <h4 className="mb-2">Morning</h4>
              <h5 className="mb-1">1. Dungeshwari Caves (Sujata Caves)</h5>
              <ul>
                <li>
                  ● Visit the Dungeshwari Caves, where Buddha practised severe
                  austerities before enlightenment.
                </li>
                <li>
                  ● Experience the serene environment and learn about the
                  challenges Buddha overcame during his quest.
                </li>
              </ul>
              <h5 className="mt-3 mb-1">2. Sujata Stupa</h5>
              <ul>
                <li>
                  ● Stop by the Sujata Stupa, built in honour of Sujata, the
                  woman who offered Buddha kheer (rice pudding) and helped him
                  break his fast.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Afternoon</h4>
              <h5 className="mb-1">3. Tibetan Monastery</h5>
              <ul>
                <li>
                  ● Visit the Tibetan Monastery, showcasing Tibetan-style
                  architecture and vibrant prayer flags.
                </li>
                <li>● Don’t miss the giant prayer wheel and Tibetan murals.</li>
              </ul>
              <h5 className="mb-1 mt-3">
                4. Japanese Temple and Meditation Center
              </h5>
              <ul>
                <li>
                  ● Head to the Japanese Temple, also known as Indosan Nipponji,
                  and admire its simplicity and Zen-like architecture.
                </li>
                <li>
                  ● Spend time meditating at the nearby Japanese Meditation
                  Center.
                </li>
              </ul>
              <h4 className="mb-2 mt-3">Evening</h4>
              <h5 className="mb-1">5. Royal Bhutan Monastery</h5>
              <ul>
                <li>
                  ● Visit the Royal Bhutan Monastery, featuring intricate
                  carvings and a peaceful ambience.
                </li>
                <li>● End your day reflecting in its serene prayer halls.</li>
              </ul>
              <h5 className="mb-1 mt-3">6. Shopping & Local Food</h5>
              <ul>
                <li>
                  ● Explore local markets for Buddhist souvenirs, prayer beads,
                  and handmade crafts.
                </li>
                <li>
                  ● Try local delicacies like litti chokha, sattu paratha, and
                  Indian sweets such as balushahi.
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
export default BodhgayaTourPackage;
