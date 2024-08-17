import { useContext } from "react"
import { Context } from "../../contexts/Context"

export default function Cart() {
  const { carrinho, removeCarrinho, totalItem, calcularTotalItens } = useContext(Context)

  return (
    <div>
      {carrinho && (
        carrinho.map(({id, img, nome, preco, aleatorio}) => {
          return (
            <div key={id}>
              <div>
                <img src={img} />
                <h3>{nome}</h3>
                <p>10 unds</p>
                <button onClick={() => removeCarrinho(aleatorio)}>Remover</button>
              </div>
              <div>
                <p>Total</p>
                <p>{preco}</p>
              </div>
            </div>
          )
        })
      )}
      <div>
        <p>Total</p>
        <p>{totalItem}</p>
        <button>Finalizar compra</button>
      </div>
    </div>
  )
}