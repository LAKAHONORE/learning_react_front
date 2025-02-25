import { Outlet } from "react-router-dom";
import Navbar from "./home/components/navbar/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
