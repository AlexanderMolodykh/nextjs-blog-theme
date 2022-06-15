import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const Sitemap = () => {
    return null;
};

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

// postFilePaths is the list of all htm files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.htm?$/.test(path));

export const getPosts = () => {
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://tech.molodykh.online';
try{
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${getPosts()
        .map((post) => {
          return `
            <url>
              <loc>${BASE_URL+"/posts/" + post.filePath.replace(/\.htm?$/, '') + "/"}</loc>
              <lastmod>${new Date(post.data.date)}</lastmod>
              <changefreq>yearly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
} catch (error) {
	res.write(error);
	res.write(error.stack);
    res.end();
}
    return {
        props: {},
    };
};

export default Sitemap;