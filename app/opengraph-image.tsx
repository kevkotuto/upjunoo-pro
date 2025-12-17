import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "UPJUNOO PRO - Taxi, Livraison & Location en Afrique";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  // Read the logo file and convert to base64
  const logoPath = join(process.cwd(), "public/images/logo/logo_fond_transparent.png");
  const logoData = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoBase64}
            alt="UPJUNOO PRO"
            width={500}
            height={188}
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: "rgba(255,255,255,0.95)",
            textAlign: "center",
            maxWidth: 800,
            fontWeight: 600,
          }}
        >
          Taxi • Livraison • Location
        </div>

        {/* Countries */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.8)",
            marginTop: 24,
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
