import * as fs from 'fs';
import * as path from 'path';

interface LocaleData {
    descriptionSuffix: string;
    checklistItems: string[];
}

export function patchAgentsFile(filePath: string, localeData: LocaleData): void {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Patch Description
    const baseDescription = "Instructions for AI coding assistants using OpenSpec for spec-driven development.";
    if (content.includes(baseDescription)) {
        // Check if already patched with this locale
        if (!content.includes(localeData.descriptionSuffix.trim())) {
             // Regex to find the line
             // Escape special characters in baseDescription for regex
             const escapedBase = baseDescription.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
             const regex = new RegExp(escapedBase + ".*");
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
        let insertPosition: number;
        
        if (nextHeaderIndex !== -1) {
            // Look backwards from next header to find the last non-empty line
            insertPosition = nextHeaderIndex;
        } else {
            insertPosition = content.length;
        }

        // We need to insert before the next header.
        // Let's construct the string to insert
        let insertion = "";
        localeData.checklistItems.forEach((item: string) => {
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
