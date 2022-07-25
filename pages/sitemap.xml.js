import React from "react";

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://tech.molodykh.online/posts/animation-in-xaml/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/inheritance-principles/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/ipv4-operations/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/jqplugin/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/path-markup-test/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/templated-control-xaml-2/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/order-members-with-resharper/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/templated-control-xaml/</loc>
<changefreq>yearly</changefreq>
<priority>1.0</priority>
</url>
<url>
<loc>https://tech.molodykh.online/posts/wcf-pony/</loc>
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
