import { useCounter } from "../../hook/useCounter";
import { useFetch } from "../../hook/useFetch";
import { CardPokemon } from "./CardPokemon";
import { LodingMessage } from "./LodingMessage";

export const MultiplesCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <div>
      <p>Informacion de Pokemon</p>

      {isLoading ? <LodingMessage /> : <CardPokemon id={counter} name={data.name} sprites={[
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
      ]}/>}

      <p>{JSON.stringify(data?.name, null, 2)}</p>

      <button onClick={() => (counter > 1 ? decrement() : null)}>
        anterior
      </button>

      <button onClick={() => increment()}>siguiente</button>
    </div>
  );
};
