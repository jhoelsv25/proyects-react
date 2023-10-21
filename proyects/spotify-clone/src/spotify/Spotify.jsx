import "./Spotify.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavMenu } from "./components/NavMenu";
import { Track } from "./pages/Track";
import { Player } from "./components/Player";
import { usePlayer } from "./hooks/usePlayer";
import { Header } from "./components/Header";
import { PlayerInfo } from "./components/PlayerInfo";

export const Spotify = () => {
  const { showInfoPlayer, setShowInfoPlayer } = usePlayer();
  return (
    <div id="app" className=" relative h-screen   p-2 gap-2">
      <aside className="[grid-area:aside]   flex flex-col overflow-y-auto">
        <NavMenu />
      </aside>
      <main className="[grid-area:main] relative w-full rounded-lg bg-zinc-900 overflow-y-auton overflow-x-hidden ">
        <header className="sticky top-0 z-50 bg-transparent h-[50px]">
          <Header />
        </header>
        <Routes>
          <Route exec path="/" element={<Home />} />
          <Route path="/playlist/:id" element={<Track />} />
        </Routes>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900 -z-10"></div>
      </main>

      {showInfoPlayer && (
        <nav className="[grid-area:nav] min-w-[300px] transition-all duration-500 ease-in-out bg-zinc-900 overflow-y-auto rounded-lg block  ">
          <PlayerInfo
            showInfoPlayer={showInfoPlayer}
            setShowInfoPlayer={setShowInfoPlayer}
          />
        </nav>
      )}
      <footer className="[grid-area:player] h-[80px] rounded-lg  ">
        <Player />
      </footer>
    </div>
  );
};
