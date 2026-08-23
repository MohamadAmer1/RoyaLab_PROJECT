import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import RoyaLabProvider from "../context/RoyaLabContext";
import PageTransition from "./PageTransition/PageTransition";

export default function SharedLayout() {
  return (
    <RoyaLabProvider>
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </RoyaLabProvider>
  );
}
