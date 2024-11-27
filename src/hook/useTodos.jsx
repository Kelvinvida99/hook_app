import { useEffect, useReducer } from "react";
import { todoReducer } from "../components/08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export const useTodos = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) 
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
      done: false,
    };
    dispatch(action);
  };

  const handleDelete = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    })
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    })
  }

  return {
    todos,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,
    total: todos.length,
    pendient: (todos.filter((todo) => todo.done === false)).length
  };
};
