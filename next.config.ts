import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Development only. Next blocks cross-origin requests to /_next/* dev
  // resources by default, so opening the site on the LAN address (phone,
  // tablet, second machine) loads the HTML but none of the JS chunks.
  // Covers the common private ranges rather than one DHCP-assigned address.
  allowedDevOrigins: ["192.168.1.*", "192.168.0.*", "10.0.0.*", "*.local"],

  images: {
    // Placeholder photography source. Swap for the real asset host (or move the
    // images into /public) once final imagery exists.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/id/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
