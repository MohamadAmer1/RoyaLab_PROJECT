export default function cardsHelper(cards, rarity, arena, hasEvolution, sortBy, search) {
  let filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(search.toLowerCase());
  });
  if (rarity !== "All") {
    filteredCards = filteredCards.filter((card) => {
      return card.rarity === rarity;
    });
  }

  if (arena !== "") {
    filteredCards = filteredCards.filter((card) => {
      return Number(card.arena) <= Number(arena);
    });
  }

  if (hasEvolution) {
    filteredCards = filteredCards.filter((card) => {
      return card.hasEvolution === true;
    });
  }

  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (sortBy) {
      case "az":
        return a.name.localeCompare(b.name);

      case "most-used":
        return b.useRate - a.useRate;

      case "least-used":
        return a.useRate - b.useRate;

      case "most-wins":
        return b.winRate - a.winRate;

      case "least-wins":
        return a.winRate - b.winRate;

      case "lowest-elixir":
        return a.elixir - b.elixir;

      case "highest-elixir":
        return b.elixir - a.elixir;

      default:
        return 0;
    }
  });
  return sortedCards;
}
