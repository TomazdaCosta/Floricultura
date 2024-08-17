import emoji from '../../../public/imgs/emoji-pedido-finalizado.png'

export default function OrderFinish() {
  return (
    <section>
      <img src={emoji} />
      <p>Parabéns !</p>
      <p>Sua compra foi concluída com sucesso.</p>
    </section>
  )
}