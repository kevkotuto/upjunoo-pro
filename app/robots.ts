import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/wp-admin/",
          "/wp-login.php",
        ],
      },
    ],
    sitemap: "https://upjunoo.pro/sitemap.xml",
  };
}
