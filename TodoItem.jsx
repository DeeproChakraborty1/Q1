

import { useTodos } from "../hooks/useTodos";

const TodoItem = ({ todo }) => {
    const { dispatch } = useTodos();

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>X</button>
        </div>
    );
};

export default TodoItem;
