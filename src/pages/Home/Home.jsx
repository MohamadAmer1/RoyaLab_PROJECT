import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-crown">♛</h1>

        <h1 className="home-title">
          <span className="royal-text">Roya</span>
          <span className="lab-text">Lab</span>
        </h1>

        <h2 className="home-description">
          The ultimate Clash Royale analytics platform. Explore cards, build decks, track the meta, and shape the future of balance.
        </h2>

        <div className="home-actions">
          <Link to="/cards">Browse Cards 🎴</Link>
          <Link to="/meta">Arena Meta 📊</Link>
          <Link to="/decks">Check Decks 🔎</Link>
        </div>

        <div className="home-stats">
          <div className="stat-card">
            <div className="stat-icon">🃏</div>

            <div className="stat-info">
              <p>21</p>
              <p>Total Cards</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📈</div>

            <div className="stat-info">
              <p>21%</p>
              <p>Avg Win Rate</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📉</div>

            <div className="stat-info">
              <p>21%</p>
              <p>Avg Usage Rate</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🧬</div>

            <div className="stat-info">
              <p>11</p>
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
              <div className="card-placeholder"></div>
              <div className="card-placeholder"></div>
              <div className="card-placeholder"></div>
              <div className="card-placeholder"></div>
            </div>
          </div>

          <div className="card-section">
            <div className="card-section-header">
              <p>❄️ Highest Win Rate Cards</p>
            </div>

            <div className="card-slots">
              <div className="card-placeholder"></div>
              <div className="card-placeholder"></div>
              <div className="card-placeholder"></div>
              <div className="card-placeholder"></div>
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
