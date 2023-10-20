import { Link } from 'react-router-dom'
import { IconPlay } from '../icons/Icons'

export const PlayListItem = ({ playlist }) => {
    const { id, cover, title, artists, color } = playlist
    const artistsNames = artists.join(', ')
    return (
        <Link to={`/playlist/${id}`} className=" playlist-item transition-all duration-300 group flex relative flex-col bg-zinc-500/30 p-3 w-44  overflow-hidden  gap-2 pb-3 shadow-lg hover:shadow-xl rounded-md hover:bg-zinc-800 ">
            <picture className="relative h-auto w-auto flex-none aspect-square">
                <img src={cover} alt={title} className="object-cover w-full h-full rounded-md " />
                <button className='absolute bottom-2 right-1 rounded-full  p-3 bg-green-500 hover:bg-green-400 hidden group-hover:block'>
                    <IconPlay />
                </button>
            </picture>
            <div className="flex flex-col items-start truncate">
                <h4 className="text-white text-sm">{title}</h4>
                <span className=" text-xs text-gray-400">{artistsNames}</span>
            </div>
        </Link>
    )
}
