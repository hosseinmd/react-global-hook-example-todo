import React from "react";
import { useStore } from "../store";

/**
 * @param {object} props
 * @param {boolean} props.active
 * @param {React.ReactNode} props.children
 * @param {function} props.onClick
 */
const Link = ({ filter, children }) => {
  const [state, actions] = useStore(["filter"]);
  const active = filter === state.filter;

  return (
    <button
      onClick={() => actions.setVisibilityFilter(filter)}
      disabled={active}
      style={{
        marginLeft: "4px"
      }}
    >
      {children}
    </button>
  );
};

export default Link;
