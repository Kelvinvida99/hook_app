import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../../hook/useTodos";

export const TodoApp = () => {
  const { todos, handleNewTodo } = useTodos();

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};