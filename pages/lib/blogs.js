import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'blogs');

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}
