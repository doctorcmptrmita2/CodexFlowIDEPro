#!/usr/bin/env node
/**
 * Replace all "Roo" references with "CodexFlow" in the extension
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const srcDir = join(projectRoot, 'src');
const webviewDir = join(projectRoot, 'webview-ui', 'src');

// Replacement patterns
const replacements = [
  // Exact word matches (case-sensitive)
  { from: /"Roo /g, to: '"CodexFlow ' },
  { from: /"Roo'/g, to: '"CodexFlow\'' },
  { from: /"Roo"/g, to: '"CodexFlow"' },
  { from: /'Roo /g, to: "'CodexFlow " },
  { from: /'Roo'/g, to: "'CodexFlow'" },
  { from: /'Roo"/g, to: "'CodexFlow\"" },
  { from: / Roo /g, to: ' CodexFlow ' },
  { from: / Roo'/g, to: " CodexFlow'" },
  { from: / Roo"/g, to: ' CodexFlow"' },
  { from: / Roo\./g, to: ' CodexFlow.' },
  { from: / Roo,/g, to: ' CodexFlow,' },
  { from: / Roo;/g, to: ' CodexFlow;' },
  { from: / Roo\)/g, to: ' CodexFlow)' },
  { from: / Roo\]/g, to: ' CodexFlow]' },
  { from: / Roo\}/g, to: ' CodexFlow}' },
  
  // Roo Code / Roo Code Cloud
  { from: /Roo Code Cloud/g, to: 'CodexFlow Gateway' },
  { from: /Roo Code/g, to: 'CodexFlow' },
  { from: /roo code/g, to: 'codexflow' },
  { from: /roocode/g, to: 'codexflow' },
  
  // Roo's / Roo wants / Roo is
  { from: /Roo's/g, to: "CodexFlow's" },
  { from: /Roo wants/g, to: 'CodexFlow wants' },
  { from: /Roo is/g, to: 'CodexFlow is' },
  { from: /Roo has/g, to: 'CodexFlow has' },
  { from: /Roo read/g, to: 'CodexFlow read' },
  { from: /Roo ran/g, to: 'CodexFlow ran' },
  { from: /Roo said/g, to: 'CodexFlow said' },
  { from: /Roo viewed/g, to: 'CodexFlow viewed' },
  { from: /Roo searched/g, to: 'CodexFlow searched' },
  { from: /Roo generated/g, to: 'CodexFlow generated' },
  { from: /Roo switched/g, to: 'CodexFlow switched' },
  { from: /Roo now/g, to: 'CodexFlow now' },
  { from: /Roo needs/g, to: 'CodexFlow needs' },
  
  // Specific phrases
  { from: /Roo is a whole AI dev team/g, to: 'CodexFlow is a whole AI dev team' },
  { from: /Roo doesn't charge/g, to: "CodexFlow doesn't charge" },
  { from: /Roo Marketplace/g, to: 'CodexFlow Marketplace' },
  { from: /Roo would like/g, to: 'CodexFlow would like' },
];

// Files to process
const filePatterns = [
  join(srcDir, '**/*.ts'),
  join(srcDir, '**/*.tsx'),
  join(srcDir, '**/*.json'),
  join(webviewDir, '**/*.ts'),
  join(webviewDir, '**/*.tsx'),
  join(webviewDir, '**/*.json'),
];

console.log('🔄 Replacing "Roo" with "CodexFlow"...\n');

let totalFiles = 0;
let totalReplacements = 0;

for (const pattern of filePatterns) {
  const files = await glob(pattern, { ignore: ['**/node_modules/**', '**/dist/**', '**/build/**'] });
  
  for (const file of files) {
    try {
      let content = readFileSync(file, 'utf8');
      let fileReplacements = 0;
      
      for (const { from, to } of replacements) {
        const matches = content.match(from);
        if (matches) {
          content = content.replace(from, to);
          fileReplacements += matches.length;
        }
      }
      
      if (fileReplacements > 0) {
        writeFileSync(file, content, 'utf8');
        console.log(`✅ ${file.replace(projectRoot + '\\', '')}: ${fileReplacements} replacements`);
        totalFiles++;
        totalReplacements += fileReplacements;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
}

console.log(`\n✨ Done! ${totalReplacements} replacements in ${totalFiles} files.`);





