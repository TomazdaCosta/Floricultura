import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/fixed-layout/Layout'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'
import OrderFinish from './pages/pedido-finalizado/OrderFinish'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />
      },
      {
        path: 'carrinho',
        element: <Cart />
      },
      {
        path: '/finalizado',
        element: <OrderFinish />
      }
    ]
  }
])

export default router