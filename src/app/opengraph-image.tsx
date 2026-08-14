import { ImageResponse } from "next/og";

import { hero, profile } from "@/lib/content";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Same tokens as the page: off-black canvas, one accent, sharp edges. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          color: "#f4f4f5",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          {profile.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: "96px",
              height: "6px",
              backgroundColor: "#f97316",
              marginBottom: "40px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
            }}
          >
            {hero.headline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>
          {profile.role}
        </div>
      </div>
    ),
    size,
  );
}
