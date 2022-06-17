import React from "react";
import fs from "fs";

function Sitemap2({data}) {
    return null;
};

export async function getServerSideProps ({res}) {
try{
    
      const baseUrl = {
    development: "http://localhost:3000",
    production: "https://mydomain.com",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

}
catch(e) {
    res.write(e);
        res.write(e.trace);
    res.end();
}
    return {
        props: { data: { foo: "bo", },},
    };
};

export default Sitemap2;
