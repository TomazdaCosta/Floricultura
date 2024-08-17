import { createContext, useEffect, useState } from "react";
import produtos from '../dados.js'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [quantidadeCarrinho, setQuantidadeCarrinho]  = useState(0)
  const [carrinho, setCarrinho] = useState([])
  const [totalItem, setTotalItem] = useState(0)

  useEffect(() => {
    calcularTotalItens()
  }, [carrinho])

  function addQuantidadeCarrinho(id, img, nome, preco) {
    setQuantidadeCarrinho(carrinho.length + 1)
    addCarrinho(id, img, nome, preco)
  }

  function addCarrinho(id, img, nome, preco) {
    const aleatorio = Math.floor(Math.random() * 10000)
    setCarrinho(carrinho => [...carrinho, {id, img, nome, preco, aleatorio}])
  }

  function removeCarrinho(aleatorio) {
    setCarrinho(carrinho.filter(item => item.aleatorio !== aleatorio))
    setQuantidadeCarrinho(carrinho.length - 1)
  }

  function calcularTotalItens() {
    let total = 0
    carrinho.forEach(carrinho => console.log(total += carrinho.preco))
    setTotalItem(total)
  }

  const dados = {
    produtos,
    quantidadeCarrinho,
    addQuantidadeCarrinho,
    carrinho,
    removeCarrinho,
    totalItem
  }

  return (
    <Context.Provider value={dados}>
      {children}
    </Context.Provider>
  )
}