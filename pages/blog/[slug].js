import React, { useEffect } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { getFaqData } from "../api/common/faq";
import Faq from "../components/common/faq/faq";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";

export default function BlogPage({ blog }) {
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

  const faqsData =
    getFaq && getFaq.status
      ? getFaq?.faq?.tourOperatorInVaranasi
      : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
      <Head>
        <title>{blog.meta.title}</title>
        <meta name="description" content={blog.meta.description} />
        <meta name="keywords" content={blog.meta.keywords} />
         {blog?.meta?.url === "top-8-best-things-to-do-in-prayagraj" && (
            <>
              {/* Canonical URL */}
              <link
                rel="canonical"
                href="https://sweettrip.in/blog/top-8-best-things-to-do-in-prayagraj"
              />

              {/* Open Graph (OG) Tags */}
              <meta
                property="og:title"
                content="Top 8 Best Things to Do in Prayagraj"
              />
              <meta
                property="og:description"
                content="Discover the top 8 best things to do in Prayagraj. 1. Allahabad Fort, 2. Anand Bhavan, 3. Kumbh Mela, 4. Triveni Sangam. Plan your perfect trip with our must-visit guide."
              />
              <meta property="og:type" content="article" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/top-8-best-things-to-do-in-prayagraj"
              />
              <meta
                property="og:image"
                content="https://amythyogshala.com/public/frontend/assets/images/logo/logo-2.png"
              />

              {/* Twitter Card Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Top 8 Best Things to Do in Prayagraj"
              />
              <meta
                name="twitter:description"
                content="Discover the top 8 best things to do in Prayagraj. 1. Allahabad Fort, 2. Anand Bhavan, 3. Kumbh Mela, 4. Triveni Sangam. Plan your perfect trip with our must-visit guide."
              />
              <meta
                name="twitter:image"
                content="https://amythyogshala.com/public/frontend/assets/images/logo/logo-2.png"
              />

               < script
               type = "application/ld+json"
               dangerouslySetInnerHTML = {
                 {
                   __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@type": "BlogPosting",
                     mainEntityOfPage: {
                       "@type": "WebPage",
                       "@id": "https://sweettrip.in/blog/top-8-best-things-to-do-in-prayagraj",
                     },
                     headline: "Top 8 Best Things to Do in Prayagraj",
                     description: "Discover the top 8 best things to do in Prayagraj. 1. Allahabad Fort, 2. Anand Bhavan, 3. Kumbh Mela, 4. Triveni Sangam. Plan your perfect trip with our must-visit guide.",
                     image: "https://sweettrip.in/images/logo.svg",
                     author: {
                       "@type": "Organization",
                       name: "Sweet Trip",
                       url: "https://sweettrip.in/",
                     },
                     publisher: {
                       "@type": "Organization",
                       name: "Sweet Trip",
                       logo: {
                         "@type": "ImageObject",
                         url: "https://sweettrip.in/images/logo.svg",
                       },
                     },
                     datePublished: "2025-09-15",
                   }),
                 }
               }
               />
            </>
          )}
        {blog?.meta?.url === "complete-travel-guide-for-first-time-visitors" && (
            <>
              {/* Canonical URL */}
              <link
                rel="canonical"
                href="https://sweettrip.in/blog/complete-travel-guide-for-first-time-visitors"
              />

              {/* Open Graph (OG) Tags */}
              <meta
                property="og:title"
                content="Prayagraj Triveni Sangam – Complete Travel Guide & Tips"
              />
              <meta
                property="og:description"
                content="Discover Prayagraj Triveni Sangam, the sacred confluence of three rivers. Explore history, rituals, attractions, and travel tips for an unforgettable visit."
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/complete-travel-guide-for-first-time-visitors"
              />
              <meta
                property="og:image"
                content="https://amythyogshala.com/public/frontend/assets/images/logo/logo-2.png"
              />

              {/* Twitter Card Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Prayagraj Triveni Sangam – Complete Travel Guide & Tips"
              />
              <meta
                name="twitter:description"
                content="Discover Prayagraj Triveni Sangam, the sacred confluence of three rivers. Explore history, rituals, attractions, and travel tips for an unforgettable visit."
              />
              <meta
                name="twitter:image"
                content="https://amythyogshala.com/public/frontend/assets/images/logo/logo-2.png"
              />

              {/* JSON-LD Structured Data */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    mainEntityOfPage: {
                      "@type": "WebPage",
                      "@id":
                        "https://sweettrip.in/blog/complete-travel-guide-for-first-time-visitors",
                    },
                    headline:
                      "Prayagraj Triveni Sangam: A Complete Travel Guide for First-Time Visitors",
                    description:
                      "Discover Prayagraj Triveni Sangam, the sacred confluence of three rivers. Explore history, rituals, attractions, and travel tips for an unforgettable visit.",
                    image: "https://sweettrip.in/images/logo.svg",
                    author: {
                      "@type": "Organization",
                      name: "Sweet Trip",
                      url: "https://sweettrip.in/",
                    },
                    publisher: {
                      "@type": "Organization",
                      name: "Sweet Trip",
                      logo: {
                        "@type": "ImageObject",
                        url: "https://sweettrip.in/images/logo.svg",
                      },
                    },
                    datePublished: "2025-09-16",
                  }),
                }}
              />
            </>
        )}


        {blog?.meta?.url === "cab-service-in-varanasi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/cab-service-in-varanasi",
                },
                headline: "The Ultimate Cab Service in Varanasi",
                image: "https://sweettrip.in/images/logo.svg",
                author: {
                  "@type": "Organization",
                  name: "sweettrip",
                  url: "https://sweettrip.in/",
                },
                publisher: {
                  "@type": "Organization",
                  name: "sweettrip",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sweettrip.in/images/logo.svg",
                  },
                },
                datePublished: "2025-07-07",
              }),
            }}
          />
        )}
        {blog?.meta?.url === "tour-operator-in-varanasi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/tour-operator-in-varanasi",
                },
                headline: "Best Tour Operator in Varanasi – Sweet Trip",
                description:
                  "Looking for the best tour operator in Varanasi? Get budget-friendly, hassle-free tours with local insights and 24/7 support. Reserve your spot now!",
                image: "https://sweettrip.in/images/logo.svg",
                author: {
                  "@type": "Organization",
                  name: "sweettrip",
                },
                publisher: {
                  "@type": "Organization",
                  name: "sweettrip",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sweettrip.in/images/logo.svg",
                  },
                },
                datePublished: "2025-07-01",
              }),
            }}
          />
        )}

        {blog?.meta?.url === "places-to-visit-in-varanasi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id":
                    "https://sweettrip.in/blog/places-to-visit-in-varanasi",
                },
                headline:
                  "Top 10 Places to Visit in Varanasi for First-Time Travellers",
                description:
                  "Discover the best places to visit in Varanasi, from sacred ghats and temples to hidden gems. Explore spiritual, cultural, and historic sites with our guide.",
                image: "https://sweettrip.in/images/logo.svg",
                author: {
                  "@type": "Organization",
                  name: "sweettrip",
                },
                publisher: {
                  "@type": "Organization",
                  name: "sweettrip",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sweettrip.in/images/logo.svg",
                  },
                },
                datePublished: "2025-07-28",
              }),
            }}
          />
        )}
        {blog?.meta?.url === "car-rental-in-varanasi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/car-rental-in-varanasi",
                },
                headline:
                  "How to Choose the Right Car Rental in Varanasi: Tips & Best Options",
                description:
                  "Affordable car rental in Varanasi by Sweettrip. Book a taxi or rent a cab in Varanasi for local sightseeing, airport transfers, or outstation travel.",
                image: "https://sweettrip.in/images/logo.svg",
                author: {
                  "@type": "Organization",
                  name: "sweettrip",
                },
                publisher: {
                  "@type": "Organization",
                  name: "sweettrip",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sweettrip.in/images/logo.svg",
                  },
                },
                datePublished: "2025-07-30",
              }),
            }}
          />
        )}
        {blog?.meta?.url === "places-to-visit-in-ayodhya" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/places-to-visit-in-ayodhya",
                },
                headline: "Top 10 Tourist Places to Visit in Ayodhya",
                description:
                  "Discover the top places to visit in Ayodhya and explore the best things to do in this sacred city. From Ram Janmabhoomi to serene ghats, plan your perfect Ayodhya trip today!",
                image: "https://sweettrip.in/images/logo.svg",
                author: {
                  "@type": "Organization",
                  name: "Sweet Trip",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Sweet Trip",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://sweettrip.in/images/logo.svg",
                  },
                },
                datePublished: "2025-08-05",
                dateModified: "2025-08-05",
              }),
            }}
          />
        )}
        {blog.meta.canonicalUrl &&
          blog.meta.url === "cab-service-in-varanasi" && (
            <link
              rel="canonical"
              href={`https://sweettrip.in/blog/${blog.meta.url}`}
            />
          )}
        {blog.meta.openGraphTags &&
          blog.meta.url === "cab-service-in-varanasi" && (
            <>
              <meta property="og:title" content={blog.meta.title} />
              <meta property="og:description" content={blog.meta.description} />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content={`https://sweettrip.in/blog/${blog.meta.url}`}
              />
              <meta
                property="og:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={blog.meta.title} />
              <meta
                name="twitter:description"
                content={blog.meta.description}
              />
              <meta
                name="twitter:image"
                content="https://sweettrip.in/images/logo.svg"
              />
            </>
          )}
        {blog.meta.script && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: blog.meta.title,
                url: `https://sweettrip.in/${blog.meta.parentUrl}`,
                description: blog.meta.description,
              }),
            }}
          />
        )}
        {blog.meta.canonicalUrl &&
          blog.meta.url === "one-way-taxi-service-in-prayagraj" && (
            <link
              rel="canonical"
              href={`https://sweettrip.in/blog/${blog.meta.url}`}
            />
          )}
        {blog.meta.openGraphTags &&
          blog.meta.url === "one-way-taxi-service-in-prayagraj" && (
            <>
              <meta
                property="og:title"
                content="One-Way Taxi Service in Prayagraj | Affordable & Reliable Cabs"
              />
              <meta
                property="og:description"
                content="Book a one-way taxi in Prayagraj for a safe, comfortable, and affordable ride. Enjoy reliable cab service with professional drivers and hassle-free travel across major routes."
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/one-way-taxi-service-in-prayagraj"
              />
              <meta
                property="og:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="One-Way Taxi Service in Prayagraj | Affordable & Reliable Cabs"
              />
              <meta
                name="twitter:description"
                content="Book a one-way taxi in Prayagraj for a safe, comfortable, and affordable ride. Enjoy reliable cab service with professional drivers and hassle-free travel across major routes."
              />
              <meta
                name="twitter:image"
                content="https://sweettrip.in/images/logo.svg"
              />{" "}
            </>
          )}
        {blog.meta.script &&
          blog.meta.url === "one-way-taxi-service-in-prayagraj" && (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id":
                      "https://sweettrip.in/blog/one-way-taxi-service-in-prayagraj",
                  },
                  headline:
                    "Reliable & Affordable one-way taxi service in Prayagraj",
                  description:
                    "Book a one-way taxi in Prayagraj for a safe, comfortable, and affordable ride. Enjoy reliable cab service with professional drivers and hassle-free travel across major routes.",
                  image: "https://sweettrip.in/images/logo.svg",
                  author: {
                    "@type": "Organization",
                    name: "Sweet Trip",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Sweet Trip",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://sweettrip.in/images/logo.svg",
                    },
                  },
                  datePublished: "2025-08-12",
                }),
              }}
            />
          )}
        {blog.meta.script && blog.meta.url === "taxi-service-in-ayodhya" && (
          <>
            <link
              rel="canonical"
              href="https://sweettrip.in/blog/taxi-service-in-ayodhya"
            />
            <meta
              property="og:title"
              content="Taxi Service in Ayodhya | Book One Way & Local Cab Services"
            />
            <meta
              property="og:description"
              content="Hire reliable taxi service in Ayodhya for local sightseeing, one way cabs, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://sweettrip.in/blog/taxi-service-in-ayodhya"
            />
            <meta
              property="og:image"
              content="https://sweettrip.in/images/logo.svg"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Taxi Service in Ayodhya | Book One Way & Local Cab Services"
            />
            <meta
              name="twitter:description"
              content="Hire reliable taxi service in Ayodhya for local sightseeing, one way cabs, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7."
            />
            <meta
              name="twitter:image"
              content="https://sweettrip.in/images/logo.svg"
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": "https://sweettrip.in/blog/taxi-service-in-ayodhya",
                  },
                  headline:
                    "Taxi Service in Ayodhya: Your Comfortable Travel Partner",
                  description:
                    "Hire reliable taxi service in Ayodhya for local sightseeing, one way cabs, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7.",
                  image: "https://sweettrip.in/images/logo.svg",
                  author: {
                    "@type": "Organization",
                    name: "Sweet Trip",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Sweet Trip",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://sweettrip.in/images/logo.svg",
                    },
                  },
                  datePublished: "2025-08-23",
                }),
              }}
            />
          </>
        )}
        {blog.meta.script &&
          blog.meta.url === "one-way-cab-service-in-prayagraj" && (
            <>
              <meta
                property="og:title"
                content="One Way Cab Service in Prayagraj | Affordable Taxi Service"
              />
              <meta
                property="og:description"
                content="Hire reliable one way cab service in Prayagraj for local travel, airport transfers, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7."
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/one-way-cab-service-in-prayagraj"
              />
              <meta
                property="og:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="One Way Cab Service in Prayagraj | Affordable Taxi Service"
              />
              <meta
                name="twitter:description"
                content="Hire reliable one way cab service in Prayagraj for local travel, airport transfers, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7."
              />
              <meta
                name="twitter:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    mainEntityOfPage: {
                      "@type": "WebPage",
                      "@id":
                        "https://sweettrip.in/blog/one-way-cab-service-in-prayagraj",
                    },
                    headline:
                      "Convenient Travel with Sweet Trip: One-Way Cab Service in Prayagraj",
                    description:
                      "Hire reliable one way cab service in Prayagraj for local travel, airport transfers, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7.",
                    image: "https://sweettrip.in/images/logo.svg",
                    author: {
                      "@type": "Organization",
                      name: "Sweet Trip",
                    },
                    publisher: {
                      "@type": "Organization",
                      name: "Sweet Trip",
                      logo: {
                        "@type": "ImageObject",
                        url: "https://sweettrip.in/images/logo.svg",
                      },
                    },
                    datePublished: "2025-08-27",
                  }),
                }}
              />
            </>
          )}
        {blog.meta.script && blog.meta.url === "taxi-services-in-varanasi" && (
          <>
            <link
              rel="canonical"
              href="https://sweettrip.in/blog/taxi-services-in-varanasi"
            />
            <meta
              property="og:title"
              content="Taxi Services in Varanasi | Book One Way & Local Cab Services"
            />
            <meta
              property="og:description"
              content="Hire reliable taxi services in Varanasi for local sightseeing, one way cabs, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7."
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://sweettrip.in/blog/taxi-services-in-varanasi"
            />
            <meta
              property="og:image"
              content="https://sweettrip.in/images/logo.svg"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="Taxi Services in Varanasi | Book One Way & Local Cab Services"
            />
            <meta
              name="twitter:description"
              content="Hire reliable taxi services in Varanasi for local sightseeing, one way cabs, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7."
            />
            <meta
              name="twitter:image"
              content="https://sweettrip.in/images/logo.svg"
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id":
                      "https://sweettrip.in/blog/taxi-services-in-varanasi",
                  },
                  headline:
                    "Reliable Taxi Services in Varanasi for Comfortable Travel",
                  description:
                    "Hire reliable taxi services in Varanasi for local sightseeing, one way cabs, and outstation trips. Affordable fares, safe rides, and professional drivers available 24/7.",
                  image: "https://sweettrip.in/images/logo.svg",
                  author: {
                    "@type": "Organization",
                    name: "Sweet Trip",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Sweet Trip",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://sweettrip.in/images/logo.svg",
                    },
                  },
                  datePublished: "2025-08-28",
                }),
              }}
            />
          </>
        )}
        {blog.meta.script &&
          blog.meta.url === "varanasi-to-ayodhya-taxi-service" && (
            <>
              <link rel="https://sweettrip.in/blog/varanasi-to-ayodhya-taxi-service" />
              <meta
                property="og:title"
                content="Varanasi to Ayodhya Cab Service | Lowest Fare
            Guarantee"
              />
              <meta
                property="og:description"
                content="Enjoy a smooth ride with our Varanasi to Ayodhya
            cab service. Clean cars, professional drivers, and on-time pickups. Book online today!"
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/varanasi-to-ayodhya-taxi-service"
              />
              <meta
                property="og:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Varanasi to Ayodhya Cab Service | Lowest Fare
            Guarantee"
              />
              <meta
                name="twitter:description"
                content="Enjoy a smooth ride with our Varanasi to Ayodhya
            cab service. Clean cars, professional drivers, and on-time pickups. Book online today!"
              />
              <meta
                name="twitter:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    mainEntityOfPage: {
                      "@type": "WebPage",
                      "@id":
                        "https://sweettrip.in/blog/spiritual-tour-covering-varanasi-ayodhya-and-prayagraj",
                    },
                    headline:
                      "How to Plan a 7-Day Spiritual Tour Covering Varanasi, Ayodhya,and Prayagraj",
                    description:
                      "Explore Varanasi, Ayodhya & more on a 7 day spiritual tour in Uttar Pradesh. Perfect for seekers of peace, devotion & cultural heritage.",
                    image: "https://sweettrip.in/images/logo.svg",
                    author: {
                      "@type": "Organization",
                      name: "",
                    },
                    publisher: {
                      "@type": "Organization",
                      name: "Sweet Trip",
                      logo: {
                        "@type": "ImageObject",
                        url: "https://sweettrip.in/images/logo.svg",
                      },
                    },
                    datePublished: "2025-09-02",
                  }),
                }}
              />
            </>
          )}
         {blog.meta.script &&
          blog.meta.url ===
            "spiritual-tour-covering-varanasi-ayodhya-and-prayagraj" && (
            <>
              <link rel="https://sweettrip.in/blog/spiritual-tour-covering-varanasi-ayodhya-and-prayagraj" />
              <meta
                property="og:title"
                content="Uttar Pradesh 7 Day Spiritual Tour"
              />
              <meta
                property="og:description"
                content="Explore Varanasi, Ayodhya & more on a 7 day
            spiritual tour in Uttar Pradesh. Perfect for seekers of peace, devotion & cultural heritage."
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/spiritual-tour-covering-varanasi-ayodhya-and-prayagraj"
              />
              <meta
                property="og:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Uttar Pradesh 7 Day Spiritual Tour"
              />
              <meta
                name="twitter:description"
                content="Explore Varanasi, Ayodhya & more on a 7 day
            spiritual tour in Uttar Pradesh. Perfect for seekers of peace, devotion & cultural heritage."
              />
              <meta
                name="twitter:image"
                content="https://sweettrip.in/images/logo.svg"
              />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id":
                    "https://sweettrip.in/blog/spiritual-tour-covering-varanasi-ayodhya-and-prayagraj"
                    },
                    "headline": "How to Plan a 7-Day Spiritual Tour Covering Varanasi, Ayodhya,and Prayagraj",
                    "description": "Explore Varanasi, Ayodhya & more on a 7 day spiritual tour in Uttar Pradesh. Perfect for seekers of peace, devotion & cultural heritage.",
                    "image": "https://sweettrip.in/images/logo.svg",
                    "author": {
                    "@type": "Organization",
                    "name": ""
                    },
                    "publisher": {
                    "@type": "Organization",
                    "name": "Sweet Trip",
                    "logo": {
                    "@type": "ImageObject",
                    "url": "https://sweettrip.in/images/logo.svg"
                    }
                    },
                    "datePublished": "2025-09-02"
                  }),
                }}
              />
            </>
          )}

         {blog.meta.url ==="top-8-places-to-visit-in-chitrakoot" && (
          <>
 
              {/* Meta Description */}
              <meta name="description" content="Find the best tourist destinations in Chitrakoot. From natural beauty to sacred shrines, plan your journey with our expert travel tips." />

              {/* Canonical URL */}
              <link rel="canonical" href="https://sweettrip.in/blog/top-8-places-to-visit-in-chitrakoot" />

              {/* Open Graph (OG) Tags */}
              <meta property="og:title" content="Explore Top Tourist Places to Visit in Chitrakoot"/>
              <meta property="og:description" content="Find the best tourist destinations in Chitrakoot. From natural beauty to sacred shrines, plan your journey with our expert travel tips." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://sweettrip.in/blog/top-8-places-to-visit-in-chitrakoot" />
              <meta property="og:image" content="https://sweettrip.in/images/logo.svg" />

              {/* Twitter Card Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Explore Top Tourist Places to Visit in Chitrakoot"/>
              <meta name="twitter:description" content="Find the best tourist destinations in Chitrakoot. From natural beauty to sacred shrines, plan your journey with our expert travel tips." />
              <meta name="twitter:image" content="https://sweettrip.in/images/logo.svg" />

              {/* Optional Keywords Meta Tag */}
              <meta name="keywords" content="Places to Visit in Chitrakoot, Chitrakoot tourist destinations, Chitrakoot travel guide" />

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Places to Visit in Chitrakoot",
                  "url": "https://sweettrip.in/blog/top-8-places-to-visit-in-chitrakoot",
                  "description": "Find the best tourist destinations in Chitrakoot. From natural beauty to sacred shrines, plan your journey with our expert travel tips."
                }) }}
              />
          </>
         )} 
         
          {
            blog?.meta?.url === "best-time-Tips-and-travel-hacks-for-visiting-varanasi-to-gaya" && (
              <>
                {/* Canonical URL */}
                <link
                  rel="canonical"
                  href="https://sweettrip.in/blog/best-time-Tips-and-travel-hacks-for-visiting-varanasi-to-gaya"
                />

                {/* Open Graph (OG) Tags */}
                <meta
                  property="og:title"
                  content="Best Time to Visit Varanasi to Gaya for a Perfect Trip"
                />
                <meta
                  property="og:description"
                  content="Discover the ideal months to travel from Varanasi to Gaya. Explore weather, festivals, and travel tips to plan your spiritual journey perfectly."
                />
                <meta property="og:type" content="article" />
                <meta
                  property="og:url"
                  content="https://sweettrip.in/blog/best-time-Tips-and-travel-hacks-for-visiting-varanasi-to-gaya"
                />
                <meta
                  property="og:image"
                  content="https://sweettrip.in/images/logo.svg"
                />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content="Best Time to Visit Varanasi to Gaya for a Perfect Trip"
                />
                <meta
                  name="twitter:description"
                  content="Discover the ideal months to travel from Varanasi to Gaya. Explore weather, festivals, and travel tips to plan your spiritual journey perfectly."
                />
                <meta
                  name="twitter:image"
                  content="https://sweettrip.in/images/logo.svg"
                />

                {/* JSON-LD Structured Data */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://sweettrip.in/blog/best-time-Tips-and-travel-hacks-for-visiting-varanasi-to-gaya",
                      },
                      "headline":
                        "Best Time, Tips & Travel Hacks for Visiting Varanasi to Gaya",
                      "description":
                        "Discover the ideal months to travel from Varanasi to Gaya. Explore weather, festivals, and travel tips to plan your spiritual journey perfectly.",
                      "image": "https://sweettrip.in/images/logo.svg",
                      "author": {
                        "@type": "Organization",
                        "name": "Sweet Trip",
                        "url": "https://sweettrip.in/",
                      },
                      "publisher": {
                        "@type": "Organization",
                        "name": "",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "",
                        },
                      },
                      "datePublished": "2025-09-28",
                    }),
                  }}
                />
              </>
            )
          }
           {
          blog?.meta?.url === "best-tour-operators-in-varanasi" && (
            <>
              {/* Canonical URL */}
              <link
                rel="canonical"
                href="https://sweettrip.in/blog/best-tour-operators-in-varanasi"
              />

              {/* Open Graph (OG) Tags */}
              <meta
                property="og:title"
                content="Best Tour Operators in Varanasi for Spiritual Travel"
              />
              <meta
                property="og:description"
                content="Explore Varanasi with the best tour operators. Get affordable packages, guided tours, and authentic local experiences tailored just for you."
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:url"
                content="https://sweettrip.in/blog/best-tour-operators-in-varanasi"
              />
              <meta property="og:image" content="https://sweettrip.in/images/logo.svg" />

              {/* Twitter Card Tags */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="Best Tour Operators in Varanasi for Spiritual Travel"
              />
              <meta
                name="twitter:description"
                content="Explore Varanasi with the best tour operators. Get affordable packages, guided tours, and authentic local experiences tailored just for you."
              />
              <meta name="twitter:image" content="https://sweettrip.in/images/logo.svg" />

              {/* JSON-LD Structured Data */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                      "@type": "WebPage",
                      "@id": "https://sweettrip.in/blog/best-tour-operators-in-varanasi",
                    },
                    "headline":
                      "Best Tour Operators in Varanasi: Your Guide to Exploring the Spiritual Capital",
                    "description":
                      "Explore Varanasi with the best tour operators. Get affordable packages, guided tours, and authentic local experiences tailored just for you.",
                    "image": "https://sweettrip.in/images/logo.svg",
                    "author": {
                      "@type": "Organization",
                      "name": "Sweet Trip",
                      "url": "https://sweettrip.in/",
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": "",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "",
                      },
                    },
                    "datePublished": "2025-10-01",
                  }),
                }}
              />
            </>
          )
        }
      </Head>
      <SectionHeader title={blog.meta.heading} para={sectionHeader.para} />
      <section className="pt-10 pb-10">
        <div className="container mx-auto">
          <div className="flex-col justify-center flex pl-4 pr-4">
            <p className="mb-2">Posted on {blog.meta.date}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>
        {blog.meta.faq && <Faq faqsData={faqsData} faqsError={faqsError} />}
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

export async function getStaticPaths() {
  const slugs = getBlogSlugs().map((slug) => slug.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, content } = getBlogBySlug(params.slug);
  const processedContent = await remark()
    .use(html)
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);
  return {
    props: {
      blog: {
        meta,
        content: processedContent.toString(),
      },
    },
  };
}
