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

users.push(
    {
        name: 'Ann',
        age: 19,
        isAdmin: false
    },
    {
        name: 'Jack',
        age: 43,
        isAdmin: true
    });

// console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    let sumAllAges = 0;

    users.forEach(user => {
        sumAllAges += user.age;
    });

    return sumAllAges / users.length;
}

// console.log("Средний возраст пользователей:", getUserAverageAge(users));

// function getUserAverageAge(users) {
//     let sumAge = 0;
//     let srch = 0;

//     for (let i = 0; i < users.length; i++) {
//         sumAge += users[i].age;
//     }
//     srch = sumAge / users.length;

//     return srch;
// }

// console.log("Средний возраст пользователей: ", getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
    const admins = [];

    users.forEach(user => {
        if (user.isAdmin === true) {
            admins.push(user);
        }
    });

    return admins;
}

// console.log(getAllAdmins(users));

// function getAllAdmins(users) {

//     const usersAdmin = [];

//     users.forEach((element) => {
//         if (element.isAdmin == true) {
//             return usersAdmin.push(element);
//         }
//     });
//     return usersAdmin;
// }

// console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n = 1) {

    const arrayLength = arr.length;
    
    if (arrayLength < n) {
        console.error(`n(${n}) не может быть больше длины массива: ${arrayLength}`);
        return;
    }

const newArray = [];

for(let i = 0; i < n; i++) {
    newArray.push(arr[i]);
}

return newArray;
}

console.log(first([10, 23, 44, 65], 6));

// const newArray = ["Alex", "Bob", "John", "Michel", "Max"];

// function first(arr, n) {
//     for (let i = 0; i < n; i++) {
//         if (n === n && n <= arr.length && n > 0) {
//             console.log(arr[i]);
//         }
//     }
//     if (n === 0) {
//         return arr = [];
//     } else if (n === undefined || n == isNaN) {
//         return arr[0];
//     } else if (n > arr.length) {
//         console.error("Вы ввели число больше, чем элементов в данном массиве.");
//         return;
//     }

    // else {
    //     return arr[0];
    // }

// }

// console.log(first(newArray, 1));
