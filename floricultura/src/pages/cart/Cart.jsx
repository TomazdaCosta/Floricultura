import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { Link } from "react-router-dom"

export default function Cart() {
  const { carrinho, removeCarrinho, totalItem, zerarDados } = useContext(Context)

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
        <Link to='/finalizado'>
          <button onClick={() => zerarDados()}>Finalizar compra</button>
        </Link>
      </div>
    </div>
  )
}