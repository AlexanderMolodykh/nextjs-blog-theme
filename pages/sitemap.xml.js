import React from "react";

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://tech.molodykh.online/posts/animation-in-xaml/</loc>
<lastmod>Sun Apr 08 2012 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/inheritance-principles/</loc>
<lastmod>Tue Jun 01 2010 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/ipv4-operations/</loc>
<lastmod>Mon Jul 05 2010 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/jqplugin/</loc>
<lastmod>Sat Aug 07 2010 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/path-markup-test/</loc>
<lastmod>Mon Mar 04 2013 00:00:00 GMT+0100 (czas środkowoeuropejski standardowy)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/templated-control-xaml-2/</loc>
<lastmod>Wed May 16 2012 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/templated-control-xaml/</loc>
<lastmod>Thu May 03 2012 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/wcf-pony/</loc>
<lastmod>Sat May 31 2014 00:00:00 GMT+0200 (czas środkowoeuropejski letni)</lastmod>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
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