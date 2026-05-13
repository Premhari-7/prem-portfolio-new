import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Prem Hari S",
  description:
    "View and download Prem Hari S's professional resume. Full Stack Developer with expertise in MERN stack and modern web development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Prem Hari S",
    description:
      "View and download Prem Hari S's professional resume featuring experience and skills in full-stack development.",
    url: "http://localhost:3000/resume",
    siteName: "Prem Hari S",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Prem Hari S Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Prem Hari S",
    description:
      "View Prem Hari S's professional resume and experience as a full-stack developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/resume.pdf"   // ✅ fixed path
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}