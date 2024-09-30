import { useForm } from "../../hook/useForm";

export const FormHook = () => {
  const { formState, inputOnChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: ""
  });

  const { username = "", email = "", password = "" } = formState;

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={inputOnChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="kelvin@gmail.com"
        name="email"
        value={email}
        onChange={inputOnChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={inputOnChange}
      />

      <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
    </>
  );
};
