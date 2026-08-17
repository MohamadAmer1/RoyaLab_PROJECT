import { useCards } from "../../context/RoyaLabContext";
import { Droplet, Search, SlidersHorizontal, X } from "lucide-react";
import "./Card.css";
import { useState } from "react";
import cardLogic from "../../helper/cardLogic.js";
export default function Cards() {
  const { cards } = useCards();

  const [search, setSearch] = useState("");
  const [rarity, setRarity] = useState("All");
  const [arena, setArena] = useState("");
  const [hasEvolution, setHasEvolution] = useState(false);
  const [sortBy, setSortBy] = useState("az");

  let sortedCards = cardLogic(cards, rarity, arena, hasEvolution, sortBy, search);

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
            <button className="clear-search" type="button" onClick={() => setSearch("")} aria-label="Clear search">
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
                {["All", "Common", "Rare", "Epic", "Legendary"].map((rarityOption) => (
                  <button
                    key={rarityOption}
                    className={rarity === rarityOption ? "filter-active" : ""}
                    onClick={() => setRarity(rarityOption)}>
                    {rarityOption}
                  </button>
                ))}
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
                <input type="checkbox" checked={hasEvolution} onChange={(e) => setHasEvolution(e.target.checked)} />

                <span>Has Evolution</span>
              </label>
            </div>
            <div className="filter-section">
              <h3>Sort By</h3>

              <div className="sort-options">
                <button className={sortBy === "az" ? "sort-active" : ""} onClick={() => setSortBy("az")}>
                  A-Z
                </button>

                <button className={sortBy === "most-used" ? "sort-active" : ""} onClick={() => setSortBy("most-used")}>
                  Most Used
                </button>

                <button className={sortBy === "least-used" ? "sort-active" : ""} onClick={() => setSortBy("least-used")}>
                  Least Used
                </button>

                <button className={sortBy === "most-wins" ? "sort-active" : ""} onClick={() => setSortBy("most-wins")}>
                  Most Wins
                </button>

                <button className={sortBy === "least-wins" ? "sort-active" : ""} onClick={() => setSortBy("least-wins")}>
                  Least Wins
                </button>

                <button className={sortBy === "lowest-elixir" ? "sort-active" : ""} onClick={() => setSortBy("lowest-elixir")}>
                  Lowest Elixir
                </button>

                <button className={sortBy === "highest-elixir" ? "sort-active" : ""} onClick={() => setSortBy("highest-elixir")}>
                  Highest Elixir
                </button>
              </div>
            </div>
          </div>
          <div className="cards-container">
            {sortedCards.map((card) => (
              <div className={`card-box ${card.rarity.toLowerCase()}`} key={card.id}>
                <div className="card-image-container">
                  <img src={card.imageUrl} alt={card.name} className="card-image" />
                </div>

                <div className="card-info">
                  <h2>{card.name}</h2>

                  <div className="card-main-stats">
                    <p className="card-rarity">{card.rarity}</p>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
