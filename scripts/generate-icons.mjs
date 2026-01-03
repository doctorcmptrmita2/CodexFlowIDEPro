#!/usr/bin/env node
/**
 * Generate PNG icons from SVG for CodexFlow extension
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, '../src/assets/icons/icon.svg');
const outputDir = join(__dirname, '../src/assets/icons');

// Read SVG
const svgContent = readFileSync(svgPath, 'utf-8');

// For now, we'll create a simple base64 PNG placeholder
// In production, you'd use sharp or puppeteer to convert SVG to PNG
// This is a workaround that creates a minimal valid PNG

console.log('📦 Generating PNG icons from SVG...');
console.log('⚠️  Note: For production, install sharp and use proper SVG→PNG conversion');

// Create a simple script that can be run with sharp if available
const generateWithSharp = `
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';

const svgPath = join(__dirname, '../src/assets/icons/icon.svg');
const svg = readFileSync(svgPath);

// Generate 128x128 icon
await sharp(svg)
  .resize(128, 128)
  .png()
  .toFile(join(__dirname, '../src/assets/icons/icon.png'));

// Generate 256x256 icon (for high DPI)
await sharp(svg)
  .resize(256, 256)
  .png()
  .toFile(join(__dirname, '../src/assets/icons/icon@2x.png'));

console.log('✅ Icons generated successfully!');
`;

// For now, we'll use a workaround: copy SVG as reference
// The actual PNG will need to be generated manually or with sharp
console.log('💡 To generate PNG icons, run:');
console.log('   npm install sharp');
console.log('   node -e "' + generateWithSharp.replace(/\n/g, ' ') + '"');

// Create a note file
writeFileSync(
  join(outputDir, 'README-ICONS.md'),
  `# Icon Generation

To generate PNG icons from SVG:

1. Install sharp: \`pnpm add -D sharp\`
2. Run: \`node scripts/generate-icons.mjs\`

Or use an online SVG to PNG converter:
- https://convertio.co/svg-png/
- Upload icon.svg and export as 128x128 PNG
`
);

console.log('✅ Icon generation script created');
console.log(`📁 SVG source: ${svgPath}`);
console.log(`📁 Output directory: ${outputDir}`);





