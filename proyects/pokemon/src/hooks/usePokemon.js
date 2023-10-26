import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (context === undefined)
    throw new Error(
      "usePokemon hook can not be used outside a PokemonProvider"
    );
  return context;
};
