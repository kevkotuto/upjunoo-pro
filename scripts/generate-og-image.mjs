import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

async function generateOGImage() {
  const width = 1200;
  const height = 630;

  // Read the logo
  const logoPath = join(rootDir, 'public/images/logo/logo_fond_transparent.png');
  const logoBuffer = readFileSync(logoPath);

  // Resize logo to fit nicely
  const resizedLogo = await sharp(logoBuffer)
    .resize(500, null, { fit: 'contain' })
    .toBuffer();

  const logoMeta = await sharp(resizedLogo).metadata();
  const logoWidth = logoMeta.width || 500;
  const logoHeight = logoMeta.height || 188;

  // Create gradient background
  const svgBackground = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#058e9f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#046b78;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="${width/2}" y="${height - 140}"
            font-family="Arial, sans-serif"
            font-size="36"
            font-weight="600"
            fill="rgba(255,255,255,0.95)"
            text-anchor="middle">
        Taxi • Livraison • Location
      </text>
      <text x="${width/2}" y="${height - 80}"
            font-family="Arial, sans-serif"
            font-size="28"
            fill="rgba(255,255,255,0.8)"
            text-anchor="middle">
        Disponible dans 15 pays africains
      </text>
    </svg>
  `;

  // Create background
  const background = await sharp(Buffer.from(svgBackground))
    .png()
    .toBuffer();

  // Composite logo on background
  const logoX = Math.round((width - logoWidth) / 2);
  const logoY = Math.round((height - logoHeight) / 2) - 80;

  const finalImage = await sharp(background)
    .composite([
      {
        input: resizedLogo,
        top: logoY,
        left: logoX,
      }
    ])
    .png()
    .toBuffer();

  // Save the image
  const outputPath = join(rootDir, 'public/og-image.png');
  await sharp(finalImage).toFile(outputPath);

  console.log('OG image generated successfully at:', outputPath);
}

generateOGImage().catch(console.error);
