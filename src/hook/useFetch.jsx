import { useEffect, useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await resp.json();
    console.log(data);
  };

  return {
    data: state.data,
  };
};
