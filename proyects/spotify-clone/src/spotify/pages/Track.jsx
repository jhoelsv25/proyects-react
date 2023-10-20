import { useParams } from "react-router-dom"
import { useState } from "react"
import { playlists } from "../../lib/data"
import { IconFavorite, IconPlay, IconTime } from "../icons/Icons"
export const Track = () => {
    const { id } = useParams()
    const { title, cover, color, artists } = playlists.find(playlist => playlist.id === id) || {}
    const [bgColor, setBgColor] = useState(color.accent)
    console.log(bgColor);
    console.log(id);
    return (
        <article id="playlist-container" style={{ backgroundColor: bgColor }}
            className={`relative flex flex-col h-full transition-all duration-1000 overflow-x-hidden `} >
            <section className="z-10 px-6 flex flex-row pt-10 gap-5  pb-4">
                <picture className="w-52 h-52 flex-none aspect-square">
                    <img src={cover} alt={title} className="object-cover w-full h-full rounded-md hover:shadow-xl" />
                </picture>
                <div className="flex flex-col gap-2 justify-end">
                    <small>Album</small>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-sm text-gray-400">{artists.join(', ')}</p>
                    <p className="text-gray-200">
                        <span> 50 canciones</span>, 3h aproximadamente
                    </p>
                </div>
            </section>
            <section className="flex flex-col px-6 ">
                <div className="flex gap-3 items-center py-2">
                    <button className="rounded-full p-2 bg-green-500 z-10 hover:bg-green-400">
                        <IconPlay />
                    </button>
                    <button className="rounded-full p-2 bg-transparent fill-green-500 z-10 hover:fill-green-400">
                        <IconFavorite />
                    </button>
                    <button>...</button>
                </div>
                <table className="w-full z-10">
                    <thead>
                        <tr>
                            <th className="w-10" >#</th>
                            <th className="flex-1 text-start">Title</th>
                            <th className="flex-1 text-start">Album</th>
                            <th><IconTime /> </th>
                        </tr>
                    </thead>
                </table>

            </section>
            <div className='absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50'></div>
        </article>
    )
}
