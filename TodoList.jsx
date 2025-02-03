

import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todos } = useTodos();

    return (
        <div>
            {todos.length === 0 ? <p>No tasks available</p> : 
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    );
};

export default TodoList;
