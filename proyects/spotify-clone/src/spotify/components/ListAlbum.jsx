export const ListAlbum = ({ songs }) => {
  return (
    <>
      {songs.map((song) => {
        return (
          <tr>
            <td className="text-sm text-white">{song.id} </td>
            <td className="flex-1 flex gap-3 py-2">
              <picture className=" flex flex-row   h-10 w-10 gap-3 aspect-square">
                <img
                  src={song.image}
                  alt={song.title}
                  className="object-cover "
                />
              </picture>
              <p className="text-sm text-white">{song.title}</p>
            </td>
            <td className="text-xs text-gray-400">{song.album}</td>
            <td className="text-xs text-gray-400">{song.duration}</td>
          </tr>
        );
      })}
    </>
  );
};
