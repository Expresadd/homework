// Задача 2.
// 1. Объявите переменную age с числовым значением.
// 2. С помощью тернарного оператора (вложенного, если нужно) присвойте переменной discount значение скидки:
//    2.1. Если age меньше 18 – скидка 10%.
//    2.2. Если age от 18 до 65 (включительно) – скидка 20%.
//    2.3. Если age больше 65 – скидка 30%.
// 3. Выведите значение discount в консоль.
// 4. *Дополнительное задание: перепишите задачу на switch-case.

const age = 70;
let discount;

if (age < 18) {
    discount = 10;
} else if (age >= 18 && age <= 65) {
    discount = 20;
} else {
    discount = 30;
}

console.log(`Ваша скидка составляет ${discount}%!`);

//*Дополнительное задание:

const age2 = 10;
let discount2;

switch (age2) {
    case (age2 < 18? discount2 = 10 : discount2):
        break;
    case (age2 >= 18 && age2 <= 65 ? discount2 = 20 : discount2):
        break
    default:
        discount2 = 30;
}

console.log(`Ваша скидка составляет ${discount2}%!`);

