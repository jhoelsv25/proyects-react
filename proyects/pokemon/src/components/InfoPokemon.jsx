import { usePokemon } from "../hooks/usePokemon";
export const InfoPokemon = () => {
  const { pokemonInfo } = usePokemon();
  return pokemonInfo ? (
    <div className="rounded-lg bg-white py-2 h-full flex flex-col items-center">
      <picture className="object-cover h-44 w-56 rounded-md aspect-square bg-sky-400 m-2">
        <img
          src={pokemonInfo?.sprites?.back_shiny}
          alt={pokemonInfo.name}
          className="h-full w-full"
        />
      </picture>
      <div>
        <h1 className="text-black font-bold text-center w-full">
          #{pokemonInfo.id}
        </h1>
        <p className="text-black font-bold text-center w-full">
          {pokemonInfo?.name}
        </p>
      </div>
      <article className="flex flex-col items-start w-full px-5">
        <strong className="text-black">
          Types
          <p className="flex gap-2 w-full">
            {pokemonInfo?.types?.map((t) => (
              <small className="text-black w-full opacity-80" key={t.type.name}>
                {t.type.name}
              </small>
            ))}
          </p>
        </strong>
        <strong className="text-black flex flex-col">
          Peso
          <small className="text-black w-full opacity-80">
            {pokemonInfo?.weight}Kg
          </small>
        </strong>
        <strong className="text-black flex flex-col w-full">
          Sprites
          <picture className="flex gap-2 h-12 w-12">
            {Object.keys(pokemonInfo.sprites).map((spriteKey, index) => {
              if (
                index < 5 &&
                typeof pokemonInfo.sprites[spriteKey] === "string" &&
                pokemonInfo.sprites[spriteKey].endsWith(".png")
              ) {
                return (
                  <img
                    key={spriteKey}
                    src={pokemonInfo.sprites[spriteKey]}
                    alt={spriteKey}
                    className="rounded-full w-full border"
                  />
                );
              }
              return null;
            })}
          </picture>
        </strong>
        <strong className="text-black flex flex-col">
          Movimientos
          <p className=" w-full">
            {pokemonInfo?.moves?.slice(0, 6).map((mov) => (
              <small className="text-black opacity-80 flex gap-2">
                {mov.move.name}
              </small>
            ))}
          </p>
        </strong>
      </article>
    </div>
  ) : (
    <p className="text-blue-500 font-bold text-xl text-center mt-10">
      Cargando...
    </p>
  );
};
