import { useContext } from "react";
import { ShowPlayerContext } from "../context/PlayerContext";
export const useShowPlayer = () => {
  const { showInfoPlayer, setShowInfoPlayer } = useContext(ShowPlayerContext);

  return { showInfoPlayer, setShowInfoPlayer };
};
