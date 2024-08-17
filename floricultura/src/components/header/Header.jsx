import logo from '../../../public/imgs/logo.png'
import carrinho from '../../../public/imgs/carrinho.png'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'
import { Link } from 'react-router-dom'

export default function Header() {
  const { quantidadeCarrinho } = useContext(Context)

  return (
    <header>
      <div>
        <Link to='/'>
          <img src={logo} />
        </Link>
      </div>
      <div>
        <Link to='carrinho'>
          <img src={carrinho} />
          <span>{quantidadeCarrinho}</span>
        </Link>
      </div>
    </header>
  )
}