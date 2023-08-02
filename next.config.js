/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// FONTE: https://stackoverflow.com/a/65746862/18172843
module.exports = {
    env: {
        NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    }
}