import React from "react";
import Footer from "./Footer";
import TodoList from "../components/TodoList";
import AddTodo from "./AddTodo";
import { Provider } from "react-global-hook";
import { Store } from "../store";

const App = () => (
  <Provider store={Store}>
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  </Provider>
);
export default App;
