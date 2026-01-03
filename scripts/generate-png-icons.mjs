#!/usr/bin/env node
/**
 * Generate PNG icons from SVG using sharp
 */

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgPath = join(__dirname, '../src/assets/icons/icon.svg');
const outputDir = join(__dirname, '../src/assets/icons');

console.log('📦 Generating PNG icons from SVG...');
console.log(`📁 Source: ${svgPath}`);

try {
  const svg = readFileSync(svgPath);

  // Generate 128x128 icon (standard)
  await sharp(svg)
    .resize(128, 128)
    .png()
    .toFile(join(outputDir, 'icon.png'));

  console.log('✅ Generated icon.png (128x128)');

  // Generate 256x256 icon (high DPI)
  await sharp(svg)
    .resize(256, 256)
    .png()
    .toFile(join(outputDir, 'icon@2x.png'));

  console.log('✅ Generated icon@2x.png (256x256)');

  // Generate 512x512 icon (marketplace)
  await sharp(svg)
    .resize(512, 512)
    .png()
    .toFile(join(outputDir, 'icon-marketplace.png'));

  console.log('✅ Generated icon-marketplace.png (512x512)');

  console.log('\n🎉 All icons generated successfully!');
} catch (error) {
  console.error('❌ Error generating icons:', error.message);
  process.exit(1);
}





