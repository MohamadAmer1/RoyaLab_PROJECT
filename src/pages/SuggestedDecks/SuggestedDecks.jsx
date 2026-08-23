import { useRoyaLab } from "../../context/RoyaLabContext";
import useSuggestedDecks from "../../hooks/useSuggestedDecks";
import { NotebookPen, X, Flame, Swords } from "lucide-react";
import "./SuggestedDecks.css";

export default function SuggestedDecks() {
  const { decks, cards } = useRoyaLab();

  const {
    handleClickedButton,
    editedDeck,
    setEditedDeck,
    updateSuggestedDeck,
    deleteSuggestedDeck,
  } = useSuggestedDecks();

  return (
    <div className="suggested-decks">
      {decks.length === 0 ? (
        <div className="no-suggested-decks">
          <div className="no-suggested-decks-icons">
            <Flame />
            <Swords />
          </div>

          <h2>No decks available yet</h2>

          <p>
            Build and save your first deck and it will appear here.
          </p>
        </div>
      ) : (
        decks.map((deck) => {
          const isEditing = editedDeck?.id === deck.id;

          return (
            <div className="suggested-deck-row" key={deck.id}>
              <div className="deck-box">
                <div className="deck-header">
                  {isEditing ? (
                    <input
                      className="deck-edit-input"
                      value={editedDeck.name}
                      maxLength={15}
                      onChange={(e) => {
                        setEditedDeck((prev) => {
                          return {
                            ...prev,
                            name: e.target.value,
                          };
                        });
                      }}
                    />
                  ) : (
                    <span>{deck.name}</span>
                  )}

                  {isEditing && (
                    <div className="deck-edit-actions">
                      <button
                        className="deck-cancel-button"
                        onClick={() => setEditedDeck(null)}
                      >
                        Cancel
                      </button>

                      <button
                        className="deck-submit-button"
                        onClick={() =>
                          updateSuggestedDeck(editedDeck)
                        }
                      >
                        Submit
                      </button>
                    </div>
                  )}

                  <button
                    className="deck-update-button"
                    onClick={() => handleClickedButton(deck)}
                  >
                    <NotebookPen />
                  </button>
                </div>

                <div className="suggested-deck-cards">
                  {deck.cards.map((deckCard) => {
                    const matchedCard = cards.find((card) => {
                      return card.id === deckCard;
                    });

                    return (
                      <div
                        className="suggested-deck-card"
                        key={deckCard}
                      >
                        <img
                          src={matchedCard.imageUrl}
                          alt={matchedCard.name}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="deck-info">
                  <div className="deck-info-item">
                    <span>Arena</span>
                    <span>{deck.arena}</span>
                  </div>

                  <div className="deck-info-item">
                    <span>Notes</span>

                    {isEditing ? (
                      <textarea
                        className="deck-edit-textarea"
                        value={editedDeck.notes}
                        onChange={(e) => {
                          setEditedDeck((prev) => {
                            return {
                              ...prev,
                              notes: e.target.value,
                            };
                          });
                        }}
                      />
                    ) : (
                      <span>{deck.notes}</span>
                    )}
                  </div>

                  <div className="deck-info-item">
                    <span>Avg Elixir</span>
                    <span>{deck.averageElixir}</span>
                  </div>
                </div>
              </div>

              <div className="deck-delete-container">
                <button
                  className="deck-delete-button"
                  onClick={() => deleteSuggestedDeck(deck.id)}
                >
                  <X />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}