import {createContext, useContext, Dispatch, SetStateAction, useState } from "react";

export type ContextType ={
    score:number,
    setScore:(c: number) => void
}
type Props = {
    children?:React.ReactNode
}
export const ScoreContext = createContext<ContextType>({score:0,setScore: () => {},});



export const ScoreContextProvider = ({children}:Props) => {
    const [score,setScore] = useState(0);
    return (
      <ScoreContext.Provider value={{score,setScore}}>
          {children}
      </ScoreContext.Provider>
    )
}

export const useScore = () => {
    return useContext(ScoreContext);
}