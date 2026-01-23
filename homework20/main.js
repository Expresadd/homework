// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

console.log(`
    Задача 1.
    `);

const percon = {
    name: "Олег",
    age: 21,
    job: "Студент",
}

console.log(percon);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

console.log(`
    Задача 2.
    `);

const object1 = {
    name: "Alex",
    age: 23,
    isFun: true,
}

const isEmpty = (object1) => {
    for (const key in object1) {
        switch (true) {
            case (typeof (key) == "string"):
                return true;
            default:
                return false;
        }
    }
}

console.log(isEmpty(object1));


// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

console.log(`
    Задача 3.
    `);

const task = {
    title: "123",
    description: "456",
    isCompleted: true,
}

let object;

const cloneAndModify = (object, modifications) => {
    modifications = { title: "modifications", name: "task copy", };
    object = { ...task, ...modifications };
    for (let key in object) {
        console.log(`${key}:`, object[key]);
    }
    return object;
}

cloneAndModify();

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

console.log(`
    Задача 4.
    `);

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

const callAllMethods = (object) => {
    for (let method in object) {
        if (typeof (object[method]) == "function") {
            object[method]();
        }
    }
}

callAllMethods(myObject);
