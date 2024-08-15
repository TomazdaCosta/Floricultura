import { useContext } from 'react'
import Card from '../../components/card/Card.jsx'
import { Context } from '../../contexts/Context.jsx'

export default function Products() {
  const { produtos } = useContext(Context)
  return (
    <>
      {produtos.map(produto => {
        return (
          <Card key={produto.id} {...produto} />
        )
      })}
    </>
  )
}