
import { IconHome, IconLibrary, IconSearch } from '../icons/Icons'
import { SideMenuCard } from './SideMenuCard'
import { playlists } from '../../lib/data'
const NavMenuItems = ({ children }) => {
    return (
        <li className="flex gap-4 text-zinc-400 cursor-pointer hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300">
            {children}
        </li>
    )
}

export const NavMenu = () => {
    return (
        <nav className="flex flex-col flex-1 gap-2">
            <div className="rounded-lg bg-zinc-900 p-2">
                <ul >
                    <NavMenuItems >
                        <IconHome />
                        Home
                    </NavMenuItems>
                    <NavMenuItems >
                        <IconSearch />
                        Search
                    </NavMenuItems>
                </ul>
            </div>
            <div className="rounded-lg bg-zinc-900 p-2 flex-1">
                <ul >
                    <NavMenuItems >
                        <IconLibrary />
                        Tu biblioteca
                    </NavMenuItems>
                    {
                        playlists.map(playlist => <SideMenuCard playlists={playlist} />)
                    }
                </ul>


            </div>

        </nav>
    )
}
