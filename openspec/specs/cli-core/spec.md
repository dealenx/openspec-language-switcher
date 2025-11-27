# cli-core Specification

## Purpose
TBD - created by archiving change create-language-switcher-cli. Update Purpose after archive.
## Requirements
### Requirement: Запуск через npx
Утилита MUST быть исполняемым Node.js скриптом, который можно запустить через `npx`.

#### Scenario: Успешный запуск
Given установлен Node.js
When пользователь запускает `npx openspec-language-switcher --help`
Then выводится справка по использованию

### Requirement: Модификация AGENTS.md
Утилита MUST перезаписывать файл `openspec/AGENTS.md` в текущей рабочей директории.

#### Scenario: Обновление файла
Given существует файл `openspec/AGENTS.md`
And выбран язык `ru`
When утилита запускается с аргументом `ru`
Then файл `openspec/AGENTS.md` содержит текст на русском языке

