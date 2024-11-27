import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDelete, toggleTodo }) => {


  if (!Array.isArray(todos) || todos.length === 0) {
    return <p>No hay tareas disponibles</p>;
  }

  return (
    <ul className="list-group">
      {(todos || []).map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={onDelete} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelete: PropTypes.func,
  toggleTodo: PropTypes.func,
};
