import { useRoyaLab } from "../../context/RoyaLabContext";
import { Droplet, Search, SlidersHorizontal, X } from "lucide-react";
import "./Card.css";
import { useState } from "react";
import cardsHelper from "../../helper/cardsHelper.js";

import noEvo from "../../assets/noEvo.png";

export default function Cards() {
  const { cards } = useRoyaLab();

  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("All");
  const [arena, setArena] = useState("");
  const [hasEvolution, setHasEvolution] = useState(false);
  const [sortBy, setSortBy] = useState("az");

  const [showingEvolution, setShowingEvolution] = useState([]);
  const [animatingCard, setAnimatingCard] = useState(null);

  const [flippedCards, setFlippedCards] = useState([]);

  let sortedCards = cardsHelper(
    cards,
    rarity,
    arena,
    hasEvolution,
    sortBy,
    search
  );

  function handleEvolutionClick(card) {
    if (!card.hasEvolution || !card.evolutionImage || animatingCard) {
      return;
    }

    setAnimatingCard(card.id);

    setTimeout(() => {
      setShowingEvolution((prev) => {
        const alreadyShowingEvolution = prev.includes(card.id);

        if (alreadyShowingEvolution) {
          return prev.filter((id) => id !== card.id);
        }

        return [...prev, card.id];
      });
    }, 350);

    setTimeout(() => {
      setAnimatingCard(null);
    }, 700);
  }

  function handleCardFlip(cardId) {
    setFlippedCards((prev) => {
      const isAlreadyFlipped = prev.includes(cardId);

      if (isAlreadyFlipped) {
        return prev.filter((id) => id !== cardId);
      }

      return [...prev, cardId];
    });
  }

  return (
    <div className="page-grid">
      <div className="cards-page">
        <div className="search-container">
          <Search className="search-icon" />

          <input
            id="cards-search"
            type="text"
            placeholder="Search for a card..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              className="clear-search"
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <X />
            </button>
          )}
        </div>

        <div className="cards-content">
          <div className="cards-filter">
            <div className="filter-title">
              <SlidersHorizontal />
              <h2>Filter</h2>
            </div>

            <div className="filter-section">
              <h3>Rarity</h3>

              <div className="filter-options">
                {["All", "Common", "Rare", "Epic", "Legendary"].map(
                  (rarityOption) => (
                    <button
                      key={rarityOption}
                      className={
                        rarity === rarityOption ? "filter-active" : ""
                      }
                      onClick={() => setRarity(rarityOption)}
                    >
                      {rarityOption}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="filter-section">
              <h3>Arena</h3>

              <input
                className="arena-input"
                type="number"
                min="0"
                placeholder="Arena number"
                value={arena}
                onChange={(e) => setArena(e.target.value)}
              />
            </div>

            <div className="filter-section">
              <label className="evolution-filter">
                <input
                  type="checkbox"
                  checked={hasEvolution}
                  onChange={(e) => setHasEvolution(e.target.checked)}
                />

                <span>Has Evolution</span>
              </label>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>

              <div className="sort-options">
                <button
                  className={sortBy === "az" ? "sort-active" : ""}
                  onClick={() => setSortBy("az")}
                >
                  A-Z
                </button>

                <button
                  className={sortBy === "most-used" ? "sort-active" : ""}
                  onClick={() => setSortBy("most-used")}
                >
                  Most Used
                </button>

                <button
                  className={sortBy === "least-used" ? "sort-active" : ""}
                  onClick={() => setSortBy("least-used")}
                >
                  Least Used
                </button>

                <button
                  className={sortBy === "most-wins" ? "sort-active" : ""}
                  onClick={() => setSortBy("most-wins")}
                >
                  Most Wins
                </button>

                <button
                  className={sortBy === "least-wins" ? "sort-active" : ""}
                  onClick={() => setSortBy("least-wins")}
                >
                  Least Wins
                </button>

                <button
                  className={sortBy === "lowest-elixir" ? "sort-active" : ""}
                  onClick={() => setSortBy("lowest-elixir")}
                >
                  Lowest Elixir
                </button>

                <button
                  className={sortBy === "highest-elixir" ? "sort-active" : ""}
                  onClick={() => setSortBy("highest-elixir")}
                >
                  Highest Elixir
                </button>
              </div>
            </div>
          </div>

          <div className="cards-container">
            {sortedCards.map((card) => {
              const isEvolutionShowing =
                showingEvolution.includes(card.id);

              const isAnimating = animatingCard === card.id;

              const isFlipped = flippedCards.includes(card.id);

              return (
                <div className="cards-flip-container" key={card.id}>
                  <div
                    className={`cards-flip-inner ${
                      isFlipped ? "card-flipped" : ""
                    }`}
                  >
                    {/* FRONT */}
                    <div
                      className={`card-box card-front ${card.rarity.toLowerCase()}`}
                    >
                      <button
                        type="button"
                        className="card-description-button"
                        onClick={() => handleCardFlip(card.id)}
                        aria-label={`Show description of ${card.name}`}
                      >
                        ⮞
                      </button>

                      <div
                        className={`card-image-container ${
                          isAnimating ? "card-image-animating" : ""
                        }`}
                      >
                        <img
                          src={
                            isEvolutionShowing
                              ? card.evolutionImage
                              : card.imageUrl
                          }
                          alt={card.name}
                          className={`card-image ${
                            isEvolutionShowing
                              ? "evolution-card-image"
                              : ""
                          }`}
                        />

                        {isAnimating && (
                          <div className="pixel-transition">
                            {Array.from({ length: 24 }).map(
                              (_, index) => (
                                <span
                                  key={index}
                                  className="pixel-square"
                                  style={{
                                    animationDelay: `${
                                      (5 -
                                        Math.floor(index / 4)) *
                                        0.04 +
                                      (index % 4) * 0.015
                                    }s`,
                                  }}
                                />
                              )
                            )}
                          </div>
                        )}
                      </div>

                      <div className="card-info">
                        <h2>{card.name}</h2>

                        <div className="card-main-stats">
                          <p className="card-rarity">
                            {card.rarity}
                          </p>

                          <button
                            type="button"
                            className={`card-evolution ${
                              card.hasEvolution
                                ? "has-evolution"
                                : "no-evolution"
                            } ${
                              isEvolutionShowing
                                ? "evolution-active"
                                : ""
                            }`}
                            onClick={() =>
                              handleEvolutionClick(card)
                            }
                            disabled={!card.hasEvolution}
                            aria-label={
                              card.hasEvolution
                                ? isEvolutionShowing
                                  ? `Show normal ${card.name}`
                                  : `Show evolution of ${card.name}`
                                : `${card.name} has no evolution`
                            }
                          >
                            <img
                              src={
                                card.hasEvolution
                                  ? "https://static.wikia.nocookie.net/clashroyale/images/8/81/Wild_Shard.png"
                                  : noEvo
                              }
                              alt=""
                            />
                          </button>

                          <div className="card-elixir">
                            <Droplet className="elixir-icon" />
                            <span>{card.elixir}</span>
                          </div>
                        </div>

                        <div className="card-rate-stats">
                          <div className="rate-box">
                            <span>WIN RATE</span>
                            <strong>{card.winRate}%</strong>
                          </div>

                          <div className="rate-box">
                            <span>USE RATE</span>
                            <strong>{card.useRate}%</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* BACK */}
                    <div
                      className={`card-box card-back ${card.rarity.toLowerCase()}`}
                    >
                      <button
                        type="button"
                        className="card-description-button"
                        onClick={() => handleCardFlip(card.id)}
                        aria-label={`Go back to ${card.name}`}
                      >
                        ⮜
                      </button>

                      <p className="card-description">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}