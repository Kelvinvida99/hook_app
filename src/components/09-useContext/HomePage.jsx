import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>HomePage</h1>
      <hr />

      <div>{JSON.stringify(user, null, 3)}</div>
    </>
  );
};
