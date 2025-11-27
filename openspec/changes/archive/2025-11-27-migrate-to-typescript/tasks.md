# Tasks: Миграция на TypeScript

1.  [x] Установить TypeScript и типы (`typescript`, `@types/node`, `@types/commander`). <!-- id: 1 -->
2.  [x] Инициализировать `tsconfig.json` с настройками для Node.js. <!-- id: 2 -->
3.  [x] Создать директорию `src` и перенести туда исходный код (`bin/index.js` -> `src/index.ts`, `lib/patcher.js` -> `src/lib/patcher.ts`). <!-- id: 3 -->
4.  [x] Исправить ошибки типизации в `.ts` файлах. <!-- id: 4 -->
5.  [x] Обновить `package.json`: изменить `main` и `bin` на файлы из `dist/`, обновить скрипт `build`. <!-- id: 5 -->
6.  [x] Добавить `dist/` в `.gitignore`. <!-- id: 6 -->
7.  [x] Проверить работу `npm run build` и запуск утилиты. <!-- id: 7 -->
