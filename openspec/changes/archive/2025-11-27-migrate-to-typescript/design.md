# Design: Архитектура TypeScript проекта

## Architecture

### Структура директорий
- `src/`: Исходный код на TypeScript.
  - `bin/index.ts`: Точка входа CLI.
  - `lib/`: Библиотечный код.
- `dist/`: Скомпилированный JavaScript код (генерируется автоматически).
- `locales/`: JSON файлы локализации (остаются в корне или переносятся в `src/locales` и копируются). *Решение: Оставить в корне для простоты доступа через `fs` или копировать в `dist`.*
  - *Decision*: Оставить `locales` в корне проекта, так как это данные, а не код.

### Конфигурация TypeScript
- `target`: `ES2020` (или совместимый с актуальными версиями Node.js).
- `module`: `commonjs` (для совместимости с текущим окружением) или `NodeNext`.
- `outDir`: `./dist`.
- `strict`: `true`.
- `esModuleInterop`: `true`.

### Сборка
- `npm run build`: Запускает `tsc`.
- `prepublishOnly`: Запускает `npm run build` перед публикацией пакета.

### Зависимости
- `typescript`: devDependency.
- `@types/node`: devDependency.
- `@types/commander`: devDependency.
