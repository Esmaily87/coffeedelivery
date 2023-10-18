import { ReactNode, createContext} from "react";

interface CyclesContextType{ //todas os valores da interface devem ser declarados no value do CycleContext.provider
    
    interruptCurrentCycle: () => void
 
}

export const CyclesContext = createContext({} as CyclesContextType)

type CyclesContextProviderProps = {
    children: ReactNode
}



export function CycleContextProvider(){
    return(
        <CyclesContext.Provider>
        </CyclesContext.Provider>)
}