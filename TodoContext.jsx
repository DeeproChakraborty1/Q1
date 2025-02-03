

import { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, JSON.parse(localStorage.getItem("todos")) || []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};
