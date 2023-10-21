import { playlists } from "../../lib/data";
import { PlayListItem } from "../components/PlayListItem";
import { Greeting } from "../utils/Greeting";
export const Home = () => {
  return (
    <article
      id="playlist-container"
      className="relative transition-all overflow-hidden duration-1000 bg-inherit"
    >
      <header className="pt-5 px-6">
        <Greeting />
      </header>
      <section className="relative z-10 px-6 ">
        <div className="flex flex-wrap mt-5 gap-4">
          {playlists.map((playlist) => (
            <PlayListItem playlist={playlist} />
          ))}
        </div>
      </section>
      {/* <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80'></div> */}
    </article>
  );
};
