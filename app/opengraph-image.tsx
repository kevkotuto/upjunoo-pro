import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "UPJUNOO PRO - Taxi, Livraison & Location en Afrique";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #058e9f 0%, #046b78 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              background: "white",
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
            }}
          >
            <span style={{ fontSize: 72, fontWeight: "bold", color: "#058e9f" }}>
              U
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 72,
                fontWeight: "bold",
                color: "white",
                letterSpacing: "-2px",
              }}
            >
              UPJUNOO
            </span>
            <span
              style={{
                fontSize: 48,
                fontWeight: "bold",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "8px",
                marginTop: -10,
              }}
            >
              PRO
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Taxi • Livraison • Location
        </div>

        {/* Countries */}
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.7)",
            marginTop: 20,
          }}
        >
          Disponible dans 15 pays africains
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
