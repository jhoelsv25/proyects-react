
import './Spotify.css'
import { NavMenu } from './components/NavMenu'
export const Spotify = () => {
    return (
        <div id='app' className=" relative h-screen   p-2 gap-2">
            <aside className="[grid-area:aside] flex flex-col overflow-y-auto">
                <NavMenu />
            </aside>
            <main className="[grid-area:main]  w-full rounded-lg bg-zinc-900 overflow-y-auto  ">
                main
            </main>
            <footer className="[grid-area:player] min-h-[100px] rounded-lg  " >
                player
            </footer>

        </div>
    )
}
