# Создание html-страницы с применением CSS

CSS используются для создания и изменения стиля элементов веб-страниц и пользовательских интерфейсов, написанных на
языках html и xhtml.

Объявление стиля состоит из двух частей: элемента веб-страницы - селектора - и блока объявления. Селектор сообщает
браузеру, какой элемент необходимо форматировать, а блок объявления (код в фигурных скобках), содержит форматирующие
команды, указывающие свойства со значениями.

В работе предлагается, используя язык разметки гипертекста html5 и каскадную таблицу стилей CSS3, разработать
веб-страницу формирования меню, содержащего главную ленту с графическим элементом, и два пункта с выпадающими подменю.
Пример задачи приведен на листингах 1.1 и 1.2.

*Листинг 1.1 - html-код страницы*

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Меню</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>

<nav id="main-menu">
    <ul id="nav">
        <li id="settings">
            <a href="#">
                <img alt="Настройки" src="images/settings.svg">
            </a>
        </li>
        <li>
            <a href="#">Пункт-1</a>
            <ul aria-label="Подменю">
                <li>
                    <a href="#">Команда 1-1</a>
                </li>
                <li>
                    <a href="#">Команда 1-2</a>
                </li>
            </ul>
        </li>
    </ul>
</nav>

<script defer src="js/script.js"></script>
</body>
</html>
```

*Листинг 1.2 - CSS-код страницы*

```css
/* Основной контейнер навигации */
#main-menu {
    display: flex;
    align-items: center;
}

/* Сброс стилей по умолчанию */
#main-menu * {
    box-sizing: border-box;
}

/* Основной список навигации */
#nav {
    display: flex;
    margin: 10px;
    padding: 5px;
    list-style: none;
    gap: 0;
}

/* Элементы первого уровня */
#nav > li {
    position: relative;
}

/* Ссылки первого уровня - базовые стили */
#nav > li > a {
    display: block;
    color: #00f;
    width: 80px;
    font-size: 16px;
    padding: 10px 0;
    text-align: center;
    background-color: #00f0f0;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

/* Стили для кнопки настроек */
#nav > #settings > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    padding: 0;
}

#nav > #settings > a img {
    width: 19px;
    height: 19px;
}

/* Вложенное меню */
#nav > li > ul {
    position: absolute;
    left: 0;
    top: 100%;
    display: none;
    min-width: 130px;
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #eee;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
}

/* Элементы вложенного меню */
#nav > li > ul > li {
    width: 100%;
}

/* Ссылки вложенного меню */
#nav > li > ul > li > a {
    display: block;
    padding: 5px 10px;
    color: #f00;
    font-size: 12px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover эффект для вложенного меню */
#nav > li > ul > li > a:hover {
    background-color: #0ffff0;
    color: #00f;
}

/* Показ вложенного меню при наведении */
#nav > li:hover > ul {
    display: block;
}

/* Адаптивность для мобильных устройств */
@media (width <= 768px) {
    #nav {
        flex-direction: column;
        align-items: flex-start;
    }

    #nav > li {
        width: 100%;
    }

    #nav > li > a {
        width: 100%;
    }

    #nav > li > ul {
        position: static;
        width: 100%;
        box-shadow: none;
    }
}
```

**Порядок выполнения работы.**

Выполнить задания, приведенные в колонках 2, 3, 4 и 5 таблицы 1.1. В колонке 2 указаны темы, для которых необходимо
разработать веб-страницу формирования меню, в колонке 3 - параметры главной ленты меню: направление главной ленты
меню (гориз - горизонтальное, верт - вертикальное); фон - цвет фона ленты меню; текст - цвет текста пунктов меню. В
колонках 4 и 5 указано количество пунктов второго и третьего подменю (два или три), цвет
подменю и цвет текста его пунктов.

Главное меню должно отстоять от верхней границы окна браузера на 20 px, слева - на 12 px и содержать слева графический
элемент.

*Таблица 1.1 - Варианты заданий*

| Номер варианта | Тема               | Главная лента меню: фон/текст | Подменю 1: пунктов/фон/текст | Подменю 2: пунктов/фон/текст |
|:--------------:|--------------------|-------------------------------|------------------------------|------------------------------|
|       1        | Торговая фирма     | Гориз/Pink/Red                | 3/Blue/Blue                  | 2/Aqua/Violet                |
|       2        | Ремонт авто        | Верт/Coral/Blue               | 2/Navy/Navy                  | 3/Olive/Aqua                 |
|       3        | Расписание занятий | Гориз/Gold/Navy               | 3/Olive/Aqua                 | 2/Navy/Navy                  |
|       4        | Летняя одежда      | Верт/Khaki/Aqua               | 2/Aqua/Violet                | 3/Blue/Blue                  |
|       5        | Ремонт компьютеров | Гориз/Plum/Black              | 3/Black/Red                  | 2/Tan/Gold                   |
|       6        | Швейное ателье     | Верт/Purple/Violet            | 2/Tan/Gold                   | 3/Violet/Blue                |
|       7        | Ремонт телевизоров | Гориз/Indigo/Tan              | 3/Violet/Blue                | 2/Purple/Navy                |
|       8        | Головные уборы     | Верт/Peru/Coral               | 2/Purple/Navy                | 3/Blue/Red                   |
|       9        | Зимняя одежда      | Гориз/Gray/Gold               | 3/Blue/Red                   | 2/Olive/Aqua                 |
|       10       | Продукты питания   | Верт/Red/Plum                 | 2/Olive/Aqua                 | 3/Peru/Gold                  |
|       11       | Детские игрушки    | Гориз/Lime/Peru               | 3/Peru/Gold                  | 2/Pink/Blue                  |
|       12       | Модели авто        | Верт/Aqua/Gray                | 2/Pink/Blue                  | 3/Blue/Blue                  |

**Контрольные вопросы**

1. Какие программные средства используются для создания веб-страниц?
2. Для чего используются CSS в веб-программировании?
3. Какова структура объявления стиля?
4. Из каких разделов состоит html-документ?
5. Как изменить параметры текста в html-документе (размер, цвет, стиль)?
6. Как создать таблицу в html-документе и вставить рисунок в ее ячейку?
7. Как построить гиперссылку, заголовок и список в html-документе?
8. Как построить гиперссылку на графическом элементе?
9. Как установить параметры ленты меню веб-страницы?
10. Как подключить таблицу CSS стилей к html-документу?
