

import React from "react";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default React.memo(Todo);
