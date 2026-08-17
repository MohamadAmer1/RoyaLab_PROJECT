import { useState } from "react";
import { useCards } from "../../context/RoyaLabContext";

export default function DeckBuilder() {
  const { cards } = useCards();
  const [search, setSearch] = useState("");

  let filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <h1>Deck Builder</h1>
      <span>Pick 8 cards, watch the elixir curve, then save your deck.</span>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <input
            id="cards-search"
            type="text"
            placeholder="Search for a card..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}
