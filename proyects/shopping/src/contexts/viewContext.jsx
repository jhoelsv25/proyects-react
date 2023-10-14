import { createContext, useState } from "react";


export const ViewListContext = createContext();
export const ViewListProvider = ({ children }) => {
    const [view, setView] = useState('grid');
    return (
        <ViewListContext.Provider value={{
            view,
            setView
        }}>
            {children}
        </ViewListContext.Provider>
    )
}

