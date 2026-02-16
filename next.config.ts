import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/kingblindagem/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
