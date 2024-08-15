import { createContext, useState } from "react";
import produtos from '../dados.js'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [quantidadeCarrinho, setQuantidadeCarrinho]  = useState(0)

  const addQuantidadeCarrinho = () => {
    setQuantidadeCarrinho(quantidadeCarrinho => quantidadeCarrinho + 1)
  }

  const dados = {
    produtos,
    quantidadeCarrinho,
    addQuantidadeCarrinho
  }

  return (
    <Context.Provider value={dados}>
      {children}
    </Context.Provider>
  )
}