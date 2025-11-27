#!/usr/bin/env node

import { Command } from "commander";
import * as path from "path";
import * as fs from "fs";
import { patchAgentsFile } from "./lib/patcher";

const program = new Command();

program
  .name("openspec-language-switcher")
  .description("CLI to localize OpenSpec AGENTS.md")
  .version("1.0.0")
  .argument("<locale>", "Locale to switch to (e.g., ru, zh)")
  .action((locale: string) => {
    // When running from dist/bin/index.js, we need to go up two levels to find locales
    // dist/bin/index.js -> dist/bin -> dist -> root -> locales
    // But wait, if we compile to dist, structure is:
    // dist/index.js (if we don't keep bin folder structure) or dist/bin/index.js
    // Let's check tsconfig outDir. It is ./dist.
    // src/bin/index.ts -> dist/bin/index.js (if we include src in compilation context correctly)
    // Actually, usually src/index.ts -> dist/index.js.
    // Let's assume src/index.ts is the entry point.

    // Adjusting path based on where the compiled file will be.
    // If src/index.ts -> dist/index.js, then locales are in ../locales
    const localePath = path.join(__dirname, "..", "locales", `${locale}.json`);

    if (!fs.existsSync(localePath)) {
      console.error(`Error: Locale '${locale}' not supported.`);
      process.exit(1);
    }

    // Dynamic require for JSON might need assertion or just fs read
    // In TS, require might be tricky with strict mode if resolveJsonModule is not perfect or for dynamic paths
    // Let's use fs.readFileSync and JSON.parse for safety and clarity
    const localeData = JSON.parse(fs.readFileSync(localePath, "utf8"));

    const agentsFilePath = path.join(process.cwd(), "openspec", "AGENTS.md");

    try {
      patchAgentsFile(agentsFilePath, localeData);
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

program.parse();
