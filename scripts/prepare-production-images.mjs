import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const brandDir = 'public/images/branding';

await mkdir(brandDir, { recursive: true });

const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512"
     xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="110" fill="#264c3f"/>
  <path
    d="M256 92
       C200 145 163 199 163 264
       C163 335 204 385 256 420
       C308 385 349 335 349 264
       C349 199 312 145 256 92Z"
    fill="#dce8dd"/>
  <path
    d="M256 145
       L256 362
       M256 213
       L207 263
       M256 257
       L307 307"
    stroke="#264c3f"
    stroke-width="22"
    stroke-linecap="round"
  />
</svg>
`;

const socialSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="1200" height="630" fill="#f4f0e7"/>

  <rect x="72" y="70" width="150" height="150" rx="34"
        fill="#264c3f"/>

  <path
    d="M147 101
       C116 131 98 162 98 190
       C98 226 119 252 147 270
       C175 252 196 226 196 190
       C196 162 178 131 147 101Z"
    fill="#dce8dd"/>

  <path
    d="M147 128
       L147 231
       M147 161
       L122 187
       M147 183
       L173 209"
    stroke="#264c3f"
    stroke-width="10"
    stroke-linecap="round"/>

  <text
    x="72"
    y="345"
    font-family="Georgia, serif"
    font-size="78"
    fill="#18352c">
    Evergreen Counseling
  </text>

  <text
    x="75"
    y="420"
    font-family="Arial, sans-serif"
    font-size="36"
    letter-spacing="4"
    fill="#52665d">
    COLLECTIVE
  </text>

  <text
    x="75"
    y="510"
    font-family="Arial, sans-serif"
    font-size="28"
    fill="#52665d">
    Demonstration behavioral health practice
  </text>
</svg>
`;

await Promise.all([
  sharp(Buffer.from(iconSvg))
    .resize(512, 512)
    .png()
    .toFile(`${brandDir}/evergreen-icon-512.png`),

  sharp(Buffer.from(iconSvg))
    .resize(180, 180)
    .png()
    .toFile(`${brandDir}/apple-touch-icon.png`),

  sharp(Buffer.from(iconSvg))
    .resize(32, 32)
    .png()
    .toFile(`${brandDir}/favicon-32.png`),

  sharp(Buffer.from(socialSvg))
    .jpeg({ quality: 90 })
    .toFile(`${brandDir}/evergreen-social-1200x630.jpg`),
]);

console.log('Evergreen demo branding assets generated.');
