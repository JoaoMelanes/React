// criar context
import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

export const CounterContext = createContext()

// criar provider
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}