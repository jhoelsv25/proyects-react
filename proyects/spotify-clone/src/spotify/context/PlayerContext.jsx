import { createContext, useState } from "react";


export const ShowPlayerContext = createContext();

export const ShowPlayerProvider = ({ children }) => {
    const [showInfoPlayer, setShowInfoPlayer] = useState(false);
    const [isPlaying, setIsPlayind] = useState(false);

    return (
        <ShowPlayerContext.Provider value={{ showInfoPlayer, setShowInfoPlayer }}>
            {children}
        </ShowPlayerContext.Provider>
    )
}