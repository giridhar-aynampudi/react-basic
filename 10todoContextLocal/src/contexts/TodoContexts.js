import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: 'Task 1',
            completed: false
        }
    ],
    addTodo: (todo) => {
        // Add new todo
    },
    updateTodo: (id, newTodo) => {
        // Update todo
    },
    deleteTodo: (id) => {
        // Delete todo
    },
    toggleComplete: (id) => {
        // Toggle todo status
    }
});

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;