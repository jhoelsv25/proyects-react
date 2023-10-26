import React from "react";
import { InfoPokemon } from "../components/InfoPokemon";
import { Card } from "../components/Card";
import "./Home.css";
import { usePokemon } from "../hooks/usePokemon";
export const Home = () => {
  const { setPage, page, pokemonInfo, filterPokemons } = usePokemon();
  return (
    <section id="home" className="relative h-full gap-3 px-5">
      <article className=" w-full">
        {filterPokemons.length > 0 && <Card data={filterPokemons} />}
      </article>
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
          disabled={page === 8}
          className="inline-block bg-blue-500 py-1.5 rounded-lg w-28 font-bold"
        >
          Siguiente
        </button>
      </footer>
    </section>
  );
};
