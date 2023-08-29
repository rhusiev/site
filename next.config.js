/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/conspectus",
                destination: "https://rhusiev.github.io/conspectus/README.html",
                permanent: false,
            },
            {
                source: "/github",
                destination: "https://github.com/rhusiev",
                permanent: false,
            },
            {
                source: "/gitlab",
                destination: "https://gitlab.com/rad1an",
                permanent: false,
            },
            {
                source: "/telegram",
                destination: "https://t.me/rad0myr",
                permanent: false,
            },
            {
                source: "/discord",
                destination: "https://discordapp.com/users/689766912875692130",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
