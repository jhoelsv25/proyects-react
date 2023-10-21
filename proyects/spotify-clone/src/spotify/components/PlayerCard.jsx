import { IconDown, IconFavorite, IconUp } from "../icons/Icons";
import { usePlayer } from "../hooks/usePlayer";
export const PlayerCard = () => {
  const { showInfoPlayer, setShowInfoPlayer, currentMusic } = usePlayer();
  const { song } = currentMusic;

  return (
    <div className=" flex flex-row gap-5">
      <picture className="relative h-16 w-14 flex-none bg-zinc-800 aspect-square group">
        <img
          src={song?.image}
          alt={song?.title}
          className="object-cover w-full h-full rounded-md "
        />
        <button
          onClick={() => setShowInfoPlayer(!showInfoPlayer)}
          className="absolute top-1 right-2  rounded-full bg-zinc-900/80 h-6 p-1 w-6 items-center justify-center hidden group-hover:flex group-hover:fill-white"
        >
          {showInfoPlayer ? <IconDown /> : <IconUp />}
        </button>
      </picture>
      <div className="flex flex-col justify-center">
        <h1 className="text-sm font-medium">{song?.title}</h1>
        <small className="text-xs text-gray-400">
          {song?.artists.join(", ")}
        </small>
      </div>
      <button className="fill-green-500">
        <IconFavorite />
      </button>
    </div>
  );
};
