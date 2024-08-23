import logo from '../../imgs/logo.png'
import carrinho from '../../imgs/carrinho.png'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  const { quantidadeCarrinho } = useContext(Context)

  return (
    <header className={styles.headerBg}>
      <div className={styles.container}>
        <div>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </div>
        <div>
          <Link to='carrinho'>
            <img src={carrinho} />
            <span className={styles.quantidadeCarrinho}>{quantidadeCarrinho}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}