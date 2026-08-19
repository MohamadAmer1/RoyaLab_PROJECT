import { useState } from "react";
import { useRoyaLab } from "../context/RoyaLabContext";

export default function useSuggestedDecks() {
  const [editedDeck, setEditedDeck] = useState(null);
  const { updateDeck, getDecks, deleteDeck } = useRoyaLab();
  function handleClickedButton(deck) {
    setEditedDeck({
      ...deck,
    });
  }

  async function updateSuggestedDeck(editedDeck) {
    const { id, ...updatedDeck } = editedDeck;

    await updateDeck(id, updatedDeck);
    await getDecks();
    setEditedDeck(null);
  }
  async function deleteSuggestedDeck(id) {
    await deleteDeck(id);
    await getDecks();
  }
  return { handleClickedButton, editedDeck, setEditedDeck, updateSuggestedDeck,deleteSuggestedDeck };
}
