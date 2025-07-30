import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
        <title>Best Tour Operator in Varanasi | Affordable City Tours</title>
        <meta
          name="description"
          content="Looking for the best tour operator in Varanasi? Get budget-friendly, hassle-free tours with local insights and 24/7 support. Reserve your spot now!"
        />
      </Head>
      <SectionHeader title={sectionHeader.title} para={sectionHeader.para} />
      <section className="pt-10 pb-5">
        <div className="container mx-auto">
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
