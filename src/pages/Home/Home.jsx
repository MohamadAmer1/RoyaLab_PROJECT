import { Link } from "react-router-dom";
import "./Home.css";
import { useRoyaLab } from "../../context/RoyaLabContext";
import homeHelper from "../../helper/homeHelper";

export default function Home() {
  const { cards } = useRoyaLab();

  const {
    totalCards,
    averageWinRate,
    averageUseRate,
    evolutionCards,
    mostUsedCards,
    highestWinRateCards,
  } = homeHelper(cards);

  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-crown">♛</h1>

        <h1 className="home-title">
          <span className="royal-text">Roya</span>
          <span className="lab-text">Lab</span>
        </h1>

        <h2 className="home-description">
          The ultimate Clash Royale analytics platform. Explore cards, build
          decks, track the meta, and shape the future of balance.
        </h2>

        <div className="home-actions">
          <Link to="/cards">Browse Cards 🎴</Link>
          <Link to="/community">Arena Meta 📊</Link>
          <Link to="/decks">Check Decks 🔎</Link>
        </div>

        <div className="home-stats">
          <div className="stat-card">
            <div className="stat-icon">🃏</div>

            <div className="stat-info">
              <p>{totalCards}</p>
              <p>Total Cards</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>

            <div className="stat-info">
              <p>{averageWinRate}%</p>
              <p>Avg Win Rate</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📉</div>

            <div className="stat-info">
              <p>{averageUseRate}%</p>
              <p>Avg Usage Rate</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🧬</div>

            <div className="stat-info">
              <p>{evolutionCards}</p>
              <p>Evolution Cards</p>
            </div>
          </div>
        </div>

        <div className="home-card-sections">
          <div className="card-section">
            <div className="card-section-header">
              <p>🔥 Most Used Cards</p>

              <Link to="/cards">View here →</Link>
            </div>

            <div className="card-slots">
              {mostUsedCards.map((card) => {
                return (
                  <div className="home-card-preview" key={card.id}>
                    <div className="home-card-image-container">
                      <img
                        src={card.imageUrl}
                        alt={card.name}
                        className="home-card-image"
                      />
                    </div>

                    <p className="home-card-name">{card.name}</p>

                    <div className="home-card-rates">
                      <div className="home-rate-box">
                        <span>Win Rate</span>
                        <strong>{card.winRate}%</strong>
                      </div>

                      <div className="home-rate-box">
                        <span>Usage Rate</span>
                        <strong>{card.useRate}%</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-section">
            <div className="card-section-header">
              <p>❄️ Highest Win Rate Cards</p>

              <Link to="/cards">View here →</Link>
            </div>

            <div className="card-slots">
              {highestWinRateCards.map((card) => {
                return (
                  <div className="home-card-preview" key={card.id}>
                    <div className="home-card-image-container">
                      <img
                        src={card.imageUrl}
                        alt={card.name}
                        className="home-card-image"
                      />
                    </div>

                    <p className="home-card-name">{card.name}</p>

                    <div className="home-card-rates">
                      <div className="home-rate-box">
                        <span>Win Rate</span>
                        <strong>{card.winRate}%</strong>
                      </div>

                      <div className="home-rate-box">
                        <span>Usage Rate</span>
                        <strong>{card.useRate}%</strong>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="home-extra-actions">
          <div className="extra-action">
            <span>🛠️</span>
            <p>Build a Deck</p>
          </div>

          <div className="extra-action">
            <span>💬</span>
            <p>Community Changes</p>
          </div>
        </div>
      </div>
    </div>
  );
}