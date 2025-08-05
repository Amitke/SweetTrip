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
        
        {blog?.meta?.url === "cab-service-in-varanasi" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://sweettrip.in/blog/cab-service-in-varanasi"
                },
                "headline": "The Ultimate Cab Service in Varanasi",
                "image": "https://sweettrip.in/images/logo.svg",
                "author": {
                "@type": "Organization",
                "name": "sweettrip",
                "url": "https://sweettrip.in/"
                },
                "publisher": {
                "@type": "Organization",
                "name": "sweettrip",
                "logo": {
                "@type": "ImageObject",
                "url": "https://sweettrip.in/images/logo.svg"
                }
                },
                "datePublished": "2025-07-07"
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
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/tour-operator-in-varanasi"
                },
                "headline": "Best Tour Operator in Varanasi – Sweet Trip",
                "description": "Looking for the best tour operator in Varanasi? Get budget-friendly, hassle-free tours with local insights and 24/7 support. Reserve your spot now!",
                "image": "https://sweettrip.in/images/logo.svg",  
                "author": {
                  "@type": "Organization",
                  "name": "sweettrip"
                },  
                "publisher": {
                  "@type": "Organization",
                  "name": "sweettrip",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sweettrip.in/images/logo.svg"
                  }
                },
                "datePublished": "2025-07-01"
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
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/places-to-visit-in-varanasi"
                },
                "headline": "Top 10 Places to Visit in Varanasi for First-Time Travellers",
                "description": "Discover the best places to visit in Varanasi, from sacred ghats and temples to hidden gems. Explore spiritual, cultural, and historic sites with our guide.",
                "image": "https://sweettrip.in/images/logo.svg",  
                "author": {
                  "@type": "Organization",
                  "name": "sweettrip"
                },  
                "publisher": {
                  "@type": "Organization",
                  "name": "sweettrip",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sweettrip.in/images/logo.svg"
                  }
                },
                "datePublished": "2025-07-28"
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
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/car-rental-in-varanasi"
                },
                "headline": "How to Choose the Right Car Rental in Varanasi: Tips & Best Options",
                "description": "Affordable car rental in Varanasi by Sweettrip. Book a taxi or rent a cab in Varanasi for local sightseeing, airport transfers, or outstation travel.",
                "image": "https://sweettrip.in/images/logo.svg",  
                "author": {
                  "@type": "Organization",
                  "name": "sweettrip"
                },  
                "publisher": {
                  "@type": "Organization",
                  "name": "sweettrip",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sweettrip.in/images/logo.svg"
                  }
                },
                "datePublished": "2025-07-30"

              }),
            }}
          />
        )}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "Why should I need to hire Sweet Trip as my tour operator in Varanasi?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweet Trip is one of the seasoned tour operators of Varanasi with years of experience. We are offering customized tour packages, local guides per person, clean cars, and 24/7 customer service, making us one of the safest tour operators in Varanasi for travelers of all kinds."
                  }
                },{
                  "@type": "Question",
                  "name": "What are the different types of Varanasi tour packages you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer various types of tour packages like 1-day spiritual trips, 2 to 5-day culture and heritage tours Pilgrimage tours, Buddhist pilgrimage tours (including Sarnath) Family and group packages as per your requirements. As Sweet Trip is among the leading tour operators of Varanasi it makes every visit as per your choice and desire."
                  }
                },{
                  "@type": "Question",
                  "name": "Do your packages offer facilities for staying?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sweet Trip offers complete Varanasi tour packages with stays ranging from luxury hotels to budget-friendly dharamshalas, as per your choice."
                  }
                },{
                  "@type": "Question",
                  "name": "Does transportation come in your Varanasi tour packages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our packages ensure safe travel like private cabs, airport transfers, and tempo travellers (9 seater to 26 seater). Our trained drivers take care of safe and comfortable travels within Varanasi and surrounding areas."
                  }
                },{
                  "@type": "Question",
                  "name": "Can a boat ride or experience of Ganga Aarti be booked separately?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, morning boat tours, Ganga Aarti sightseeing, temple visit, or generic guided sightseeing can be booked separately as individual services. We are a flexible tour organizer in Varanasi and offer full package and standalone services."
                  }
                },{
                  "@type": "Question",
                  "name": "Does the Ganga Aarti come in the tour package?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, as part of our standard Varanasi tours, we usually arrange the sacred Ganga Aarti at Dashashwamedh Ghat as an evening tour or optionally as an add-on activity. We reserve front-row seats or boat-facing views based on your choice."
                  }
                },{
                  "@type": "Question",
                  "name": "Is it possible to personalize the Varanasi tour as per our interests?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide customized Varanasi tour packages. If you have a desire for religious sites, cultural tours, or culinary tours, Sweet Trip will craft a customized tour itinerary just for you."
                  }
                },{
                  "@type": "Question",
                  "name": "What tourist safety features do you provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sweet Trip offers secure travel in clean vehicles, skilled drivers, local emergency assistance, and frequent updates on surrounding regulations and laws. You are in safe hands with us as a certified tour operator in Varanasi."
                  }
                }]
              }),
            }}
          />
        {blog.meta.canonicalUrl && (
          <link
            rel="canonical"
            href={`https://sweettrip.in/blog/${blog.meta.url}`}
          />
        )}
        {blog.meta.openGraphTags && (
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
          </>
        )}
        {blog.meta.twitterCard && (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={blog.meta.title} />
            <meta name="twitter:description" content={blog.meta.description} />
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
                description:
                  blog.meta.description
              }),
            }}
          />
        )}


      </Head>
      <SectionHeader
        title={blog.meta.heading}
        para={sectionHeader.para}
      />
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
