import { createContext, useEffect, useState, useRef } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [showInfoPlayer, setShowInfoPlayer] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({
    playlist: null,
    song: null,
    songs: [],
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { playlist, song, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic]);

  return (
    <PlayerContext.Provider
      value={{
        showInfoPlayer,
        setShowInfoPlayer,
        isPlaying,
        setIsPlaying,
        currentMusic,
        setCurrentMusic,
        audioRef,
        volume,
        setVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
