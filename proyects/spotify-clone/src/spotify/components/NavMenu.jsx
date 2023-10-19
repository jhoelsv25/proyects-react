
import { IconHome, IconLibrary, IconSearch } from '../icons/Icons'

export const NavMenuItems = ({ children }) => {
    return (
        <li className="flex gap-4 text-zinc-200 stroke-zinc-100 hover:text-zinc-100 font-bold items-center ">
            {children}
        </li>
    )
}

export const NavMenu = () => {
    return (
        <nav className="flex flex-col flex-1 gap-2">
            <div className="rounded-lg bg-zinc-900 p-2">
                <ul className='flex flex-col gap-6 p-4'>
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
                <ul className='flex flex-col gap-6 p-4 '>
                    <NavMenuItems >
                        <IconLibrary />
                        Tu biblioteca
                    </NavMenuItems>

                </ul>
            </div>

        </nav>
    )
}
