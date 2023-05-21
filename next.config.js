/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/front',
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,   
    },
}

module.exports = nextConfig
