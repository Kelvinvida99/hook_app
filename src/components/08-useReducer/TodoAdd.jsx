import PropTypes from "prop-types";
import { useForm } from "../../hook/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, inputOnChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(description.length <= 1) return

    const newAction = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    handleNewTodo(newAction)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué vamos hacer?"
        className="form-control"
        name="description"
        value={description || ""}
        onChange={inputOnChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  handleNewTodo: PropTypes.func
}