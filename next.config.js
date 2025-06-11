/** @type {import('next').NextConfig} */
const nextConfig = {
    // add image hosts
    images: {
        domains: ['firebasestorage.googleapis.com',
            'images.unsplash.com',
            'plus.unsplash.com',
        ],
    },
}

module.exports = nextConfig
