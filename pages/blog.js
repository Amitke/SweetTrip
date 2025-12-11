import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getFaqData } from "./api/common/faq";
import Faq from "./components/common/faq/faq";
export default function Blog({ blogs }) {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getFaq = useSelector((state) => state.faq);
  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getFaqData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].blog
      ? getSectionHeader.sectionHeader[0].blog
      : getSectionHeader?.error;
  const faqsData = getFaq && getFaq.status ? getFaq?.faq?.blog : getFaq?.error;
  
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
        <title>Best Tour Operator in Varanasi | Affordable City Tours</title>
        <meta
          name="description"
          content="Looking for the best tour operator in Varanasi? Get budget-friendly, hassle-free tours with local insights and 24/7 support. Reserve your spot now!"
        />
      </Head>
      <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
      <section className="pt-10 pb-5">
        <div className="container mx-auto">
          <ExpandableText />
          {blogs.map((blog) => (
            <div className={`flex-col justify-center flex pl-4 pr-4 mb-5`}>
              <h2>
                <Link href={`/blog/${blog.slug}`}>{blog.meta.heading}</Link>
              </h2>
              <p className="mb-2">Posted on {blog.meta.date}</p>
              <p className="mb-2">{blog.meta.para}</p>
              <Link className="error" href={`/blog/${blog.slug}`}>
                <u>Read more</u>
              </Link>
            </div>
          ))}
          <Faq faqsData={faqsData} faqsError={faqsError} />
        </div>
      </section>
    </>
  );
}

function getBlogSlugs() {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  return fs.readdirSync(blogsDirectory);
}
function getBlogBySlug(slug) {
  const blogsDirectory = path.join(process.cwd(), "blogs");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

export function getStaticProps() {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug))
    .filter((blog) => blog.meta.date)
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
  return { props: { blogs } };
}

function ExpandableText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-sm sm:text-base space-y-6 mb-12 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* --- Always Visible Content --- */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl   mb-6">
        Your Trusted Travel Agency in Varanasi
      </h2>

      <p className="text-justify">
        For a Seamless, Spiritual & Memorable Journey, Varanasi is not just a
        destination; it is an emotion, a timeless city where faith, culture, and
        heritage blend into an unforgettable experience. Whether you come here
        to witness the spiritual charm of the Ganga Aarti, take a serene morning
        boat ride, or explore ancient temples and historic ghats, one thing
        remains constant: choosing the right travel partner matters. That’s
        where Sweet Trip, a trusted Travel Agency in Varanasi, steps in to make
        every moment of your journey meaningful, comfortable, and well-planned.
      </p>

      <p className="text-justify">
        Founded in 2021 with a simple purpose of making rental cabs easily
        accessible, Sweet Trip has grown into a full-service travel provider
        offering car rentals, hotel bookings, curated tours, Varanasi
        sightseeing tours, and spiritual journeys to Ayodhya, Prayagraj, and
        Bodhgaya. Today, Sweet Trip is recognized among the most dependable
        Varanasi tour operators and is loved by travellers for its transparent
        pricing, local expertise, and personalized trip planning.
      </p>

      {/* --- Expandable Content --- */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          expanded ? "max-h-[50000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-6 mt-6">
          {/* Section: A Growing Journey */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-2">
              A Growing Journey Rooted in Trust & Quality
            </h2>
            <p className="text-justify">
              Sweet Trip began as a cab rental service, helping travellers find
              comfortable and reliable cars in Varanasi. The exceptional service
              quality and genuine care for travellers helped the company build
              trust within a short period. Over time, Sweet Trip expanded by
              partnering with reputable hotels, bus rentals, and boat operators,
              eventually becoming one of the best tour agencies in Varanasi for
              spiritual and cultural tours.
            </p>
            <p className="text-justify">
              From coordinating boat rides to curating detailed multi-city
              spiritual tours, Sweet Trip ensures that every traveller
              experiences the true essence of India’s heritage. The team
              believes that small, thoughtful steps lead to big transformations,
              and that approach continues to define their service philosophy
              even today.
            </p>
          </section>

          {/* Section: Why Sweet Trip */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-2">
              Why Sweet Trip Is the Preferred Travel Partner
            </h2>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold ">
                Reliable & Comfortable Cab Services
              </h2>
              <p className="text-justify">
                Sweet Trip offers well-maintained vehicles with experienced and
                polite drivers. Whether you need an airport pickup, a local
                sightseeing car, or an outstation cab, you get safe and seamless
                travel every time.
              </p>

              <h2 className="text-lg font-semibold ">
                Personalized Tour Packages
              </h2>
              <p className="text-justify">
                Sweet Trip designs tailor-made itineraries based on your
                interests, spiritual tours, cultural tours, food explorations,
                photography tours, and more.
              </p>

              <h2 className="text-lg font-semibold ">Transparent Pricing</h2>
              <p className="text-justify">
                There are no hidden charges, only fair, competitive pricing that
                ensures great value.
              </p>

              <h2 className="text-lg font-semibold ">Local Expertise</h2>
              <p className="text-justify">
                Sweet Trip’s team helps you explore hidden gems, avoid crowds,
                and experience the city like a local.
              </p>

              <h2 className="text-lg font-semibold ">
                One-Stop Travel Partner
              </h2>
              <p className="text-justify">
                From cab bookings and hotel stays to morning boat rides and
                Varanasi tourism packages, Sweet Trip offers everything under
                one roof.
              </p>
            </div>
          </section>

          {/* Section: Tailor-Made Experiences */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-2">
              Tailor-Made Varanasi Experiences with Sweet Trip
            </h2>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold ">Car Rental in Varanasi</h2>
              <p className="text-justify">
                Affordable, comfortable, and reliable cab services form the
                backbone of Sweet Trip. Explore the city or travel nearby
                stress-free.
              </p>

              <h2 className="text-lg font-semibold ">
                Morning Boat Ride in Varanasi
              </h2>
              <p className="text-justify">
                Start your day watching the golden sun rise over the Ganga.
                Sweet Trip arranges pre-booked boat rides hassle-free.
              </p>

              <h2 className="text-lg font-semibold ">
                Best Boat Ride in Varanasi
              </h2>
              <p className="text-justify">
                Experience the grandeur of the evening Ganga Aarti from the
                water. Safe boats, trained rowers, and perfect timing ensured.
              </p>

              <h2 className="text-lg font-semibold ">
                Best Places to Stay in Varanasi
              </h2>
              <p className="text-justify">
                Sweet Trip recommends hotels based on budget, preferred
                location, and comfort.
              </p>
            </div>
          </section>

          {/* Section: Beyond Varanasi */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-2">
              Beyond Varanasi – Exploring India’s Holiest Cities
            </h2>
            <div className="space-y-3">
              <h2 className="text-lg font-semibold ">
                Ayodhya – The Birthplace of Lord Rama
              </h2>
              <p className="text-justify">
                Visit Ram Janmabhoomi, Hanuman Garhi, Saryu River, and other
                spiritual sites with organized transfers, clean accommodations,
                and expert planning.
              </p>

              <h2 className="text-lg font-semibold ">
                Prayagraj – The Confluence of Faith
              </h2>
              <p className="text-justify">
                A peaceful journey to Triveni Sangam, Kumbh Mela grounds, and
                centuries-old temples becomes easier with Sweet Trip’s
                well-planned travel services.
              </p>

              <h2 className="text-lg font-semibold ">
                Bodhgaya – A Journey into Enlightenment
              </h2>
              <p className="text-justify">
                Explore the Mahabodhi Temple, Bodhi Tree, and other Buddhist
                heritage sites comfortably through Sweet Trip’s
                Varanasi–Bodhgaya tour package.
              </p>
            </div>
          </section>

          {/* Section: Booking & Mission */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-2">
              Book Your Ride, Stay & Tour in Just a Few Clicks
            </h2>
            <p className="text-justify">
              Sweet Trip makes travel booking smooth and simple. Whether you
              need a cab, a hotel room, or a complete travel itinerary, you can
              book everything easily through one reliable source. With a mission
              rooted in excellence, Sweet Trip continues to evolve and add more
              services to help travellers explore spiritual India comfortably.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-2">
              Our Mission & Vision – Creating Travel Experiences That Matter
            </h2>
            <p className="text-justify">
              <strong>Vision:</strong> To become the most preferred travel
              service provider offering reliable, memorable, and
              customer-centric experiences.
            </p>
            <p className="text-justify">
              <strong>Mission:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Deliver seamless, high-quality travel services</li>
              <li>Ensure safe, comfortable, and efficient transportation</li>
              <li>Offer personalized, well-planned tour packages</li>
              <li>
                Expand to more cities while maintaining exceptional service
                quality
              </li>
            </ul>
            <p className="text-justify mt-2">
              Sweet Trip doesn’t just take you to places, it brings your travel
              dreams to life with meaningful experiences, local insights, and
              careful planning.
            </p>
          </section>
        </div>
      </div>

      {/* --- Expand Button --- */}
      <div className="text-center mt-12">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {expanded ? "Read Less" : "Read More"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ml-2 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}


