# Клиентское программирование

1. [Создание html-страницы с применением CSS](labs/1-creating-html-page-with-css)
2. [Создание простых скриптов на JavaScript](labs/2-creating-simple-scripts-in-javascript)
3. [Функции и обработка событий JavaScript](labs/3-functions-and-event-handling-in-javascript)
4. [Операторы ветвлений и циклов JavaScript](labs/4-branching-operators-and-loops-in-javascript)
5. [Методы JavaScript](labs/5-methods-in-javascript)
6. [Работа с массивами на JavaScript](labs/6-working-with-arrays-in-javascript)
7. [Работа с элементами управления на JavaScript](labs/7-working-with-controls-in-javascript)
8. [Работа с формами на JavaScript](labs/8-working-with-forms-in-javascript)
9. [Работа с изображениями на JavaScript](labs/9-working-with-images-in-javascript)
10. [Обработка событий на JavaScript](labs/10-event-handling-in-javascript)
11. [Основные методы JQuery](labs/11-basic-methods-in-jquery)
12. [Основные события JQuery](labs/12-basic-events-in-jquery)

## Описание проекта

Данный репозиторий содержит учебные материалы и лабораторные работы по дисциплине "Клиентское программирование". Проект
охватывает основные аспекты веб-разработки на стороне клиента, включая HTML, CSS, JavaScript и jQuery.

Каждая лабораторная работа представляет собой отдельный модуль, фокусирующийся на конкретной теме веб-разработки.
Главная страница предоставляет удобный интерфейс для навигации между лабораторными работами.

## Технические требования

Для работы с проектом вам потребуется:

1. **Node.js**
2. **npm**
3. Современный веб-браузер (Chrome, Firefox, Edge и т.д.)
4. Текстовый редактор или IDE

## Установка и запуск

### Клонирование репозитория

```bash
git clone https://github.com/yourdisenchantment/global-information-space.git
cd client-programming
```

### Установка зависимостей

```bash
npm install
```

### Запуск проекта в режиме разработки

```bash
npm run dev
```

После запуска проект будет доступен по адресу `http://localhost:3000` (или другому порту, указанному в терминале).

### Сборка проекта

```bash
npm run build
```

Собранные файлы будут размещены в директории `dist/`.

## Структура проекта

```
client-programming/
├── labs/                  # Директория с лабораторными работами
│   ├── 1-creating-html-page-with-css/
│   ├── 2-creating-simple-scripts-in-javascript/
│   └── ...
├── css/                   # Глобальные стили
│   └── style.css
├── js/                    # JavaScript файлы
│   └── script.js
├── node_modules/          # Зависимости (создается после npm install)
├── .editorconfig          # Настройки редактора
├── .eslintrc.json         # Конфигурация ESLint
├── .gitignore             # Файлы, игнорируемые Git
├── .prettierrc            # Конфигурация Prettier
├── .stylelintrc.json      # Конфигурация Stylelint
├── index.html             # Главная страница
├── package.json           # Информация о проекте и зависимостях
├── README.md              # Документация проекта
└── vite.config.js         # Конфигурация Vite
```

## Использование

1. Откройте главную страницу проекта в браузере.
2. Выберите интересующую вас лабораторную работу из списка.
3. Следуйте инструкциям, представленным в каждой лабораторной работе.
