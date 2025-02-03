

import React, { useState, useCallback, useMemo } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

const heavyComputation = (task) => {
  console.log("Performing heavy computation...");
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return `${task} (processed)`;
};

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = useCallback((task) => {
    setTodos((prev) => [...prev, { id: Date.now(), task, completed: false }]);
  }, []);

  // Toggle Todo Status
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Delete Todo
  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <div>
        {todos.map((todo) => {
          const processedTask = useMemo(() => heavyComputation(todo.task), [todo.task]);
          return (
            <Todo
              key={todo.id}
              todo={{ ...todo, task: processedTask }}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
