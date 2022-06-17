import React from "react";

function Sitemap2({data}) {
    return null;
};

export async function getServerSideProps ({res}) {
try{
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://tech.molodykh.online/posts/animation-in-xaml/</loc>
<lastmod>Sun Apr 08 2012 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
</urlset>
`;

    res.setHeader('Content-Type', 'text/xml');
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
