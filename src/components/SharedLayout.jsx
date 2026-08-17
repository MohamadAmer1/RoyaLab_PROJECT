import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import RoyaLabProvider from "../context/RoyaLabContext";

export default function SharedLayout() {
  return (
    <RoyaLabProvider>
      <Header />
      <Outlet />
    </RoyaLabProvider>
  );
}
