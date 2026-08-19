import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import db from "../data/fireStoreCard";

const RoyaLabContext = createContext();
function RoyaLabProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [decks, setDecks] = useState([]);
  async function getCards() {
    try {
      const res = await getDocs(collection(db, "cards"));
      const cardData = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setCards(cardData);
    } catch (err) {
      console.error("Error fetching cards", err);
    }
  }
  async function getDecks() {
    try {
      const res = await getDocs(collection(db, "decks"));
      const deckData = res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setDecks(deckData);
    } catch (err) {
      console.error("Error fetching cards", err);
    }
  }
  useEffect(() => {
    getCards();
    getDecks();
  }, []);

  async function sendDeck(deck) {
    try {
      const id = `${deck.name.trim().toLowerCase().replaceAll(" ", "-")}-${Date.now()}`;
      const deckData = { ...deck, id };
      await setDoc(doc(db, "decks", id), deckData);
      console.log("New deck uploaded successfully");
    } catch (err) {
      console.error("Error uploading deck", err);
    }
  }

  async function updateDeck(id, updatedDeck) {
    try {
      await updateDoc(doc(db, "decks", id), updatedDeck);
      console.log("Deck updated successfully");
    } catch (err) {
      console.error("Error uploading deck", err);
    }
  }

  async function deleteDeck(id) {
    try {
      await deleteDoc(doc(db, "decks", id));

      console.log("Deck deleted successfully");
    } catch (err) {
      console.error("Error deleting deck", err);
    }
  }
  const value = { cards, sendDeck, decks, updateDeck, getDecks, deleteDeck };
  return <RoyaLabContext.Provider value={value}>{children}</RoyaLabContext.Provider>;
}

export function useRoyaLab() {
  return useContext(RoyaLabContext);
}

export default RoyaLabProvider;
