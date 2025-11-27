#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path');
const fs = require('fs');
const { patchAgentsFile } = require('../lib/patcher');

const program = new Command();

program
    .name('openspec-language-switcher')
    .description('CLI to localize OpenSpec AGENTS.md')
    .version('1.0.0')
    .argument('<locale>', 'Locale to switch to (e.g., ru, zh)')
    .action((locale) => {
        const localePath = path.join(__dirname, '..', 'locales', `${locale}.json`);

        if (!fs.existsSync(localePath)) {
            console.error(`Error: Locale '${locale}' not supported.`);
            process.exit(1);
        }

        const localeData = require(localePath);
        const agentsFilePath = path.join(process.cwd(), 'openspec', 'AGENTS.md');

        try {
            patchAgentsFile(agentsFilePath, localeData);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
    });

program.parse();