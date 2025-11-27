const fs = require('fs');
const path = require('path');

function patchAgentsFile(filePath, localeData) {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Patch Description
    const baseDescription = "Instructions for AI coding assistants using OpenSpec for spec-driven development.";
    if (content.includes(baseDescription)) {
        // Check if already patched with this locale
        if (!content.includes(localeData.descriptionSuffix.trim())) {
            // Check if patched with ANY other locale (heuristic: line is longer than base)
            // For simplicity, we might just replace the line containing baseDescription
            // But to be safe, let's just replace the base description with base + suffix
            // If there was another suffix, this might be tricky. 
            // Ideally we reset to base first? 
            // Let's assume we are appending to the base.

            // Regex to find the line
            const regex = new RegExp(baseDescription + ".*");
            content = content.replace(regex, baseDescription + localeData.descriptionSuffix);
        }
    } else {
        console.warn("Base description not found, skipping description patch.");
    }

    // 2. Patch Checklist
    const checklistHeader = "## TL;DR Quick Checklist";
    const checklistIndex = content.indexOf(checklistHeader);

    if (checklistIndex !== -1) {
        // Find the end of the checklist section (next header or end of file)
        const nextHeaderIndex = content.indexOf("\n## ", checklistIndex + checklistHeader.length);
        let insertPosition;

        if (nextHeaderIndex !== -1) {
            // Look backwards from next header to find the last non-empty line
            insertPosition = nextHeaderIndex;
        } else {
            insertPosition = content.length;
        }

        // We need to insert before the next header.
        // Let's construct the string to insert
        let insertion = "";
        localeData.checklistItems.forEach(item => {
            if (!content.includes(item)) {
                insertion += `- ${item}\n`;
            }
        });

        if (insertion) {
            // Insert before the next section
            const before = content.substring(0, insertPosition);
            const after = content.substring(insertPosition);

            // Ensure we have a newline before insertion if needed
            if (!before.endsWith('\n')) {
                insertion = '\n' + insertion;
            }

            content = before + insertion + after;
        }
    } else {
        console.warn("Checklist header not found, skipping checklist patch.");
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully patched ${filePath}`);
}

module.exports = { patchAgentsFile };
