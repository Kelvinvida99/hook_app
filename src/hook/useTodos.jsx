import { useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

const init = () => [
  {
    id: new Date().getTime(),
    description: "descubrir la piedra filosofal",
    done: false,
  },
];

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
  };
};
