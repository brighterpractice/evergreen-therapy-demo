import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const portraitSource = 'source-assets/lisa-bright-headshot.webp';
const logoSource = 'source-assets/bright-hope-therapy-logo.png';
const portraitDir = 'public/images/lisa';
const brandDir = 'public/images/branding';

await Promise.all([mkdir(portraitDir, { recursive: true }), mkdir(brandDir, { recursive: true })]);

await Promise.all([
  sharp(portraitSource).rotate().resize({ width: 360, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${portraitDir}/lisa-bright-360.webp`),
  sharp(portraitSource).rotate().resize({ width: 480, withoutEnlargement: true }).webp({ quality: 83 }).toFile(`${portraitDir}/lisa-bright-480.webp`),
  sharp(portraitSource).rotate().resize({ width: 700, withoutEnlargement: true }).webp({ quality: 84 }).toFile(`${portraitDir}/lisa-bright-700.webp`),
  sharp(logoSource).extract({ left: 185, top: 40, width: 880, height: 880 }).resize(96, 96).webp({ quality: 90 }).toFile(`${brandDir}/bright-hope-mark-96.webp`),
  sharp(logoSource).extract({ left: 120, top: 900, width: 1015, height: 285 }).resize({ width: 360 }).webp({ quality: 92 }).toFile(`${brandDir}/bright-hope-wordmark-360.webp`),
  sharp(logoSource).extract({ left: 185, top: 40, width: 880, height: 880 }).resize(512, 512).png({ compressionLevel: 9, palette: true, quality: 92 }).toFile(`${brandDir}/bright-hope-icon-512.png`),
  sharp(logoSource).extract({ left: 185, top: 40, width: 880, height: 880 }).resize(180, 180).png({ compressionLevel: 9, palette: true, quality: 92 }).toFile(`${brandDir}/apple-touch-icon.png`),
  sharp(logoSource).extract({ left: 185, top: 40, width: 880, height: 880 }).resize(32, 32).png({ compressionLevel: 9 }).toFile(`${brandDir}/favicon-32.png`),
]);

const socialMark = await sharp(logoSource).extract({ left: 185, top: 40, width: 880, height: 880 }).resize(500, 500).png().toBuffer();
const socialWordmark = await sharp(logoSource).extract({ left: 120, top: 900, width: 1015, height: 285 }).resize({ width: 560 }).png().toBuffer();

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fffdf9' } })
  .composite([
    { input: socialMark, left: 45, top: 65 },
    { input: socialWordmark, left: 590, top: 235 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(`${brandDir}/bright-hope-social-1200x630.jpg`);
