import logo from '../../../public/imgs/logo.png'
import carrinho from '../../../public/imgs/carrinho.png'
import { useContext } from 'react'
import { Context } from '../../contexts/Context'

export default function Header() {
  const { quantidadeCarrinho } = useContext(Context)

  return (
    <header>
      <div><img src={logo} /></div>
      <div>
        <img src={carrinho} />
        <span>{quantidadeCarrinho}</span>
      </div>
    </header>
  )
}