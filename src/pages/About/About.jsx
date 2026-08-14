import { Link } from "react-router-dom";
import { Camera, Sparkles, Zap, Layers, Swords, ChartColumn, Users, Target, Trophy, ShieldHalf } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <div className="page-grid">
      <div className="about-content">
        <div className="about-title">
          <span className="royal-text">ROYALE</span>
          <span className="lab-text">LAB</span>
        </div>

        <div className="about-subtitle">
          A high-fidelity companion concept for Clash Royale players - advanced deck building, live meta analytics, and a community-powered
          balance hub.
        </div>

        <div className="about-actions">
          <Link to="/cards" className="explore-btn">
            EXPLORE THE CARDS →
          </Link>
          <Link to="/buildyourdeck" className="deck-btn">
            BUILD A DECK
          </Link>
        </div>

        <div className="info-heading pink-heading">
          <Camera className="info-icon" />
          <span>SNAPSHOT</span>
          <hr className="fade-line" />
        </div>

        <div className="about-stats">
          <div className="stat-box stat-blue">
            <span>100+</span>
            <span>Cards Used</span>
          </div>

          <div className="stat-box stat-orange">
            <span>∞</span>
            <span>Deck Combos</span>
          </div>

          <div className="stat-box stat-pink">
            <span>10+</span>
            <span>Arena Tiers</span>
          </div>

          <div className="stat-box stat-green">
            <span>Live</span>
            <span>Meta Signals</span>
          </div>
        </div>

        <div className="about-description">
          <span>What is RoyaleLab</span>

          <p>
            RoyaleLab is a Clash Royale companion platform built to make card data easier and more enjoyable to explore. Browse cards,
            compare stats like elixir cost, win rate, and usage rate, explore the current meta, build decks, and share ideas for balance
            changes with the community. RoyaleLab brings all of this together in one interactive place, helping players understand the game
            and experiment with new strategies.
          </p>
        </div>

        <div className="info-heading green-heading">
          <Layers className="info-icon" />
          <span>CORE FEATURES</span>
          <hr className="fade-line" />
        </div>

        <div className="features-container">
          <div className="feature-card green-feature">
            <div className="feature-icon">
              <Swords />
            </div>

            <span>Advanced Deck Builder</span>

            <p>Drag cards into an 8-slot arena, watch average elixir and synergy analysis update in real time, and save your loadouts.</p>
          </div>

          <div className="feature-card cyan-feature">
            <div className="feature-icon">
              <ChartColumn />
            </div>

            <span>Live Meta Analytics</span>
            <p>
              Your paragraphRecharts-powered trends across trophy tiers - see which cards rise and fall as the meta shifts up the ladder.
            </p>
          </div>

          <div className="feature-card pink-feature">
            <div className="feature-icon">
              <Users />
            </div>

            <span>Community Balance Hub</span>

            <p>Propose buffs, nerfs, and reworks, then rally votes. Community sentiment shapes the change queue.</p>
          </div>

          <div className="feature-card orange-feature">
            <div className="feature-icon">
              <Target />
            </div>

            <span>Card Deep-Dives</span>

            <p>Every card surfaces HP, DPS, hit speed, and popular deck pairings on a neon stat dashboard.</p>
          </div>

          <div className="feature-card green-feature">
            <div className="feature-icon">
              <Trophy />
            </div>
            <span>Arena Tier View</span>

            <p>Slice the meta by trophy range and spot the decks climbing the ranks right now.</p>
          </div>

          <div className="feature-card cyan-feature">
            <div className="feature-icon">
              <ShieldHalf />
            </div>

            <span>Your Deck Library</span>

            <p>Saved decks sync to your account so your strategies are always one click away.</p>
          </div>
        </div>

        <div className="info-heading cyan-heading">
          <Zap className="info-icon" />
          <span>HOW IT WORKS</span>
          <hr className="fade-line" />
        </div>

        <div className="steps-container">
          <div className="step-card step-green">
            <span className="step-number">01</span>

            <span className="step-title">Browse the Marketplace</span>

            <p>Filter by rarity, type, elixir, and arena to surface exactly the card you need.</p>
          </div>

          <div className="step-card step-cyan">
            <span className="step-number">02</span>

            <span className="step-title">Assemble & Analyze</span>

            <p>Drop cards into the builder for instant elixir averages and synergy readouts.</p>
          </div>

          <div className="step-card step-pink">
            <span className="step-number">03</span>

            <span className="step-title">Shape the Meta</span>

            <p>Vote on balance suggestions and push community-backed changes to the top.</p>
          </div>
        </div>

        <div className="info-heading orange-heading">
          <Sparkles className="info-icon" />
          <span>BUILT WITH</span>
          <hr className="fade-line" />
        </div>
        <div className="built-with">
          <span className="tech-box">React</span>
          <span className="tech-box">JavaScript</span>
          <span className="tech-box">Firebase</span>
          <span className="tech-box">React Router</span>
          <span className="tech-box">Lucide React</span>
        </div>
      </div>
    </div>
  );
}
