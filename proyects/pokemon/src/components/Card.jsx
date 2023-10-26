import { usePokemon } from "../hooks/usePokemon";

export const Card = ({ data }) => {
  const { setPokemonInfo, searchFilter } = usePokemon();
  console.log("card", searchFilter);

  const handleInfo = (item) => {
    setPokemonInfo(item);
  };

  return (
    <ul className="flex gap-2 py-2 flex-wrap justify-center">
      {data.map((item) => {
        return (
          <li
            onClick={() => handleInfo(item)}
            key={item.id}
            className="rounded-lg w-52 cursor-pointer h-64 flex flex-col items-center  shadow-slate-400 bg-white hover:shadow-xl"
          >
            <picture className="object-cover h-44  w-44 rounded-md aspect-square bg-sky-400 m-2  ">
              <img
                src={item?.sprites?.back_shiny}
                alt=""
                className="h-full w-full"
              />
            </picture>
            <h1 className="text-black font-bold text-center w-ful">
              #{item.id}
            </h1>
            <p className="text-black font-bold text-center w-full">
              {item?.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
