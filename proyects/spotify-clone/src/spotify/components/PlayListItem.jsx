import { Link } from "react-router-dom";
import { IconPause, IconPlay } from "../icons/Icons";
import { usePlayer } from "../hooks/usePlayer";
import { songs } from "../../lib/data";

export const PlayListItem = ({ playlist }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayer();
  const { id, cover, title, artists, albumId } = playlist;
  const artistsNames = artists.join(", ");

  //Al hacer click manda el playlist, song y songs al context
  const handleClick = () => {
    const filteredSongs = songs.filter((song) => song.albumId === albumId); // Filtrar las canciones en función del albumId
    if (isPlayingList) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentMusic({
        playlist,
        song: filteredSongs[0],
        songs: filteredSongs,
      });
      setIsPlaying(true);
    }
  };

  const isPlayingList = isPlaying && currentMusic.playlist?.id === id;

  return (
    <article className="relative group">
      <button
        onClick={handleClick}
        className="absolute bottom-16 right-4 translate-y-4 transition-all duration-500 rounded-full  p-3 bg-green-500 hover:bg-green-400 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {isPlayingList ? <IconPause /> : <IconPlay />}
      </button>
      <Link
        onClick={handleClick}
        to={`/playlist/${id}`}
        className=" playlist-item transition-all duration-300  flex  flex-col bg-zinc-500/30 p-3 w-44  overflow-hidden  gap-2 pb-3 shadow-lg hover:shadow-xl rounded-md hover:bg-zinc-800 "
      >
        <picture className=" h-auto w-auto flex-none aspect-square">
          <img
            src={cover}
            alt={title}
            className="object-cover w-full h-full rounded-md "
          />
        </picture>
        <div className="flex flex-col items-start truncate">
          <h4 className="text-white text-sm">{title}</h4>
          <span className=" text-xs text-gray-400">{artistsNames}</span>
        </div>
      </Link>
    </article>
  );
};
