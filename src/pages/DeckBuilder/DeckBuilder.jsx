import { Search, X, Droplet } from "lucide-react";
import { useCards } from "../../context/RoyaLabContext";
import "./DeckBuilder.css";
import useDeckBuilder from "../../hooks/useDeckBuilder";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function DeckBuilder() {
  const { cards, sendDeck } = useCards();

  const {
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
  } = useDeckBuilder(cards, sendDeck);

  return (
    <div className="page-grid">
      <div className="deck-builder-page">
        <div className="deck-builder-heading">
          <h1>Deck Builder</h1>

          <span>Pick 8 cards, watch the elixir curve, then save your deck.</span>
        </div>

        <div className="deck-builder-content">
          {/* LEFT SIDE */}
          <div className="deck-builder-left">
            <div className="selected-deck-section">
              <div className="selected-deck-heading">
                <div className="selected-deck-title">
                  <h2>Your Deck</h2>
                  <span>{selectedCards.length} / 8</span>
                </div>

                {selectedCards.length > 0 && (
                  <button type="button" className="clear-deck" onClick={handleClearDeck}>
                    Clear 🗑️
                  </button>
                )}
              </div>

              <div className="deck-slots">
                {Array.from({ length: 8 }).map((_, index) => {
                  const card = selectedCards[index];

                  return (
                    <div className="deck-slot" key={index}>
                      {card ? (
                        <>
                          <img src={card.imageUrl} alt={card.name} />

                          {/* NEW: removes this specific selected card */}
                          <button
                            type="button"
                            className="remove-deck-card"
                            onClick={() => handleSelectCard(card)}
                            aria-label={`Remove ${card.name}`}>
                            <X />
                          </button>
                        </>
                      ) : (
                        <span className="deck-slot-plus">+</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DECK STATS */}
            <div className="deck-stats-section">
              <div className="average-elixir-section">
                <div className="average-elixir-heading">
                  <h2>Average Elixir</h2>

                  <span>{averageElixir.toFixed(1)}</span>
                </div>

                <div
                  className="average-elixir-bar"
                  style={{
                    "--elixir-fill": `${(averageElixir / 9) * 100}%`,
                  }}></div>
              </div>

              <div className="elixir-curve-section">
                <div className="elixir-curve-heading">
                  <h2>Elixir Curve</h2>

                  <p>Shows how many selected cards you have for each elixir cost.</p>
                </div>

                <div className="elixir-chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={elixirCurve}>
                      <XAxis dataKey="elixir" />

                      <YAxis allowDecimals={false} domain={[0, 8]} />

                      <Tooltip />

                      <Bar dataKey="cards" fill="rgb(170, 80, 255)" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* SAVE DECK */}
            <div className="save-deck-section">
              <h2>Save Deck</h2>

              <div className="save-deck-fields">
                <div className="deck-field">
                  <label htmlFor="deck-name">Deck Name</label>

                  <input
                    id="deck-name"
                    type="text"
                    placeholder="Enter deck name..."
                    value={deck.name}
                    onChange={(e) =>
                      setDeck((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="deck-field">
                  <label htmlFor="deck-arena">Arena</label>

                  <input
                    id="deck-arena"
                    type="number"
                    min="1"
                    placeholder="Enter arena number..."
                    value={deck.arena}
                    onChange={(e) =>
                      setDeck((prev) => ({
                        ...prev,
                        arena: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="deck-field">
                  <label htmlFor="deck-notes">Optional Notes</label>

                  <textarea
                    id="deck-notes"
                    placeholder="Example: Suitable for 5000–6000 trophies because it has strong defense and a fast cycle..."
                    value={deck.notes}
                    onChange={(e) =>
                      setDeck((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }></textarea>
                </div>
                <button type="button" className="save-deck-button" onClick={handleSaveDeck}>
                  Save Deck
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="deck-builder-right">
            <div className="deck-card-search">
              <Search className="deck-search-icon" />

              <input type="text" placeholder="Search for a card..." value={search} onChange={(e) => setSearch(e.target.value)} />

              {search && (
                <button type="button" className="deck-clear-search" onClick={() => setSearch("")} aria-label="Clear search">
                  <X />
                </button>
              )}
            </div>

            <div className="deck-cards-container">
              {filteredCards.map((card) => {
                const isSelected = selectedCards.some((selectedCard) => selectedCard.id === card.id);

                return (
                  <div
                    className={`deck-card ${isSelected ? "deck-card-selected" : ""}`}
                    key={card.id}
                    onClick={() => handleSelectCard(card)}>
                    <div className="deck-card-image">
                      <img src={card.imageUrl} alt={card.name} />
                    </div>

                    <div className="deck-card-content">
                      <h3>{card.name}</h3>

                      <div className="deck-card-info">
                        <span className={`deck-rarity ${card.rarity.toLowerCase()}`}>{card.rarity}</span>

                        <div className="deck-elixir">
                          <span className="deck-elixir-label">Elixir</span>

                          <div className="deck-elixir-drop">
                            <Droplet className="deck-elixir-icon" />
                            <span>{card.elixir}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
4;
