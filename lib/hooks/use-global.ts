import { createContext, useContext } from 'react'

export const GlobalContext = createContext<Partial<TGlobal>>({})
export const useGlobal = () => useContext(GlobalContext)
