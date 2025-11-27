# Documentation Spec

## ADDED Requirements

### Requirement: README Clarity and Conciseness
The `README.md` MUST be rewritten to be elegant, short, and easy to understand.

#### Scenario: User reads the README
- **Given** a user visits the repository
- **When** they read the README
- **Then** they should immediately understand the tool's purpose and how to use it.

### Requirement: File Modification Explanation
The `README.md` MUST clearly state that the tool modifies the `openspec/AGENTS.md` file based on the selected locale.

#### Scenario: User runs the tool
- **Given** a user runs the CLI
- **When** the command completes
- **Then** the user expects `openspec/AGENTS.md` to be updated with the localized content.

### Requirement: NPX Usage
The `README.md` MUST provide `npx` commands for running the tool without explicit installation.

#### Scenario: User wants to run without installing
- **Given** a user has Node.js installed
- **When** they want to try the tool
- **Then** they can copy and paste an `npx` command.

## Example Content Structure

```markdown
# openspec-language-switcher

> Instantly localize your OpenSpec `AGENTS.md`.

**What it does:**
Reads a locale file (e.g., `locales/ru.json`) and updates `openspec/AGENTS.md` with the translated content.

**Usage:**

Run directly with `npx`:

\`\`\`bash
npx @dealenx/openspec-language-switcher ru
\`\`\`

Or build and run locally:

\`\`\`bash
npm install
npm run build
node dist/index.js zh
\`\`\`
```
