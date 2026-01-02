import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  // Redirections 301 pour les anciennes pages indexees (Hello World, auteur, etc.)
  async redirects() {
    return [
      // Pages WordPress legacy qui peuvent encore etre indexees
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:slug/',
        destination: '/',
        permanent: true,
      },
      // Pages d'exemple WordPress courantes
      {
        source: '/sample-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sample-page/',
        destination: '/',
        permanent: true,
      },
      // Blog/archives WordPress
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
      // Categories/tags WordPress vides
      {
        source: '/category/:slug',
        destination: '/actualites',
        permanent: true,
      },
      {
        source: '/tag/:slug',
        destination: '/actualites',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
