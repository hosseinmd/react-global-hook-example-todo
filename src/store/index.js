import { createStore, createHooks } from "react-global-hook";

let nextTodoId = 0;

const initialState = {
  todos: [],
  /**@type {"SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE"} */
  filter: "SHOW_ALL"
};

const actions = ({ setState, getState }) => ({
  addTodo(text) {
    const { todos } = getState();
    setState({
      todos: [
        ...todos,
        {
          id: nextTodoId++,
          text: text,
          completed: false
        }
      ]
    });
  },
  setVisibilityFilter(filter) {
    setState({
      filter
    });
  },
  toggleTodo(id) {
    const { todos } = getState();
    setState({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  },
  reset() {
    setState(initialState);
  }
});

export const Store = createStore(initialState, actions);

Store.addListener(state => console.log(state));

export const useStore = createHooks(Store);
