import { Funnel, Flame, Send, ThumbsUp, ThumbsDown } from "lucide-react";

import "./Community.css";

import { useRoyaLab } from "../../context/RoyaLabContext";
import useCommunitySuggestions from "../../hooks/useCommunitySuggestions";

export default function Community() {
  const { cards, sendComments, getComments, comments, updateCommentLikes } = useRoyaLab();
console.log(cards);

  const {
    showSuggestionForm,
    suggestionName,
    cardSearch,
    selectedCard,
    suggestionType,
    comment,
    cardOptions,
    typeFilter,
    sortBy,
    votedComments,

    setSuggestionName,
    setSuggestionType,
    setComment,
    setTypeFilter,
    setSortBy,

    handleToggleSuggestionForm,
    handleCardSearch,
    handleSelectCard,
    handlePostSuggestion,
    handleLike,
    handleDislike,
  } = useCommunitySuggestions(cards, sendComments, getComments, updateCommentLikes);
  return (
    <div className="community-page">
      <div className="community-header">
        <div className="community-header-title">
          <h2>OUR COMMUNITY IDEAS</h2>

          <span>Create & Vote on balance suggestions from the community.</span>
        </div>

        <div className="community-header-stats">
          <div className="community-stat">
            <span className="community-stat-number">112</span>

            <span className="community-stat-label">Suggestions</span>
          </div>

          <div className="community-stat">
            <span className="community-stat-number">3462</span>

            <span className="community-stat-label">Total Votes</span>
          </div>
        </div>
      </div>

      <div className="community-filters">
        <div className="community-filter-title">
          <Funnel size={15} />
          <span>Filter</span>
        </div>

        <div className="community-filter-row">
          <div
            className={`community-filter-option ${typeFilter === "All Types" ? "filter-all-active" : ""}`}
            onClick={() => setTypeFilter("All Types")}>
            All Types
          </div>

          <div
            className={`community-filter-option ${typeFilter === "Buff" ? "filter-buff-active" : ""}`}
            onClick={() => setTypeFilter("Buff")}>
            ▲ Buff
          </div>

          <div
            className={`community-filter-option ${typeFilter === "Nerf" ? "filter-nerf-active" : ""}`}
            onClick={() => setTypeFilter("Nerf")}>
            ▼ Nerf
          </div>

          <div
            className={`community-filter-option ${typeFilter === "Rework" ? "filter-rework-active" : ""}`}
            onClick={() => setTypeFilter("Rework")}>
            ⟳ Rework
          </div>

          <div
            className={`community-filter-option ${typeFilter === "Remove Card" ? "filter-remove-active" : ""}`}
            onClick={() => setTypeFilter("Remove Card")}>
            ✖ Remove Card
          </div>

          <div
            className={`community-filter-option ${typeFilter === "Other" ? "filter-other-active" : ""}`}
            onClick={() => setTypeFilter("Other")}>
            Other
          </div>
        </div>

        <div className="community-filter-row">
          <div className={`community-filter-option ${sortBy === "All" ? "sort-active" : ""}`} onClick={() => setSortBy("All")}>
            All
          </div>

          <div className={`community-filter-option ${sortBy === "A-Z" ? "sort-active" : ""}`} onClick={() => setSortBy("A-Z")}>
            A-Z
          </div>

          <div className={`community-filter-option ${sortBy === "Likes ↑" ? "sort-active" : ""}`} onClick={() => setSortBy("Likes ↑")}>
            Likes ↑
          </div>

          <div className={`community-filter-option ${sortBy === "Likes ↓" ? "sort-active" : ""}`} onClick={() => setSortBy("Likes ↓")}>
            Likes ↓
          </div>
        </div>
      </div>

      <div className="create-suggestion-section">
        <button className="add-suggestion-button" onClick={handleToggleSuggestionForm}>
          + Add Suggestion
        </button>

        <div className={`suggestion-form-wrapper ${showSuggestionForm ? "suggestion-form-open" : ""}`}>
          <div className="suggestion-form">
            <div className="suggestion-input-group">
              <label>Suggestion Name</label>

              <input
                type="text"
                placeholder="Give your suggestion a name..."
                value={suggestionName}
                onChange={(e) => setSuggestionName(e.target.value)}
              />
            </div>
            <div className="suggestion-input-group suggestion-card-search">
              <label>Card</label>

              <input type="text" placeholder="Search for a card..." value={cardSearch} onChange={handleCardSearch} />
              {cardSearch !== "" && selectedCard === null && (
                <div className="card-search-options">
                  {cardOptions.map((card) => {
                    return (
                      <div key={card.id} className="card-search-option" onClick={() => handleSelectCard(card)}>
                        {card.name}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="suggestion-input-group">
              <label>Suggestion Type</label>

              <div className="suggestion-types">
                <button
                  type="button"
                  className={suggestionType === "Buff" ? "type-buff-active" : ""}
                  onClick={() => setSuggestionType("Buff")}>
                  ▲ Buff
                </button>

                <button
                  type="button"
                  className={suggestionType === "Nerf" ? "type-nerf-active" : ""}
                  onClick={() => setSuggestionType("Nerf")}>
                  ▼ Nerf
                </button>

                <button
                  type="button"
                  className={suggestionType === "Rework" ? "type-rework-active" : ""}
                  onClick={() => setSuggestionType("Rework")}>
                  ⟳ Rework
                </button>

                <button
                  type="button"
                  className={suggestionType === "Remove" ? "type-remove-active" : ""}
                  onClick={() => setSuggestionType("Remove")}>
                  ✖ Remove
                </button>

                <button
                  type="button"
                  className={suggestionType === "Other" ? "type-other-active" : ""}
                  onClick={() => setSuggestionType("Other")}>
                  Other
                </button>
              </div>
            </div>
            <div className="suggestion-input-group">
              <label>Suggestion</label>

              <textarea placeholder="Explain your balance suggestion..." value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
          </div>
        </div>
        {showSuggestionForm && (
          <button className="post-suggestion-button" onClick={handlePostSuggestion}>
            <Send size={14} />

            <span>Post Suggestion</span>
          </button>
        )}
      </div>

      {comments.length === 0 ? (
        <div className="comments-empty">
          <Flame size={38} />

          <h3>No comments saved yet</h3>

          <span>Write your first comment and it'll appear here.</span>
        </div>
      ) : (
        <div className="comments-container">
          {comments.map((savedComment) => {
            const matchedCard = cards.find((card) => card.name === savedComment.card);

            const alreadyVoted = votedComments[savedComment.id];

            return (
              <div className="comment-box" key={savedComment.id}>
                <div className="comment-header">
                  {matchedCard && <img className="comment-card-image" src={matchedCard.imageUrl} alt={matchedCard.name} />}

                  <div className="comment-title">
                    <h3>{savedComment.name}</h3>

                    <span className={`comment-type comment-type-${savedComment.type.toLowerCase().replaceAll(" ", "-")}`}>
                      {savedComment.type}
                    </span>
                  </div>
                </div>

                <p className="comment-text">{savedComment.suggestion}</p>

                <hr className="comment-line" />

                <div className="comment-likes">
                  <button
                    type="button"
                    className="vote-button"
                    onClick={() => handleDislike(savedComment)}
                    disabled={Number(savedComment.like || 0) === 0 || alreadyVoted}>
                    <ThumbsDown size={16} />
                  </button>

                  <span className="comment-like-number">{Number(savedComment.like || 0)}</span>

                  <button type="button" className="vote-button" onClick={() => handleLike(savedComment)} disabled={alreadyVoted}>
                    <ThumbsUp size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
