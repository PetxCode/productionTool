import React, { useState, createContext, PropsWithChildren } from 'react'

interface iData {
    globalState?: boolean;
    setGlobalState?: React.Dispatch<React.SetStateAction<boolean>>
}

export const contextState = createContext<iData>({})

export const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
    const [globalState, setGlobalState] = useState<boolean>(false)
    return (
        <contextState.Provider value={{ globalState, setGlobalState }} >{children}</contextState.Provider>
    )
}

