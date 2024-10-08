import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getPokemon(url);
  }, [url]);

  const getPokemon = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });

      return;
    }

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });
  };

  return {
    data: state.data,
    isLoading: false,
    hasError: false,
    error: null,
  };
};
