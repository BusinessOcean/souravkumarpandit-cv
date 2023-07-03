/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    distDir: 'out',
    experimental: {
        appDir: true,
    },
    images: {
    domains: ['cdn.sanity.io'],
    },
};

module.exports = nextConfig;
