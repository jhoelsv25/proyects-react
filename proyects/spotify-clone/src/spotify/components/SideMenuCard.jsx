export const SideMenuCard = ({ playlists }) => {
  const { id, cover, title, artists, color } = playlists;
  const artistsNames = artists.join(", ");
  return (
    <a
      href=""
      className=" palylist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800 "
    >
      <picture className="h-12 w-12 flex-none">
        <img
          src={cover}
          alt={title}
          className="object-cover w-full h-full rounded-md "
        />
      </picture>
      <div className="flex flex-col truncate">
        <h4 className="text-white text-sm">{title}</h4>
        <span className=" text-xs text-gray-400">{artistsNames}</span>
      </div>
    </a>
  );
};
