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
  applicationName: "Prem Hari S",
  title: {
    default: "Prem Hari S",
    template: "%s | Prem Hari S",
  },
  description:
    "Full Stack Developer | MERN Stack Developer building real-world web applications.",
  authors: [
    {
      name: "Prem Hari S",
      url: "https://prem-portfolio-i3wr.vercel.app",
    },
  ],
  creator: "Prem Hari S",
  keywords: Keywords,

  // ✅ FIXED HERE
  metadataBase: new URL("https://prem-portfolio-i3wr.vercel.app"),
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