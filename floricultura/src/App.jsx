import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContextProvider } from "./contexts/Context";
import './geral.css'

export default function App() {

  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  )
}
