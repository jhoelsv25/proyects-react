import React from "react";
import { InfoPokemon } from "../components/InfoPokemon";
import { Card } from "../components/Card";
import "./Home.css";
import { usePokemon } from "../hooks/usePokemon";
export const Home = () => {
  const { setPage, page, error, loading, pokemonInfo, filterPokemons } =
    usePokemon();
  return (
    <section id="home" className="relative h-full gap-3 px-5">
      <article className=" w-full">
        {loading && (
          <p className="text-blue-500 font-bold text-xl text-center mt-10">
            Cargando...
          </p>
        )}
        {error && (
          <p className="text-red-500 font-bold text-xl text-center mt-10">
            {error.message}
          </p>
        )}
        {filterPokemons.length > 0 && <Card data={filterPokemons} />}
      </article>
      {loading && !pokemonInfo && (
        <p className="text-blue-500 font-bold text-xl text-center mt-10">
          Cargando...
        </p>
      )}
      {pokemonInfo && (
        <aside>
          <InfoPokemon />
        </aside>
      )}

      <footer className="flex justify-between  py-3">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={
            page === 1
              ? "opacity-0"
              : ` inline-block bg-blue-500 py-1.5 w-28 rounded-lg font-bold`
          }
        >
          Atras
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === 10}
          className="inline-block bg-blue-500 py-1.5 disabled:opacity-75 rounded-lg w-28 font-bold"
        >
          Siguiente
        </button>
      </footer>
    </section>
  );
};
