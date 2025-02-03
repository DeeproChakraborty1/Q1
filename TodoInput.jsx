

import { useState, useCallback } from "react";
import { useTodos } from "../hooks/useTodos";

const TodoInput = () => {
    const [text, setText] = useState("");
    const { dispatch } = useTodos();

    const addTodo = useCallback(() => {
        if (text.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: text });
        setText("");
    }, [text, dispatch]);

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task..."
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};

export default TodoInput;
