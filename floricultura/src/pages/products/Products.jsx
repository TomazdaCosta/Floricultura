import { useContext } from 'react'
import Card from '../../components/card/Card.jsx'
import { Context } from '../../contexts/Context.jsx'
import styles from './Products.module.css'

export default function Products() {
  const { produtos } = useContext(Context)
  return (
    <main className={styles.container}>
      {produtos.map(produto => {
        return (
          <Card key={produto.id} {...produto} />
        )
      })}
    </main>
  )
}