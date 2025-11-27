# openspec-language-switcher

> Instantly localize your OpenSpec `AGENTS.md`.

**What it does:**
Reads a locale file (e.g., `locales/ru.json`) and updates `openspec/AGENTS.md` with the translated content.

> **Note:** To generate OpenSpec documents in the selected language, you should also write your prompts to the AI agent in that language. For example, after switching to Russian, issue commands to the AI in Russian.

> **Compatibility:** Tested with `openspec v0.15.0`.

**Usage:**

Run directly with `npx`:

```bash
npx @dealenx/openspec-language-switcher ru
```

**Supported Locales:**

| Code | Language | Command |
| :--- | :--- | :--- |
| `ru` | Russian | `npx @dealenx/openspec-language-switcher ru` |
| `zh` | Chinese | `npx @dealenx/openspec-language-switcher zh` |
