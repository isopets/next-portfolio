/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });
        const withImages = require（ 'next-images'）
        module.exports = withImages（）
        return config;
    },
};

module.exports = nextConfig;