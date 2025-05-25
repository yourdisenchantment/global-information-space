document.addEventListener("DOMContentLoaded", function () {
    // --- Настройка для Варианта 3 ---
    const variantNumber = 3;
    // Номера символов для Задания 1 (из таблицы, начинаются с 1)
    const task1Numbers = [4, 5, 7, 9, 12, 18];
    // Операции для Задания 2 (для Варианта 3: "+", "-", "%")
    // Порядок операций в выражении: A + B - C % D
    // Выражения для Задания 4:
    // Если ДА: y = ((a - b / c) ^ 2)
    // Если НЕТ: f = d * (2 * f - e / 2)

    // 22 первые буквы русского алфавита (строчные)
    const russianAlphabet = "абвгдежзийклмнопрстуфх";

    // --- Задание 1 ---
    console.log("--- Задание 1 ---");

    let task1ResultString = "";
    const separator = `-${variantNumber}-`;

    for (let i = 0; i < task1Numbers.length; i++) {
        // Номер из таблицы (1-based), переводим в индекс массива (0-based)
        const charIndex = task1Numbers[i] - 1;
        const character = russianAlphabet[charIndex]; // Получаем символ

        task1ResultString += character;

        // Добавляем разделитель, кроме после последнего символа
        if (i < task1Numbers.length - 1) {
            task1ResultString += separator;
        }
    }
    // Добавляем номер варианта в конец
    task1ResultString += variantNumber;

    // Выводим результат с помощью alert
    alert("Задание 1:\n" + task1ResultString);
    console.log("Результат Задания 1:", task1ResultString); // Вывод в консоль для проверки

    // --- Задание 2 ---
    console.log("\n--- Задание 2 ---");

    // Строим строку из номеров символов Задания 1 (как строки '04', '05' и т.д.)
    // Нужно убедиться, что числа меньше 10 имеют ведущий ноль, чтобы строка была ровно 12 цифр.
    const numbersString = task1Numbers.map((num) => String(num).padStart(2, "0")).join("");
    console.log("Строка из номеров символов (12 цифр):", numbersString); // Ожидаем "040507091218"

    // Выделяем четыре трехзначных числа
    const numA = parseInt(numbersString.substring(0, 3)); // "040" -> 40
    const numB = parseInt(numbersString.substring(3, 6)); // "507" -> 507
    const numC = parseInt(numbersString.substring(6, 9)); // "091" -> 91
    const numD = parseInt(numbersString.substring(9, 12)); // "218" -> 218

    console.log("Выделенные числа: A=", numA, ", B=", numB, ", C=", numC, ", D=", numD);

    // Вычисляем выражение согласно Заданию 2 для Варианта 3: A + B - C % D
    // JavaScript соблюдает приоритет операций: сначала "%", затем "-", затем "+"
    let task2CalculationResult = numA + numB - (numC % numD); // Модуль выполняется первым
    // C % D => 91 % 218 = 91
    // B - (C % D) => 507 - 91 = 416
    // A + (B - (C % D)) => 40 + 416 = 456
    // Поэтому numA + numB - numC % numD будет вычислено как numA + (numB - (numC % numD))

    console.log(`Вычисляем: ${numA} + ${numB} - ${numC} % ${numD} = ${task2CalculationResult}`);

    // Выводим результат на страницу в элемент с id="task2-output"
    const task2Output = document.getElementById("task2-output");
    if (task2Output) {
        task2Output.innerHTML = `
            <h3>Задание 2</h3>
            <p>Строка из номеров символов: <code>${numbersString}</code></p>
            <p>Выделенные трехзначные числа: <code>${numA}, ${numB}, ${numC}, ${numD}</code></p>
            <p>Выражение: <code>${numA} + ${numB} - ${numC} % ${numD}</code></p>
            <p>Результат: <strong>${task2CalculationResult}</strong></p>
        `;
    } else {
        console.error("Элемент для вывода Задания 2 не найден!");
    }

    // --- Задание 3 ---
    console.log("\n--- Задание 3 ---");

    // Строим строку из букв, номера которых заданы в Задании 1.
    // Номера: 4, 5, 7, 9, 12, 18. Индексы в строке (0-based): 3, 4, 6, 8, 11, 17.
    const task3Indices = task1Numbers.map((num) => num - 1); // Преобразуем 1-based в 0-based индексы

    let task3ResultString = "";
    for (let i = 0; i < task3Indices.length; i++) {
        const index = task3Indices[i];
        const character = russianAlphabet[index]; // Получаем символ по индексу
        task3ResultString += character;
    }

    console.log("Строка для Задания 3:", task3ResultString); // Ожидаем "гджилр"

    // Выводим результат на страницу в элемент с id="task3-output" с помощью innerHTML
    const task3Output = document.getElementById("task3-output");
    if (task3Output) {
        task3Output.innerHTML = `
            <h3>Задание 3</h3>
            <p>Номера символов: <code>${task1Numbers.join(", ")}</code></p>
            <p>Индексы в строке (0-based): <code>${task3Indices.join(", ")}</code></p>
            <p>Строка из символов: <strong>${task3ResultString}</strong></p>
        `;
    } else {
        console.error("Элемент для вывода Задания 3 не найден!");
    }

    // --- Задание 4 ---
    console.log("\n--- Задание 4 ---");

    // Используем числа из Задания 2 как a, b, c, d
    const a_val = numA; // 40
    const b_val = numB; // 507
    const c_val = numC; // 91
    const d_val = numD; // 218

    // В формуле для 'f' есть переменные 'f' и 'e', их значения не заданы.
    // Используем некоторые примерные числа для демонстрации вычисления.
    const e_val_formula4 = 5; // Примерное значение для переменной 'e' в формуле 4
    const f_val_formula4 = 10; // Примерное значение для переменной 'f' в формуле 4

    // Построение запроса с помощью confirm
    const confirmation = confirm("Задание 4: Нажмите 'ОК' (Да) для вычисления y, 'Отмена' (Нет) для вычисления f.");

    let task4Result;
    let formulaUsed;

    if (confirmation) {
        // Вычисление для 'Да' (OK)
        // y = ((a - b / c) ^ 2)
        // Убедимся, что "c" не равно 0 перед делением. В нашем случае c = 91, так что это безопасно.
        task4Result = Math.pow(a_val - b_val / c_val, 2);
        formulaUsed = `y = ((${a_val} - ${b_val} / ${c_val}) ^ 2)`;
        console.log("Выбрано 'Да'. Вычислено y:", task4Result);
    } else {
        // Вычисление для 'Нет' (Отмена)
        // f = d * (2 * f - e / 2)
        // Используем наши примерные значения для e и f в формуле
        task4Result = d_val * (2 * f_val_formula4 - e_val_formula4 / 2);
        formulaUsed = `f = ${d_val} * (2 * ${f_val_formula4} - ${e_val_formula4} / 2)`;
        console.log("Выбрано 'Нет'. Вычислено f:", task4Result);
    }

    // Вместо document.writeln() создаем новый элемент и добавляем его в конец main
    const task4Container = document.createElement("div");
    task4Container.className = "task-output";
    task4Container.id = "task4-output";
    task4Container.innerHTML = `
        <h3>Задание 4</h3>
        <p>Выбран вариант: <strong>${confirmation ? "Да (y)" : "Нет (f)"}</strong></p>
        <p>Использованная формула: <code>${formulaUsed}</code></p>
        <p>Результат: <strong>${task4Result}</strong></p>
    `;

    // Находим main и добавляем в него наш новый элемент
    const mainContainer = document.querySelector(".main .container");
    if (mainContainer) {
        mainContainer.appendChild(task4Container);
    } else {
        // Если не нашли .main .container, добавляем в body
        document.body.appendChild(task4Container);
    }
});
