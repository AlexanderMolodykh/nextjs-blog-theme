import React from 'react';
import {
  getPosts
} from '../utils/mdx-utils';

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const BASE_URL = 'https://tech.molodykh.online';

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

    return {
        props: {},
    };
};

export default Sitemap;