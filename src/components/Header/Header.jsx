import { Link, NavLink } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">♛</Link>
        <Link to="/" className="royal-logo">
          <span className="royal-text">Royal</span>
          <span className="lab-text">Lab</span>
        </Link>
      </div>
      <div className="header-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutweb">AboutWeb</NavLink>
        <NavLink to="/cards">Cards</NavLink>
        <NavLink to="/meta">ArenaMeta</NavLink>
        <NavLink to="/buildyourdeck">DeckBuilder</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/decks">SuggestedDecks</NavLink>
      </div>
    </div>
  );
}
