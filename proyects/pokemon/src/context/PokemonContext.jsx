import { useRef } from "react";
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
  const initialPokemons = useRef([]);

  // Efecto para buscar por página
  useEffect(() => {
    setLoading(true);
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
        initialPokemons.current = res;
        setPokemons(res);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  // Efecto para buscar por nombre
  useEffect(() => {
    if (search) {
      setLoading(true);
      searchPokemon(search)
        .then((res) => {
          setPokemonInfo(null);
          setSearchFilter([res]);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          setSearchFilter([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [search]);

  //filtrar por pagina o por nombre
  const filterPokemons = useMemo(() => {
    return search ? searchFilter : pokemons;
  }, [pokemons, search, searchFilter]);
  //Resetar filtros
  const resetFilter = () => {
    const data = initialPokemons.current;
    setSearch("");
    setPokemons(data);
    setError(null);
  };
  return (
    <PokemonContext.Provider
      value={{
        setSearch,
        filterPokemons,
        setPage,
        search,
        page,
        error,
        loading,
        pokemonInfo,
        setPokemonInfo,
        resetFilter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
