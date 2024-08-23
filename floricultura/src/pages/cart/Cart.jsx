import { useContext } from "react"
import { Context } from "../../contexts/Context"
import { Link } from "react-router-dom"
import styles from './Cart.module.css'
import logoVazio from '../../imgs/emoji-carrinho-vazio.png'

export default function Cart() {
  const { carrinho, removeCarrinho, totalItem, zerarDados, quantidadeCarrinho } = useContext(Context)

  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.voltar}>⇐voltar</Link>
      {quantidadeCarrinho > 0 ? (
        carrinho.map(({id, img, nome, preco, aleatorio}) => {
          return (
            <div key={id} className={styles.containerCard}>
              <div className={styles.card}>
                <div className={styles.cardDiv}>
                  <img src={img} />
                  <div>
                    <h3>{nome}</h3>
                    <p>10 unds</p>
                    <button onClick={() => removeCarrinho(aleatorio)}>Remover</button>
                  </div>
                </div>
                <div className={styles.preco}>
                  <span>Total</span>
                  <p>{preco}</p>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <div className={styles.containerVazio}>
          <img src={logoVazio} />
          <p>Ops!</p>
          <p>Parece que você ainda não adicionou itens ao seu carrinhos. Volte para a tela iniciau e      aproveite as nossas ofertas.</p>
        </div>
      )}
      {quantidadeCarrinho > 0 ? (
        <div className={styles.precoTotal}>
        <span>Total</span>
        <p>{totalItem}</p>
        <Link to='/finalizado'>
          <button onClick={() => zerarDados()}>Finalizar compra</button>
        </Link>
      </div>
      ) : (null)}
    </div>
  )
}