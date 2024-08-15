import logo from '../../../public/imgs/logo.png'
import carrinho from '../../../public/imgs/carrinho.png'

export default function Header() {
  return (
    <header>
      <div><img src={logo} /></div>
      <div>
        <img src={carrinho} />
        <span>0</span>
      </div>
    </header>
  )
}