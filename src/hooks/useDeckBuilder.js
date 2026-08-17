import { useState } from "react";

export default function useDeckBuilder(cards, sendDeck) {
  const [search, setSearch] = useState("");

  const [selectedCards, setSelectedCards] = useState([]);

  const [deck, setDeck] = useState({
    name: "",
    arena: "",
    cards: [],
    averageElixir: 0,
    notes: "",
  });

  const filteredCards = cards.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(search.toLowerCase());

    const matchesArena = deck.arena === "" || Number(card.arena) <= Number(deck.arena);

    return matchesSearch && matchesArena;
  });

  function handleSelectCard(card) {
    const isSelected = selectedCards.some((selectedCard) => selectedCard.id === card.id);

    if (isSelected) {
      setSelectedCards((prev) => prev.filter((selectedCard) => selectedCard.id !== card.id));

      return;
    }

    if (selectedCards.length >= 8) {
      return;
    }

    setSelectedCards((prev) => [...prev, card]);
  }

  function handleClearDeck() {
    setSelectedCards([]);

    setDeck((prev) => ({
      ...prev,
      cards: [],
      averageElixir: 0,
    }));
  }

  const averageElixir =
    selectedCards.length === 0
      ? 0
      : selectedCards.reduce((total, card) => {
          return total + Number(card.elixir);
        }, 0) / selectedCards.length;

  const elixirCurve = Array.from({ length: 9 }, (_, index) => {
    const elixir = index + 1;

    const amount = selectedCards.filter((card) => {
      return Number(card.elixir) === elixir;
    }).length;

    return {
      elixir,
      cards: amount,
    };
  });

  async function handleSaveDeck() {
    if (deck.name.trim() === "") {
      alert("Please enter a deck name.");
      return;
    }

    if (deck.arena === "") {
      alert("Please enter an arena.");
      return;
    }

    if (selectedCards.length !== 8) {
      alert(`Please select 8 cards. You currently have ${selectedCards.length}.`);
      return;
    }

    if (deck.notes.trim() === "") {
      alert("Please add notes about the trophy range and why the deck is suitable.");
      return;
    }

    const deckData = {
      ...deck,
      arena: Number(deck.arena),
      cards: selectedCards.map((card) => card.id),
      averageElixir: Number(averageElixir.toFixed(1)),
    };

    await sendDeck(deckData);

    setSelectedCards([]);

    setDeck({
      name: "",
      arena: "",
      cards: [],
      averageElixir: 0,
      notes: "",
    });
  }
  return {
    search,
    setSearch,
    selectedCards,
    filteredCards,
    deck,
    setDeck,
    handleSelectCard,
    handleClearDeck,
    elixirCurve,
    averageElixir,
    handleSaveDeck,
  };
}
