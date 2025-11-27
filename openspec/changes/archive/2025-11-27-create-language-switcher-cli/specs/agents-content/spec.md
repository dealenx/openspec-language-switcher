# Spec: Содержимое AGENTS.md

## ADDED Requirements

### Requirement: Русская локализация инструкций
Для локали `ru`, файл `openspec/AGENTS.md` MUST быть модифицирован путем добавления инструкций по языку в заголовок и чек-лист.

**Исходный шаблон (пример):**
    ```markdown
    # OpenSpec Instructions

    Instructions for AI coding assistants using OpenSpec for spec-driven development.

    ## TL;DR Quick Checklist
    ...
    - Request approval: Do not start implementation until proposal is approved
    ```

**Целевой шаблон для `ru`:**
    ```markdown
    # OpenSpec Instructions

    Instructions for AI coding assistants using OpenSpec for spec-driven development. Provide the answer strictly in Russian language. Even if the query is in English, the output must be Russian.

    ## TL;DR Quick Checklist
    ...
    - Request approval: Do not start implementation until proposal is approved
    - When creating files, use Russian
    - Ensure all files and tasks are in Russian
    ```

#### Scenario: Проверка содержимого для RU
Given выбран язык `ru`
When утилита обновляет `openspec/AGENTS.md`
Then описание содержит "Provide the answer strictly in Russian language. Even if the query is in English, the output must be Russian."
And чек-лист содержит "When creating files, use Russian"
And чек-лист содержит "Ensure all files and tasks are in Russian"
