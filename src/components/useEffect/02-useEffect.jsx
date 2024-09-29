import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "kelvin",
    email: "kelvinvida99@gmail.com",
  });

  const { username, email } = formState;

  const inputOnChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
    setFormState({
      ...setFormState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect");
  });

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
    </>
  );
};
