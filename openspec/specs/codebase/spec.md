# codebase Specification

## Purpose
TBD - created by archiving change migrate-to-typescript. Update Purpose after archive.
## Requirements
### Requirement: Использование TypeScript
Весь исходный код утилиты (за исключением конфигурационных файлов) MUST быть написан на языке TypeScript.

#### Scenario: Проверка расширений файлов
Given проект настроен
When разработчик создает новый модуль логики
Then файл должен иметь расширение `.ts`

### Requirement: Строгая типизация
Конфигурация TypeScript MUST включать строгий режим (`strict: true`).

#### Scenario: Проверка конфигурации
Given файл `tsconfig.json`
When проверяется параметр `compilerOptions.strict`
Then значение должно быть `true`

