import React, { useEffect } from "react";
import Head from "next/head";
import { getBlogSlugs, getBlogBySlug } from "../lib/blogs";
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
    getFaq && getFaq.status ? getFaq?.faq?.tourOperatorInVaranasi : getFaq?.error;
  const faqsError = getFaq?.error;
  return (
    <>
    <Head>
        <title>{blog.meta.title}</title>
        <meta
          name="description"
          content={blog.meta.description}
        />
        <meta
          name="keywords"
          content={blog.meta.keywords}
        />
      </Head>
      <SectionHeader
        title={sectionHeader.title}
        para={sectionHeader.para}
        tourPackageClass={sectionHeader}
      />
      <section className="pt-10 pb-10">
        <div className="container mx-auto">
          <h2 className="mb-2">{blog.meta.heading}</h2>
          <p className="mb-2">Posted on {blog.meta.date}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          {blog.meta.heading==="Best Tour Operator in Varanasi – Sweet Trip" && <Faq faqsData={faqsData} faqsError={faqsError} />}
        </div>
      </section>
    </>
  );
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
