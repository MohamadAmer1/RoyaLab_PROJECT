import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cards from "./pages/Cards/Cards";
import DeckBuilder from "./pages/DeckBuilder/DeckBuilder";
import Community from "./pages/Community/Community";
import SuggestedDecks from "./pages/SuggestedDecks/SuggestedDecks";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/aboutweb",
          element: <About />,
        },
        {
          path: "/cards",
          element: <Cards />,
        },
        {
          path: "/buildyourdeck",
          element: <DeckBuilder />,
        },
        {
          path: "/community",
          element: <Community />,
        },
        {
          path: "/decks",
          element: <SuggestedDecks />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
