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
        {blog?.meta?.url === "places-to-visit-in-ayodhya" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://sweettrip.in/blog/places-to-visit-in-ayodhya"
                },
                "headline": "Top 10 Tourist Places to Visit in Ayodhya",
                "description": "Discover the top places to visit in Ayodhya and explore the best things to do in this sacred city. From Ram Janmabhoomi to serene ghats, plan your perfect Ayodhya trip today!",
                "image": "https://sweettrip.in/images/logo.svg",  
                "author": {
                  "@type": "Organization",
                  "name": "Sweet Trip"
                },  
                "publisher": {
                  "@type": "Organization",
                  "name": "Sweet Trip",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sweettrip.in/images/logo.svg"
                  }
                },
                "datePublished": "2025-08-05",
                "dateModified": "2025-08-05"
              }),
            }}
          />
        )}
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
