import "./Spotify.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavMenu } from "./components/NavMenu";
import { Track } from "./pages/Track";
import { Player } from "./components/Player";
import { useShowPlayer } from "./hooks/usePlayer";
import { Header } from "./components/Header";

export const Spotify = () => {
    const { showInfoPlayer, setShowInfoPlayer } = useShowPlayer();
    return (
        <div id="app" className=" relative h-screen   p-2 gap-2">
            <aside className="[grid-area:aside] flex flex-col overflow-y-auto">
                <NavMenu />
            </aside>
            <main className="[grid-area:main]  w-full rounded-lg bg-zinc-900 overflow-y-auto overflow-y-hidden  ">
                <header className="sticky top-0 z-50 bg-inherit h-[50px]">
                    <Header />
                </header>
                <Routes>
                    <Route exec path="/" element={<Home />} />
                    <Route path="/playlist/:id" element={<Track />} />
                </Routes>
            </main>
            {showInfoPlayer && (
                <nav className="[grid-area:nav] max-w-xs transition-all duration-500 ease-in-out bg-zinc-900 overflow-y-auto rounded-lg block  ">
                    este es nav del compoennete princiapl
                </nav>
            )}
            <footer className="[grid-area:player] min-h-[100px] rounded-lg  ">
                <Player />
            </footer>
        </div>
    );
};
