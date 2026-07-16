import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prem Hari S - Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #090514, #2f2a40)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "#FF9FFC",
            marginBottom: 20,
          }}
        >
          Prem Hari S
        </div>
        <div
          style={{
            fontSize: 40,
            color: "white",
            opacity: 0.8,
          }}
        >
          Full Stack Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
