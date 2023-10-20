import { useRef, useState } from 'react'
import { IconPause, IconPlay } from '../icons/Icons'
import { PlayerCard } from '../components/PlayerCard'
export const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)
    const [volume, setVolume] = useState(0.5)
    const audioRed = useRef()
    const handleClick = () => {
        if (isPlaying) {
            audioRed.current.pause()
        } else {
            audioRed.current.volume = volume
            audioRed.current.src = '../../../public/music/1/01.mp3'
            audioRed.current.load()
            audioRed.current.play()
        }
        //         audioRed.current.currentTime = 0;
        //         audioRed.current.volume = volume;
        //         audioRed.current.play();
        //         audioRed.current.pause();
        //         audioRed.current.load();
        //         audioRed.current.canPlayType();
        //         audioRed.current.networkState;
        //         audioRed.current.readyState;
        //         audioRed.current.seekable;
        //         audioRed.current.seeking;
        //         audioRed.current.currentTime;
        //         audioRed.current.duration;
        //         audioRed.current.buffered;
        //         audioRed.current.error;
        //         audioRed.current.src;
        //         audioRed.current.currentSrc;
        //         audioRed.current.networkState;
        //         audioRed.current.preload;
        //         audioRed.current.buffered;

        setIsPlaying(!isPlaying)
    }
    return (
        <div className="flex h-full flex-row items-center justify-between w-full px-4 z-50">
            <div>
                <PlayerCard />
            </div>
            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button className="bg-white rounded-full p-2 " onClick={handleClick}>
                        {isPlaying ? <IconPause /> : <IconPlay />}
                    </button>
                    <audio ref={audioRed} ></audio>

                </div>
            </div>
            <div>
                volumem
            </div>

        </div>
    )
}
