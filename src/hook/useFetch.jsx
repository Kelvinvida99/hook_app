import { useCallback, useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const getPokemon = useCallback(async (url) => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1500));

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

    localCache[url] = data;
  }, []);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  useEffect(() => {
    if (url) {
      getPokemon(url);
    }
  }, [getPokemon, url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
