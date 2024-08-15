export default function Card({img, nome, preco}) {
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
          <button>Adicionar</button>
        </div>
      </div>
    </div>
  )
}