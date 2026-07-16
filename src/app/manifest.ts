import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prem Hari S | Full Stack Developer",
    short_name: "Prem Hari",
    description:
      "Portfolio of Prem Hari - Full Stack Developer building modern web applications using MERN Stack and Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#090514",
    theme_color: "#090514",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
