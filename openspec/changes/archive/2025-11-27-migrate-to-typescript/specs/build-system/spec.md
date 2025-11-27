# Spec: Система сборки

## ADDED Requirements

### Requirement: Компиляция TypeScript
Проект MUST использовать TypeScript компилятор для преобразования исходного кода в JavaScript.

#### Scenario: Запуск сборки
Given исходный код находится в `src/`
When пользователь запускает `npm run build`
Then в директории `dist/` появляются скомпилированные `.js` файлы
And команда завершается с кодом 0
