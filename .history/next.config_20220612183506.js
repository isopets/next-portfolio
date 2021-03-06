/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        });

        return config;
    },
};
// module.exports = {
//     future: {
//         webpack5: true,
//     },
};

module.exports = nextConfig;