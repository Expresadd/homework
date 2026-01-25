// Задание 1.
// Дан массив пользователей:

const users = [
    {
        name: 'Alex',
        age: 24,
        isAdmin: false
    },
    {
        name: 'Bob',
        age: 13,
        isAdmin: false
    },
    {
        name: 'John',
        age: 31,
        isAdmin: true
    },
    {
        name: 'Jane',
        age: 20,
        isAdmin: false
    },
]

// Добавьте в конец массива двух пользователей:

users.push({
    name: 'Ann',
    age: 19,
    isAdmin: false
},
    {
        name: 'Jack',
        age: 43,
        isAdmin: true
    })

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    let sumAge = 0;
    let srch = 0;

    for (let i = 0; i < users.length; i++) {
        sumAge += users[i].age;
        srch = sumAge / users.length;
    }

    return srch;
}

console.log("Средний возраст пользователей: ", getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {

    const usersAdmin = [];

    users.forEach((element) => {
        if (element.isAdmin == true) {
            usersAdmin.push(element);
        }
    });
    console.log(usersAdmin);
}

getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const newArray = ["Alex", "Bob", "John", "Michel", "Max"];

function first(arr, n) {
    for (let i = 0; i < n; i++) {
        if (n === n && n <= arr.length) {
            console.log(newArray[i]);
        }
    }
    if (n === 0) {
        return arr = [];
    } else if (n === "undefined" || n == isNaN) {
        return arr[0];
    } else if (n > arr.length) {
        console.error("Вы ввели число больше, чем элементов в данном массиве.")
        return;
    }

}

console.log(first(newArray, 4));
