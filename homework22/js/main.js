"use strict";



const todoKeys = {
    id: "id",
    text: "text",
    is_complited: "is_complited"
}

const todos = [];

const errNotFound = todoId => `Todo with id ${todoId} not found`;


const getNewTodoId = (todos) => {
    return (
        todos.reduce((maxId, todo) => {
            return Math.max(maxId, todo[todoKeys.id]);
        }, 0) + 1
    );
};

const createTodo = (todos, text) => {
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos),
        [todoKeys.text]: text,
        [todoKeys.is_complited]: false
    };

    todos.push(newTodo);
    return newTodo;
};

const compliteTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => { return todo[todoKeys.id] === todoId });
    if (todo === undefined) {
        console.error(errNotFound());
        return null;
    }
    todo[todoKeys.is_complited] = !todo[todoKeys.is_complited];
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errNotFound());
        return todos;
    }
    todos.splice(todoIndex, 1);
    return todos;
};

// const deleteTodoById = (todos, todoId) => {
//     return todos.filter(todo => todo[todoKeys.id] !== todoId)
// };