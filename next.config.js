/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',
    //basePath: '/front',

    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,   
    },
}

module.exports = nextConfig
