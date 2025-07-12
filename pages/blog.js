import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { getBlogSlugs, getBlogBySlug } from "./lib/blogs";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";

export default function Blog({ blogs }) {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);

  useEffect(() => {
    dispatch(getSectionHeaderData());
  }, []);

  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].blog
      ? getSectionHeader.sectionHeader[0].blog
      : getSectionHeader?.error;
  return (
    <>
    <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Sweet trip blog"
        />
        <meta
          name="keywords"
           content="Sweet trip blog"
        />
      </Head>
      <SectionHeader
        title={sectionHeader.title}
        para={sectionHeader.para}
        tourPackageClass={sectionHeader}
      />
      <section className="pt-10 pb-5">
        <div className="container mx-auto">
          {blogs.map((blog) => (
            <div className={`flex-col justify-center flex pl-4 pr-4 mb-5`}>
              <h2><Link href={`/blog/${blog.slug}`}>{blog.meta.heading}</Link></h2>
              <p className="mb-2">Posted on {blog.meta.date}</p>
              <p className="mb-2">{blog.meta.para}</p>
              <Link className="error" href={`/blog/${blog.slug}`}><u>Read more</u></Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const slugs = getBlogSlugs();
  const blogs = slugs.map((slug) => getBlogBySlug(slug));
  return { props: { blogs } };
}
