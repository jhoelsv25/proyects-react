import {
  IconPause,
  IconPlay,
  IconVolume,
  IconVolumeSilence,
} from "../icons/Icons";
import { PlayerCard } from "../components/PlayerCard";
import { usePlayer } from "../hooks/usePlayer";
import { Volume, MusicProgress } from "./Volume";
import { useRef, useEffect, useState } from "react";

const SongControl = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const formatTime = (time) => {
    if (time == null) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const duration = audioRef?.current?.duration ?? 0;

  return (
    <div className="flex items-center gap-x-2 justify-center text-gray-400">
      <small className="pb-1">{formatTime(currentTime)}</small>
      <MusicProgress
        width={300}
        max={duration}
        audioRef={audioRef}
        currentTime={currentTime}
      />
      <small className="pb-1">{duration ? formatTime(duration) : "0:00"}</small>
    </div>
  );
};

export const Player = () => {
  const { isPlaying, setIsPlaying, audioRef, volume, setVolume } = usePlayer();
  const previusVolumeRef = useRef(volume);
  const isVolumenSilenced = volume < 0.1;

  const handleClick = () => {
    if (isVolumenSilenced) {
      setVolume(previusVolumeRef.current);
    } else {
      previusVolumeRef.current = volume;
      setVolume(0);
    }
  };
  return (
    <section className="flex h-full flex-row items-center justify-between w-full px-4 z-50">
      <div>
        <PlayerCard />
      </div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center "
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <IconPause /> : <IconPlay />}
          </button>
          <audio ref={audioRef}></audio>
          <SongControl audioRef={audioRef} />
        </div>
      </div>
      <div className="flex flex-row gap-2 h-full items-center  justify-center">
        <button
          className="pb-1.5 opacity-75 hover:opacity-100 transition-all"
          onClick={handleClick}
        >
          {isVolumenSilenced ? <IconVolumeSilence /> : <IconVolume />}
        </button>
        <Volume value={volume} setVolume={setVolume} />
      </div>
    </section>
  );
};
