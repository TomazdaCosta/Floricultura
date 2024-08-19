import { useContext } from "react"
import { Context } from "../../contexts/Context"
import styles from './Card.module.css'

export default function Card({id, img, nome, preco}) {
  const { addQuantidadeCarrinho } = useContext(Context)

  return (
    <div className={styles.card}>
      <div className={styles.imgTitulo}>
        <img src={img} alt={nome} />
        <h3>{nome}</h3>
      </div>
      <div className={styles.precoQuantidade}>
        <div>
          <p>10 unds</p>
          <p className={styles.preco}>{preco}</p>
        </div>
        <div>
          <button className={styles.botaoAdicionar} onClick={() => addQuantidadeCarrinho(id, img, nome, preco)}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}