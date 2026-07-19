import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { Keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Prem Hari Portfolio",

  title: {
    default: "Prem Hari S | Full Stack Developer Portfolio",
    template: "%s | Prem Hari S",
  },

  description:
    "Prem Hari Portfolio - Full Stack Developer specializing in MERN Stack, React, Next.js, and modern web applications.",

  authors: [
    {
      name: "Prem Hari",
      url: "https://prem-hari-portfolio.vercel.app",
    },
  ],

  creator: "Prem Hari",

  keywords: [
    "Prem Hari",
    "Prem Hari Portfolio",
    "Prem Portfolio",
    "prem portfolio",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Web Developer",
    "Portfolio Website",
    ...(Array.isArray(Keywords) ? Keywords : []),
  ],

  metadataBase: new URL("https://prem-hari-portfolio.vercel.app"),

  verification: {
  google: "tHEJii4n5zrbkXCgSqAMaXDhSt1VSxVe5SZ46mByYEg",
},

  openGraph: {
    title: "prem hari s | full stack developer",
    description:
      "Portfolio of Prem Hari - Full Stack Developer building modern web applications using MERN Stack and Next.js.",
    url: "https://prem-hari-portfolio.vercel.app",
    siteName: "Prem Hari Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "prem hari s | full stack developer",
    description:
      "Portfolio of Prem Hari - MERN Stack and Next.js Developer.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://prem-hari-portfolio.vercel.app",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />

        {children}

        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}