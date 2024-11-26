import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

/* const init = [{
  id: new Date().getTime(),
  description: "descubir la piedra filosofal",
  done: false,
}] */

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
      {(todos || []).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
};
