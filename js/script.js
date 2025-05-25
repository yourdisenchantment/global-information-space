document.addEventListener("DOMContentLoaded", () => {
    const labGrid = document.getElementById("labGrid");

    // Массив данных о лабораторных работах
    const labs = [
        {
            title: "Создание html-страницы с применением CSS",
            description: "Изучение основ HTML и CSS для создания веб-страниц.",
            link: "./labs/1-creating-html-page-with-css/index.html",
        },
        {
            title: "Создание простых скриптов на JavaScript",
            description: "...",
            link: "./labs/2-creating-simple-scripts-in-javascript/index.html",
        },
        {
            title: "Функции и обработка событий JavaScript",
            description: "...",
            link: "./labs/3-functions-and-event-handling-in-javascript/index.html",
        },
        {
            title: "Операторы ветвлений и циклов JavaScript",
            description: "...",
            link: "./labs/4-branching-operators-and-loops-in-javascript/index.html",
        },
        {
            title: "Методы JavaScript",
            description: "...",
            link: "./labs/5-methods-in-javascript/index.html",
        },
        {
            title: "Работа с массивами на JavaScript",
            description: "...",
            link: "./labs/6-working-with-arrays-in-javascript/index.html",
        },
        {
            title: "Работа с элементами управления на JavaScript",
            description: "...",
            link: "./labs/7-working-with-controls-in-javascript/index.html",
        },
        {
            title: "Работа с формами на JavaScript",
            description: "...",
            link: "./labs/8-working-with-forms-in-javascript/index.html",
        },
        {
            title: "Работа с изображениями на JavaScript",
            description: "...",
            link: "./labs/9-working-with-images-in-javascript/index.html",
        },
        {
            title: "Обработка событий на JavaScript",
            description: "...",
            link: "./labs/10-event-handling-in-javascript/index.html",
        },
        {
            title: "Основные методы JQuery",
            description: "...",
            link: "./labs/11-basic-methods-in-jquery/index.html",
        },
        {
            title: "Основные события JQuery",
            description: "...",
            link: "./labs/12-basic-events-in-jquery/index.html",
        },
    ];

    // Генерация карточек
    labs.forEach((lab) => {
        const card = document.createElement("a");
        card.href = lab.link;
        card.classList.add("lab-card");
        card.innerHTML = `
            <h3 class="lab-card-title">${lab.title}</h3>
            <p class="lab-card-description">${lab.description}</p>
        `;
        labGrid.appendChild(card);
    });
});
