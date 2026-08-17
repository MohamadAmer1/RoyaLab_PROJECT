import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import db from "../data/fireStoreCard";

const RoyaLabContext = createContext();
function RoyaLabProvider({ children }) {
  const [cards, setCards] = useState([]);
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

  useEffect(() => {
    getCards();
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
  const value = { cards, sendDeck };
  return <RoyaLabContext.Provider value={value}>{children}</RoyaLabContext.Provider>;
}

export function useCards() {
  return useContext(RoyaLabContext);
}

export default RoyaLabProvider;
