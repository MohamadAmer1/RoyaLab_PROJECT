import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./pages/Home";
import AboutWeb from "./pages/AboutWeb";
import Cards from "./pages/Cards";
import ArenaMeta from "./pages/ArenaMeta";
import DeckBuilder from "./pages/DeckBuilder";
import Community from "./pages/Community";
import SuggestedDecks from "./pages/SuggestedDecks";
import PageNotFound from "./components/PageNotFound";
import "./App.css"

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
          element: <AboutWeb />,
        },
        {
          path: "/cards",
          element: <Cards />,
        },
        {
          path: "/meta",
          element: <ArenaMeta />,
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
  return <RouterProvider router={router} />;
}
