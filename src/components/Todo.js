import React from "react";

/**
 * @param {object} props
 * @param {boolean} props.completed
 * @param {string} props.text
 * @param {function} props.onClick
 */
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);
export default Todo;
