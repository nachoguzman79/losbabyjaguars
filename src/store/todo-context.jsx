import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export function TodoProvider({children}) {
    const [todos, setTodos] = useState([])

    const addTodo = (newTask) => {
        setTodos([...todos, { id: Date.now(), task: newTask, completed: false}]);
    }

    console.log(todos);
    return (
        <TodoContext.Provider value={{
            todos,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}