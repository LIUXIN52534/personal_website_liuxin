import { ImageResponse } from "next/og";

export const alt = "Liu Xin portfolio";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(119,247,255,0.22), transparent 32%), radial-gradient(circle at bottom right, rgba(255,90,179,0.18), transparent 34%), #0a0a0d",
          color: "#f4f1ea",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(244,241,234,0.16)",
            color: "rgba(244,241,234,0.6)",
            fontSize: 24,
            letterSpacing: "0.32em",
            padding: "14px 18px",
            textTransform: "uppercase",
            width: "auto",
          }}
        >
          Liu Xin / Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 900 }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 0.96 }}>刘鑫</div>
          <div style={{ fontSize: 42, fontWeight: 600, lineHeight: 1.08 }}>
            Game design, technical design, and AI-driven interactive systems.
          </div>
          <div style={{ color: "rgba(244,241,234,0.72)", fontSize: 26, lineHeight: 1.4 }}>
            Bilingual personal site with featured work, public resume, and direct contact.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            borderTop: "1px solid rgba(244,241,234,0.14)",
            color: "rgba(244,241,234,0.56)",
            display: "flex",
            fontSize: 22,
            justifyContent: "space-between",
            letterSpacing: "0.12em",
            paddingTop: 18,
            textTransform: "uppercase",
          }}
        >
          <div>Work / About / Contact</div>
          <div>liuxin52534@gmail.com</div>
        </div>
      </div>
    ),
    size,
  );
}
