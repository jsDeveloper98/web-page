/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
