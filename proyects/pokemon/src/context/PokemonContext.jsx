import { createContext, useState, useEffect, useMemo } from "react";
import { getAllPokemos, searchPokemon } from "../services/pokemons";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState();
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [searchFilter, setSearchFilter] = useState([]);

  useEffect(() => {
    setLoading(true);
    searchPokemon(search)
      .then((res) => {
        setSearchFilter(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);
  const filterPokemons = useMemo(() => {
    console.log("filter seacrh", searchFilter);
    if (search) {
      return searchFilter;
    } else {
      return pokemons;
    }
  }, [pokemons, searchFilter]);

  useEffect(() => {
    setLoading(false);
    const limit = 6;
    const offset = (page - 1) * limit;
    getAllPokemos({ offset, limit })
      .then((res) => {
        const pokemonList = res.results;
        const pokemonPromises = pokemonList.map((pokemon) => {
          return fetch(pokemon.url).then((res) => {
            if (!res.ok) {
              throw new Error("Ocurrió algo inesperado");
            }
            return res.json();
          });
        });
        return Promise.all(pokemonPromises);
      })
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <PokemonContext.Provider
      value={{
        setSearch,
        filterPokemons,
        pokemons,
        setPage,
        page,
        error,
        loading,
        pokemonInfo,
        setPokemonInfo,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
