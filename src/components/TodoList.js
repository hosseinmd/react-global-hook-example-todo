import React from "react";
import Todo from "./Todo";
import { useStore } from "../store";

/**
 *
 * @typedef {object} TodoItem
 * @property {number} id
 * @property {boolean} completed
 * @property {string} text
 */

/**
 * @param {object} props
 * @param {TodoItem[]} props.todos
 */
const TodoList = () => {
  const [state, actions] = useStore();

  const todos = getVisibleTodos(state.todos, state.filter);

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => actions.toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

/**
 *
 * @param {TodoItem[]} todos
 * @param {"SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE"} filter
 */
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default TodoList;
