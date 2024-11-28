import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <div>{JSON.stringify(user, null, 3)}</div>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "kelvin", email: "kelvin@google.com" })
        }
      >
        Set User
      </button>
    </>
  );
};
