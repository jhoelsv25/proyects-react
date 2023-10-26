import React from "react";
import { IconSearch } from "../icons/Icons";
import { usePokemon } from "../hooks/usePokemon";

export const Search = () => {
  const { setSearch } = usePokemon();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearch(e.target.value);
    }
  };
  return (
    <div className="flex gap-1 items-center bg-white text-black rounded-lg w-1/2">
      <IconSearch />
      <input
        type="text"
        onKeyUp={handleSearch}
        placeholder="Search ..."
        className="p-1.5 rounded-lg w-full focus:outline-none placeholder:font-medium"
      />
    </div>
  );
};
