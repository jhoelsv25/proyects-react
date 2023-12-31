import { IconTime } from "../icons/Icons";

export const ListAlbum = ({ songs }) => {
  return (
    <table className=" table-auto text-left min-w-full divide-y divide-gray-500/20  z-10">
      <thead class="">
        <tr class="text-zinc-400 text-sm">
          <th class="px-4 py-2 font-light">#</th>
          <th class="px-4 py-2 font-light">Título</th>
          <th class="px-4 py-2 font-light">Álbum</th>
          <th class="px-4 py-2 font-light">
            <IconTime />
          </th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => {
          return (
            <tr class="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300">
              <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">
                {index + 1}
              </td>
              <td class="px-4 py-2 flex gap-3">
                <picture class="">
                  <img src={song.image} alt={song.title} class="w-11 h-11" />
                </picture>
                <div class="flex flex-col">
                  <h3 class="text-white text-base font-normal">{song.title}</h3>
                  <span>{song.artists.join(", ")}</span>
                </div>
              </td>
              <td class="px-4 py-2">{song.album}</td>
              <td class="px-4 py-2 rounded-tr-lg rounded-br-lg">
                {song.duration}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
