import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export default function TodoProvider({children}) {
    const [todos, setTodos] = useState([])

    const addTodo = (newTask) => {
        setTodos([...todos, { id: Date.now(), task: newTask, completed: false}]);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    console.log(todos);
    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}