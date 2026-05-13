import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://prem-portfolio-i3wr.vercel.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/private"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}