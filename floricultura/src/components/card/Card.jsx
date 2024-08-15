import { useContext } from "react"
import { Context } from "../../contexts/Context"

export default function Card({img, nome, preco}) {
  const { addQuantidadeCarrinho } = useContext(Context)

  return (
    <div>
      <img src={img} alt={nome} />
      <h3>{nome}</h3>
      <div>
        <div>
          <p>10 unds</p>
          <p>{preco}</p>
        </div>
        <div>
          <button onClick={addQuantidadeCarrinho}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}