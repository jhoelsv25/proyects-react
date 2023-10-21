import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
export const usePlayer = () => {
  const {
    showInfoPlayer,
    setShowInfoPlayer,
    isPlaying,
    setIsPlaying,
    currentMusic,
    setCurrentMusic,
    audioRef,
    volume,
    setVolume,
  } = useContext(PlayerContext);

  return {
    showInfoPlayer,
    setShowInfoPlayer,
    isPlaying,
    setIsPlaying,
    currentMusic,
    setCurrentMusic,
    audioRef,
    volume,
    setVolume,
  };
};
