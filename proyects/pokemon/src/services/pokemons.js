const apiUrl = "https://pokeapi.co/api/v2";

export const getAllPokemos = async ({ offset, limit = 6 }) => {
  try {
    const res = await fetch(
      `${apiUrl}/pokemon?offset=${offset}&limit=${limit}`
    );
    if (!res.ok) throw new Error("ocurrrio algo inesperado");
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
};

export const searchPokemon = async (pokemon) => {
  try {
    const res = await fetch(`${apiUrl}/pokemon/${pokemon}`);
    if (!res.ok)
      throw new Error(
        `Para la palabra ${pokemon} no se encontraron resultados `
      );
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
};
