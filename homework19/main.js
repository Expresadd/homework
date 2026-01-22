// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(price, discount, tax) {
    let res = price * discount / 100;
    res = price - res;
    tax = res * tax;
    res += tax;
    return res;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));


console.log(""); // отступ между задачами
// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const checkAccess = (userName, password) =>
    userName === "admin" && password === "123456"
        ? "Доступ разрешен"
        : "Доступ запрещен";

//     {
//     let res = userName === "admin" && password === "123456" ? "Доступ разрешен" : "Доступ запрещен";
//     return res;
// }

console.log(checkAccess("admin", "123456"));
console.log(checkAccess("user", "123456"));
console.log(checkAccess("admin", "123"));


console.log(""); // отступ между задачами
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// function getTimeOfDay(time) {
//     if (time >= 0 && time <= 5) {
//         console.log("Ночь");
//     }
//     if (time >= 6 && time <= 11) {
//         console.log("Утро");
//     }
//     if (time >= 12 && time <= 17) {
//         console.log("День");
//     }
//     if (time >= 18 && time <= 23) {
//         console.log("Вечер");
//     }
//     if (time < 0 || time > 23) {
//         console.log("Некорректное время");
//     }
// }

// getTimeOfDay(3);
// getTimeOfDay(11);
// getTimeOfDay(15);
// getTimeOfDay(22);
// getTimeOfDay(-1);

const getTimeOfDay = (hour) => {
    switch (true) {
        case hour >= 0 && hour <= 5:
            return "Ночь";
        case hour >= 6 && hour <= 11:
        return "Утро";
        case hour >= 12 && hour <= 17:
            return "День";
        case hour >= 18 && hour <= 23:
        return "Вечер";
        default: 
        return "Некорректное время";
    }
}

console.log(getTimeOfDay(3));
console.log(getTimeOfDay(10));
console.log(getTimeOfDay(15));
console.log(getTimeOfDay(22));
console.log(getTimeOfDay(24));

console.log(""); // отступ между задачами
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

const findFirstEven = (start, end) => {

    if (start > end) return "Некорректный диапазон";

    let numbers = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            numbers += i;
            return numbers;
        }
        if (start === end && i % 2 !== 0) {
            return "Чётных чисел нет";
        }
    }
}

console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));
