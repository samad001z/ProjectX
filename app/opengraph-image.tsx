import { ImageResponse } from "next/og";

export const alt =
  "ProjeX: we build your project and get you ready to defend it in your viva.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Brand-matched OG card: warm paper, ink headline, blue wordmark, amber marker. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBFAF6",
          backgroundImage:
            "linear-gradient(#E7E3DA 1px, transparent 1px), linear-gradient(90deg, #E7E3DA 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 800, color: "#16150F" }}>
          Proje<span style={{ color: "#2B2BF5" }}>X</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 800,
              color: "#16150F",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            We build your project, then get you ready to defend it in your viva.
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 232,
                height: 12,
                borderRadius: 6,
                backgroundColor: "#FFB020",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#6B6862", fontFamily: "monospace" }}>
          real code · full docs · viva prep
        </div>
      </div>
    ),
    { ...size },
  );
}
