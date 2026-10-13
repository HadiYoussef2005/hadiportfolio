import type { NextConfig } from "next";

// Set this on the PORTFOLIO Vercel project to the app's stable production origin.
// Example: https://your-leetleitner-project.vercel.app (without /leetleitner).
const configuredOrigin = process.env.LEETLEITNER_ORIGIN?.trim();
const upstream = configuredOrigin ? new URL(configuredOrigin) : null;
if (
  upstream &&
  (upstream.pathname !== "/" ||
    upstream.search ||
    upstream.hash ||
    upstream.username ||
    upstream.password ||
    (upstream.protocol !== "https:" &&
      !(
        upstream.protocol === "http:" &&
        ["localhost", "127.0.0.1"].includes(upstream.hostname)
      )))
) {
  throw new Error(
    "LEETLEITNER_ORIGIN must be a bare HTTPS origin, without a path or credentials. HTTP localhost is allowed for local testing.",
  );
}

const nextConfig: NextConfig = {
  // LeetLeitner's scoped service worker needs the trailing-slash entry URL.
  skipTrailingSlashRedirect: true,
  skipProxyUrlNormalize: true,
  async redirects() {
    return [
      // Retain Next.js's normal no-trailing-slash behavior for other pages.
      {
        source: "/:path((?!leetleitner(?:/|$)).+)/",
        destination: "/:path",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: upstream
        ? [
            {
              source: "/leetleitner/",
              destination: `${upstream.origin}/leetleitner/index.html`,
            },
            {
              source: "/leetleitner/:path*",
              destination: `${upstream.origin}/leetleitner/:path*`,
            },
          ]
        : [],
    };
  },
};

export default nextConfig;
