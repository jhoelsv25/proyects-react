import { IconBack, IconNext, IconNotification, IconUser } from "../icons/Icons"

export const Header = () => {
    return (
        <header className="flex flex-row items-center bg-transparent h-full justify-between px-6">
            <div className="flex  gap-4 ">
                <button className="rounded-full bg-black p-2 ">
                    <IconBack />
                </button>
                <button className="rounded-full bg-black p-2">
                    <IconNext />
                </button>
            </div>
            <div className="flex  gap-3">
                <button className="rounded-full bg-black p-2">
                    <IconNotification />
                </button>
                <button className="rounded-full bg-black p-2">
                    <IconUser />
                </button>
            </div>
        </header>
    )
}
