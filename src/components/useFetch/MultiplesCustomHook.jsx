import { useFetch } from "../../hook/useFetch";

export const MultiplesCustomHook = () => {
  const { data, isLoading } = useFetch("https://pokeapi.co/api/v2/pokemon/1");

  return (
    <div>
      <p>Informacion de Gongig</p>

      {isLoading && <h4>Cargando...</h4>}

      <p>{JSON.stringify(data?.name, null, 2)}</p>
    </div>
  );
};
