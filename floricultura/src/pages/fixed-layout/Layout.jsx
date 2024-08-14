import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <p>Esse é o layout fixo.</p>
      <Outlet />
    </>
  )
}