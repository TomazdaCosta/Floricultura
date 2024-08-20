import emoji from '../../../public/imgs/emoji-pedido-finalizado.png'
import styles from './OrderFinish.module.css'

export default function OrderFinish() {
  return (
    <section className={styles.container}>
      <img src={emoji} />
      <p>Parabéns !</p>
      <p>Sua compra foi concluída com sucesso.</p>
    </section>
  )
}