import { useState } from "react";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todoList, settodoList] = useState([]);
  const [inputTodo, setinputTodo] = useState("");

  const addTodo = () => {
    if (inputTodo.trim() === "") {
      return;
    }
    settodoList((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          text: inputTodo.trim(),
          completed: false,
        },
      ];
    });
    setinputTodo("");
  };

  const removeTodo = (todoId) => {
    const updatedList = todoList.filter((todo) => {
      return todo.id !== todoId;
    });
    settodoList(updatedList);
    return;
  };

  const toggleComplete = (todoId) => {
    const updatedList = todoList.map((todo, idx) => {
      return {
        ...todo,
        completed: todo.id === todoId ? !todo.completed : todo.completed,
      };
    });
    settodoList(updatedList);
    return;
  };

  return (
    <>
      <h1>Todo List</h1>
      <label>
        <span>Item name </span>
        <input
          name={"name"}
          value={inputTodo}
          type="text"
          onChange={(e) => setinputTodo(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={()=>addTodo}>Add</button>
        <button onClick={()=>addTodo()}>Add</button>
      </label>
      <ul>
        {todoList &&
          todoList.map((todo, idx) => {
            return (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onClick={() => toggleComplete(todo.id)}
                  />
                  <span className={todo.completed ? styles.strikedText: "" } >{todo.text}</span>
                  <button onClick={() => removeTodo(todo.id)}>Delete</button>
                </label>
              </li>
            );
          })}
      </ul>
    </>
  );
}
