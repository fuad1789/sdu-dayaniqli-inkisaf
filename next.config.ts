import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://static.cloudflareinsights.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://www.googletagmanager.com;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};
export default nextConfig;
