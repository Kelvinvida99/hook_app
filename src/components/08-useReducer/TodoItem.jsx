import PropTypes from "prop-types";

export const TodoItem = ({ todo, onDelete, toggleTodo }) => {
  //console.log("esto es todo", todo)
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}
        onClick={() => toggleTodo(todo.id)}
      >{todo.description}</span>
      <button 
        className="btn btn-danger"
        onClick={ () => onDelete(todo.id) }
      >Borrar</button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
  toggleTodo: PropTypes.func,
};
