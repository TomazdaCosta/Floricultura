import { createContext } from "react";
import produtos from '../dados.js'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const dados = {
    produtos
  }

  return (
    <Context.Provider value={dados}>
      {children}
    </Context.Provider>
  )
}