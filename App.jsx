

import { TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./styles/TodoApp.css";

const App = () => {
    return (
        <TodoProvider>
            <div className="todo-app">
                <h1>Todo List</h1>
                <TodoInput />
                <TodoList />
            </div>
        </TodoProvider>
    );
};

export default App;
